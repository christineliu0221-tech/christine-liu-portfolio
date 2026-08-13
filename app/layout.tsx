import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Christine Liu | Audit & Risk Analytics",
    template: "%s | Christine Liu",
  },
  description:
    "U.S. CPA and Wake Forest MSBA candidate combining audit judgment with business analytics.",
  authors: [{ name: "Yu-Hsuan Christine Liu" }],
  keywords: [
    "audit analytics",
    "risk analytics",
    "U.S. CPA",
    "business analytics",
    "Wake Forest",
  ],
};

function SiteHeader() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="nav-shell">
        <Link className="brand" href="/" aria-label="Christine Liu home">
          <span aria-hidden="true">CL</span>
          <div>
            <strong>Christine Liu</strong>
            <small>U.S. CPA · Audit &amp; Analytics</small>
          </div>
        </Link>
        <nav aria-label="Primary navigation">
          <a href="/#about">About</a>
          <a href="/#work">Work</a>
          <a href="/#insights">Insights</a>
          <a href="/#resume">Résumé</a>
          <a className="nav-contact" href="/#contact">
            Connect
          </a>
        </nav>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-grid">
        <div>
          <span className="footer-monogram" aria-hidden="true">
            CL
          </span>
          <p>Audit rigor. Data clarity. Better decisions.</p>
        </div>
        <div className="footer-meta">
          <p>Yu-Hsuan Christine Liu · U.S. CPA</p>
          <p>Wake Forest University MSBA · Class of 2027</p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
