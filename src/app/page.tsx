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
        <div className="animate-fade-up mb-6">
          <Image
            src="/icon.png"
            alt="TurboCode"
            width={100}
            height={100}
            className="rounded-[22px] shadow-2xl shadow-cyan-500/20"
            priority
          />
        </div>

        <h1 className="animate-fade-up text-5xl sm:text-6xl font-bold tracking-tight text-center">
          Turbo
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Code
          </span>
        </h1>

        <p className="animate-fade-up-delay text-lg sm:text-xl text-neutral-400 mt-4 text-center max-w-xl leading-relaxed">
          Your Claude Code companion, living in the notch. Auto-allow
          permissions, skip the clicks, ship faster.
        </p>

        <div className="animate-fade-up-delay-2 mt-10 w-full max-w-lg">
          <EmailForm />
        </div>
      </main>

      {/* How it works */}
      <section className="px-6 py-24 border-t border-neutral-800/50">
        <h2 className="text-3xl font-bold text-center mb-4">
          How it works
        </h2>
        <p className="text-neutral-400 text-center max-w-lg mx-auto mb-16">
          TurboCode sits in your MacBook notch and handles Claude Code
          permission prompts so you don&apos;t have to.
        </p>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">
              Step 1
            </div>
            <h3 className="text-xl font-bold mb-3">
              Open settings from the notch
            </h3>
            <p className="text-neutral-400 leading-relaxed">
              Click the notch area on your MacBook and the settings panel drops
              down. Toggle Turbo Mode on, pick your auto-allow delay, and hit
              Apply.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-neutral-800 shadow-xl shadow-black/40">
            <Image
              src="/screenshot-settings.png"
              alt="TurboCode settings panel dropping down from the MacBook notch"
              width={800}
              height={500}
              className="w-full"
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-20">
          <div className="md:order-2">
            <div className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">
              Step 2
            </div>
            <h3 className="text-xl font-bold mb-3">
              Permissions get auto-approved
            </h3>
            <p className="text-neutral-400 leading-relaxed">
              Every time Claude Code asks for permission, TurboCode
              auto-allows it and shows you a quick notification of what was
              approved. No interruptions.
            </p>
          </div>
          <div className="md:order-1 rounded-2xl overflow-hidden border border-neutral-800 shadow-xl shadow-black/40">
            <Image
              src="/screenshot-notification.png"
              alt="TurboCode notification showing auto-approved Bash command"
              width={800}
              height={300}
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-24 border-t border-neutral-800/50">
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

      {/* CTA */}
      <section className="px-6 py-20 border-t border-neutral-800/50 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to stop clicking Allow?</h2>
        <p className="text-neutral-400 mb-8 max-w-md mx-auto">
          Download TurboCode and let it handle the permissions while you
          focus on building.
        </p>
        <div className="max-w-lg mx-auto">
          <EmailForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 py-8 text-center text-sm text-neutral-500">
        <p>
          TurboCode v1.0 &mdash; macOS 15.0+ required &mdash; Built for
          Claude Code users
        </p>
        <p className="mt-3 space-x-4">
          <a href="/privacy" className="hover:text-neutral-300 transition-colors">Privacy Policy</a>
          <a href="/terms" className="hover:text-neutral-300 transition-colors">Terms of Use</a>
        </p>
      </footer>
    </div>
  );
}
