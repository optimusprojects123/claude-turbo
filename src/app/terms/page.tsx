export default function TermsOfUse() {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-20">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>
        <p className="text-neutral-400 mb-4">Last updated: March 8, 2026</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Acceptance</h2>
          <p className="text-neutral-400 leading-relaxed">
            By downloading and using TurboCode, you agree to these terms. If you
            do not agree, do not use the software.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            Description of Service
          </h2>
          <p className="text-neutral-400 leading-relaxed">
            TurboCode is a free macOS utility that automates permission approval
            for Claude Code. It runs locally on your machine and does not
            transmit your code or session data to any external server.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Use at Your Own Risk</h2>
          <p className="text-neutral-400 leading-relaxed">
            TurboCode auto-approves tool permission requests from Claude Code.
            By enabling Turbo Mode, you acknowledge that all tool executions
            (including file writes, terminal commands, and network requests) will
            be approved without manual review. You are responsible for
            understanding the implications of auto-approving these actions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">No Warranty</h2>
          <p className="text-neutral-400 leading-relaxed">
            TurboCode is provided &quot;as is&quot; without warranty of any
            kind. We are not liable for any damages arising from the use of this
            software, including but not limited to data loss, system damage, or
            unintended actions performed by Claude Code while Turbo Mode is
            enabled.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Intellectual Property</h2>
          <p className="text-neutral-400 leading-relaxed">
            TurboCode is not affiliated with, endorsed by, or sponsored by
            Anthropic. &quot;Claude&quot; and &quot;Claude Code&quot; are
            trademarks of Anthropic, PBC. TurboCode is an independent
            third-party tool.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Changes</h2>
          <p className="text-neutral-400 leading-relaxed">
            We may update these terms at any time. Continued use of TurboCode
            after changes constitutes acceptance of the new terms.
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
