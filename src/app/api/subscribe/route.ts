import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const SUBSCRIBERS_FILE = path.join(process.cwd(), "subscribers.json");

interface Subscriber {
  email: string;
  timestamp: string;
  ip: string | null;
}

async function readSubscribers(): Promise<Subscriber[]> {
  try {
    const data = await fs.readFile(SUBSCRIBERS_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeSubscribers(subscribers: Subscriber[]): Promise<void> {
  await fs.writeFile(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2));
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

    const subscribers = await readSubscribers();
    const alreadyExists = subscribers.some((s) => s.email === email);

    if (!alreadyExists) {
      const newSubscriber: Subscriber = {
        email,
        timestamp: new Date().toISOString(),
        ip: request.headers.get("x-forwarded-for"),
      };
      const updated = [...subscribers, newSubscriber];
      await writeSubscribers(updated);
    }

    return NextResponse.json({
      success: true,
      downloadUrl: "/claude-turbo.zip",
    });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
