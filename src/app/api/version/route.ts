import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    version: "1.1.0",
    downloadUrl: "https://website-two-pi-64.vercel.app/turbocode.zip",
    releaseNotes: "Full-screen-width window, side indicators, Anthropic branding, above-menu-bar rendering.",
  });
}
