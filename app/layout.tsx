import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ChurnSight — Predict Churn Before It Happens',
  description: 'Analyzes user feature adoption and usage patterns to predict which customers will churn. Built for SaaS customer success teams.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7006b676-9d04-4732-9d1a-cf298ffc115c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
