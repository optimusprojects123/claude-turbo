import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const rateLimit = new Map<string, { count: number; reset: number }>();
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === "/api/subscribe") {
    const ip = req.headers.get("x-real-ip") ?? req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
    const now = Date.now();
    const entry = rateLimit.get(ip);

    if (!entry || entry.reset < now) {
      rateLimit.set(ip, { count: 1, reset: now + WINDOW_MS });
    } else if (entry.count >= MAX_REQUESTS) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    } else {
      rateLimit.set(ip, { count: entry.count + 1, reset: entry.reset });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
