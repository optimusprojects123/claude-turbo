import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    version: "1.0.1",
    downloadUrl: "https://website-two-pi-64.vercel.app/turbocode.zip",
    releaseNotes: "Security hardening and bug fixes.",
  });
}
