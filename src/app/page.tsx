import EmailForm from "@/components/EmailForm";

const features = [
  {
    icon: "\u26A1",
    title: "Turbo Mode",
    desc: "Auto-allow all Claude Code permission requests instantly. No more clicking Allow hundreds of times.",
  },
  {
    icon: "\u23F1\uFE0F",
    title: "Configurable Delay",
    desc: "Set a 0-10 second window before auto-approving. Gives you time to deny if needed.",
  },
  {
    icon: "\uD83D\uDDA5\uFE0F",
    title: "Lives in the Notch",
    desc: "Blends into your MacBook's notch with a translucent menu-bar-style design. Click to access settings.",
  },
  {
    icon: "\uD83D\uDD14",
    title: "Smart Notifications",
    desc: "See what tools Claude is running and what got auto-approved, right from the notch.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 pt-24 pb-16">
        {/* Notch mockup */}
        <div className="animate-fade-up mb-8">
          <div className="relative">
            <div className="w-48 h-8 bg-neutral-900 rounded-b-2xl border border-neutral-800 flex items-center justify-center mx-auto">
              <span className="text-sm">{"\u26A1"}</span>
            </div>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          </div>
        </div>

        <h1 className="animate-fade-up text-5xl sm:text-6xl font-bold tracking-tight text-center">
          Claude{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Turbo
          </span>
        </h1>

        <p className="animate-fade-up-delay text-lg sm:text-xl text-neutral-400 mt-4 text-center max-w-xl">
          Your Claude Code companion, living in the notch. Auto-allow
          permissions, skip the clicks, ship faster.
        </p>

        {/* Email form */}
        <div className="animate-fade-up-delay-2 mt-10 w-full max-w-lg">
          <EmailForm />
        </div>
      </main>

      {/* Features */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-colors"
            >
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="text-lg font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 py-8 text-center text-sm text-neutral-500">
        <p>
          Claude Turbo v1.0 &mdash; macOS 15.0+ required &mdash; Built for
          Claude Code users
        </p>
      </footer>
    </div>
  );
}
