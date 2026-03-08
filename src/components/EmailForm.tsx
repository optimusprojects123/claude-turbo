"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const isValidEmail = (e: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) && e.length <= 254;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setState("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setState("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) {
        setState("error");
        setErrorMsg(data.error || "Something went wrong.");
        return;
      }

      setState("success");
      // Trigger download — hardcoded path, never trust server redirect
      window.location.href = "/claude-turbo.zip";
    } catch {
      setState("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

  if (state === "success") {
    return (
      <div className="text-center animate-fade-up">
        <div className="text-4xl mb-3">&#10003;</div>
        <p className="text-lg text-cyan-400 font-semibold">
          Download starting...
        </p>
        <p className="text-sm text-neutral-400 mt-2">
          If it doesn&apos;t start,{" "}
          <a
            href="/claude-turbo.zip"
            className="text-cyan-400 underline hover:text-cyan-300"
          >
            click here
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (state === "error") setState("idle");
          }}
          placeholder="you@email.com"
          className="flex-1 px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
          disabled={state === "loading"}
        />
        <button
          type="submit"
          disabled={state === "loading" || !email}
          className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
        >
          {state === "loading" ? "..." : "Download for macOS"}
        </button>
      </div>
      {state === "error" && (
        <p className="text-red-400 text-sm mt-2 text-center">{errorMsg}</p>
      )}
      <p className="text-neutral-500 text-xs mt-3 text-center">
        macOS 15.0+ required. We&apos;ll only email you about major updates.
      </p>
    </form>
  );
}
