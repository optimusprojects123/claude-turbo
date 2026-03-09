export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-20">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-neutral-400 mb-4">Last updated: March 8, 2026</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">What We Collect</h2>
          <p className="text-neutral-400 leading-relaxed">
            When you download TurboCode, we collect your email address solely to
            notify you of major updates. We also store your IP address for
            rate-limiting purposes only.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            What the App Does Locally
          </h2>
          <p className="text-neutral-400 leading-relaxed">
            TurboCode runs entirely on your Mac. It communicates with Claude Code
            via a local Unix domain socket on your machine. No data from your
            Claude Code sessions is sent to any server. The app checks for
            updates by making a single GET request to our version endpoint — no
            personal data is included in this request.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Data Storage</h2>
          <p className="text-neutral-400 leading-relaxed">
            Email addresses are stored in an encrypted database hosted by
            Vercel. We do not sell, share, or transfer your email to any third
            party. Configuration is stored locally at{" "}
            <code className="text-[#CC785C]">
              ~/.claude/claude-island-config.json
            </code>
            .
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Your Rights</h2>
          <p className="text-neutral-400 leading-relaxed">
            You can request deletion of your email at any time by contacting us.
            The app can be fully uninstalled by deleting it from your
            Applications folder and removing the config file.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Contact</h2>
          <p className="text-neutral-400 leading-relaxed">
            For privacy questions, open an issue on our{" "}
            <a
              href="https://github.com/optimusprojects123/claude-turbo"
              className="text-[#CC785C] underline hover:text-[#d89070]"
            >
              GitHub repository
            </a>
            .
          </p>
        </section>

        <a
          href="/"
          className="text-[#CC785C] underline hover:text-[#d89070] text-sm"
        >
          Back to home
        </a>
      </div>
    </div>
  );
}
