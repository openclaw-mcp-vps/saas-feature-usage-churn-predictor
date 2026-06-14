export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          SaaS Analytics
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Predict Churn Before<br />It Costs You
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          ChurnSight analyzes feature adoption and usage patterns across your customer base to surface at-risk accounts — before they cancel.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $16/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No contracts. Cancel anytime.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📊</div>
            <h3 className="font-semibold text-white mb-1">Feature Usage Ingestion</h3>
            <p className="text-sm text-[#8b949e]">Upload CSV or push via API. We normalize and store every event automatically.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🤖</div>
            <h3 className="font-semibold text-white mb-1">ML Churn Scoring</h3>
            <p className="text-sm text-[#8b949e]">Background models score each account daily and flag those trending toward churn.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🎯</div>
            <h3 className="font-semibold text-white mb-1">Actionable Playbooks</h3>
            <p className="text-sm text-[#8b949e]">Get specific outreach recommendations tied to the features each account is underusing.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$16</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Up to 5,000 tracked accounts',
              'CSV & REST API ingestion',
              'Daily ML churn scoring',
              'Interactive usage dashboard',
              'Email alerts for at-risk accounts',
              'Lemon Squeezy billing included',
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does ChurnSight get my usage data?</h3>
            <p className="text-sm text-[#8b949e]">You can upload a CSV export from your product analytics tool or send events directly to our REST API. We handle normalization and storage automatically.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What ML model powers the churn predictions?</h3>
            <p className="text-sm text-[#8b949e]">We use a gradient-boosted classifier trained on feature adoption velocity, recency, and breadth signals. Models retrain weekly as your data grows.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription at any time?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Billing is managed through Lemon Squeezy and you can cancel from your customer portal with one click — no questions asked.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} ChurnSight. All rights reserved.
      </footer>
    </main>
  )
}
