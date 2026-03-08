import Image from "next/image";
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
      <main className="flex-1 flex flex-col items-center justify-center px-6 pt-20 pb-16">
        {/* App icon */}
        <div className="animate-fade-up mb-6">
          <Image
            src="/icon.png"
            alt="Claude Turbo"
            width={120}
            height={120}
            className="rounded-3xl shadow-2xl shadow-cyan-500/20"
            priority
          />
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

        {/* Hero image */}
        <div className="animate-fade-up-delay-2 mt-16 w-full max-w-3xl">
          <Image
            src="/hero.png"
            alt="Claude Turbo in the MacBook notch"
            width={1200}
            height={675}
            className="rounded-2xl border border-neutral-800 shadow-2xl shadow-cyan-500/10"
          />
        </div>
      </main>

      {/* Features */}
      <section className="px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          Everything you need to{" "}
          <span className="text-cyan-400">go fast</span>
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-cyan-500/30 transition-colors"
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

      {/* Feature screenshot */}
      <section className="px-6 pb-24">
        <div className="max-w-2xl mx-auto">
          <Image
            src="/feature.png"
            alt="Claude Turbo settings panel"
            width={800}
            height={500}
            className="rounded-2xl border border-neutral-800 shadow-xl"
          />
          <p className="text-center text-sm text-neutral-500 mt-4">
            Settings drop down right from the notch — toggle turbo, set delay,
            done.
          </p>
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
