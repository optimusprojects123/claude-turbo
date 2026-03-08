import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";

interface Subscriber {
  email: string;
  timestamp: string;
  ip: string | null;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = (body.email || "").trim().toLowerCase();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    if (email.length > 254) {
      return NextResponse.json(
        { error: "Email address too long." },
        { status: 400 }
      );
    }

    // Check if already subscribed
    const exists = await kv.sismember("subscribers:emails", email);

    if (!exists) {
      const rawIp =
        request.headers.get("x-real-ip") ??
        request.headers.get("x-forwarded-for") ??
        "";
      const ip = rawIp.split(",")[0].trim();
      const sanitizedIp =
        /^[\d.]{7,15}$|^[0-9a-f:]{3,39}$/i.test(ip) ? ip : null;

      const subscriber: Subscriber = {
        email,
        timestamp: new Date().toISOString(),
        ip: sanitizedIp,
      };

      // Store in a Redis set (dedup) and list (ordered)
      await kv.sadd("subscribers:emails", email);
      await kv.lpush("subscribers:list", JSON.stringify(subscriber));
    }

    return NextResponse.json({
      success: true,
      downloadUrl: "/turbocode.zip",
    });
  } catch (err) {
    // If KV is not configured, fall back gracefully
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    if (errorMessage.includes("REDIS") || errorMessage.includes("KV")) {
      // KV not set up yet — still allow download
      return NextResponse.json({
        success: true,
        downloadUrl: "/turbocode.zip",
      });
    }
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
