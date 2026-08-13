import Link from "next/link";

const projects = [
  {
    number: "01",
    title: "SGX Listing Audit Workstream",
    summary:
      "Led a complex cost-audit workstream, coordinated two peers, and translated estimate testing into clear conclusions for engagement leadership.",
    tags: ["Audit judgment", "Team coordination", "Accounting estimates"],
    href: "/projects/sgx-listing-audit",
    proof: "Listing-related assurance",
  },
  {
    number: "02",
    title: "PCAOB Audit Analytics",
    summary:
      "Connected Power BI outputs with financial-statement risk across inventory, cost of goods sold, and revenue for a global electronics distributor.",
    tags: ["Power BI", "PCAOB audit", "Trend analysis"],
    href: "/projects/pcaob-audit-analytics",
    proof: "3 financial statement areas",
  },
  {
    number: "03",
    title: "AI-Assisted Pricing Analytics",
    summary:
      "Built a Python regression prototype to explore how historical engagement characteristics could support more data-informed fee estimates.",
    tags: ["Python", "Regression", "Pricing strategy"],
    href: "/projects/pricing-analytics",
    proof: "8-variable prototype",
  },
];

const insights = [
  {
    index: "A",
    title: "AI adoption needs professional judgment",
    text: "PCAOB outreach found that GenAI use in audits was still concentrated in administrative and research activities, even as firms continued investing. The opportunity is real, but so are supervision, privacy, security, and reliability requirements.",
    implication:
      "Christine's advantage is the combination of technical curiosity and the audit judgment needed to evaluate outputs rather than accept them at face value.",
    source: "PCAOB staff spotlight",
    href: "https://pcaobus.org/news-events/news-releases/news-release-detail/pcaob-staff-shares-observations-from-outreach-on-use-of-generative-artificial-intelligence-in-audits-and-financial-reporting",
  },
  {
    index: "B",
    title: "Analytics must remain reviewable",
    text: "PCAOB audit-documentation requirements emphasize a clear record of the evidence supporting significant conclusions and the ability to plan, supervise, and review the work.",
    implication:
      "That makes structured workpapers, traceable analysis, and reviewer-ready communication essential capabilities in data-enabled assurance.",
    source: "PCAOB AS 1215",
    href: "https://pcaobus.org/oversight/standards/auditing-standards/details/as-1215--audit-documentation-%28effective-on-12-15-2026%29",
  },
  {
    index: "C",
    title: "Digital disruption is now a board-level risk",
    text: "The IIA's Risk in Focus 2026 research placed digital disruption, including AI, second in the global risk ranking. Forty-eight percent of respondents rated it a top-five risk, up nine percentage points year over year.",
    implication:
      "Audit and risk teams need professionals who can connect technology change to controls, financial impact, and practical business response.",
    source: "IIA Risk in Focus 2026",
    href: "https://www.theiia.org/en/internal-audit-foundation/latest-research-and-products/risk-in-focus",
  },
];

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">U.S. CPA · AUDIT &amp; RISK ANALYTICS</p>
          <h1 id="hero-title">
            Audit rigor.
            <span>Data clarity.</span>
            Better decisions.
          </h1>
          <p className="hero-lead">
            I combine 7+ years of audit, tax, and financial reporting
            experience with business analytics to make complex evidence
            clearer, more reviewable, and more useful for decisions.
          </p>
          <div className="button-row">
            <a className="button button-primary" href="#work">
              Explore selected work
            </a>
            <a
              className="button button-secondary"
              href="/Christine-Liu-Resume.pdf"
              download
            >
              Download résumé
            </a>
          </div>
          <dl className="hero-credentials" aria-label="Professional credentials">
            <div>
              <dt>Credential</dt>
              <dd>U.S. CPA</dd>
            </div>
            <div>
              <dt>Experience</dt>
              <dd>7+ years</dd>
            </div>
            <div>
              <dt>Current chapter</dt>
              <dd>Wake Forest MSBA</dd>
            </div>
          </dl>
        </div>

        <div className="hero-visual">
          <img
            className="hero-portrait"
            src="/christine-liu-headshot.jpg"
            alt="Christine Liu wearing a navy blazer in a professional portrait"
          />
          <div className="visual-caption">
            <span>Targeting Track</span>
            <strong>From audit execution to data-enabled insight</strong>
          </div>
        </div>
      </section>

      <section className="intro-band" id="introduction" aria-labelledby="intro-title">
        <div className="section-shell intro-grid">
          <div>
            <p className="section-kicker">INTRODUCTION</p>
            <h2 id="intro-title">A concise professional introduction</h2>
            <p className="section-lead compact">
              The final video will connect my audit foundation, analytics
              training, and the business problems I am ready to solve next.
            </p>
            <div className="video-keywords" aria-label="Introduction themes">
              <span>Professional judgment</span>
              <span>Analytical thinking</span>
              <span>Commercial relevance</span>
            </div>
          </div>

          <div className="video-placeholder" role="group" aria-label="Video introduction placeholder">
            <div className="video-frame-mark" aria-hidden="true">
              <span />
            </div>
            <div>
              <p className="video-label">PROFESSIONAL INTRODUCTION</p>
              <h3>75–90 second video</h3>
              <p>
                Recording slot prepared. The final MP4 and captions will be
                added here before Canvas submission.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell narrative" id="about" aria-labelledby="about-title">
        <div className="section-heading split-heading">
          <div>
            <p className="section-kicker">CAREER NARRATIVE</p>
            <h2 id="about-title">A deliberate evolution</h2>
          </div>
          <p className="section-lead">
            I am not leaving audit behind. I am extending professional judgment
            with analytics so evidence can be explored at greater scale and
            communicated with greater clarity.
          </p>
        </div>

        <ol className="narrative-steps">
          <li>
            <span className="step-number">01</span>
            <div>
              <p className="step-label">Foundation</p>
              <h3>Built financial and regulatory fluency</h3>
              <p>
                Developed hands-on expertise across bookkeeping, tax
                attestations, financial statements, transfer pricing, and
                end-to-end audit execution.
              </p>
            </div>
          </li>
          <li>
            <span className="step-number">02</span>
            <div>
              <p className="step-label">Expansion</p>
              <h3>Applied judgment in complex engagements</h3>
              <p>
                Supported PCAOB-compliant work, interpreted Power BI outputs,
                tested accounting estimates, and led a listing-related
                workstream with direct leadership exposure.
              </p>
            </div>
          </li>
          <li>
            <span className="step-number">03</span>
            <div>
              <p className="step-label">Direction</p>
              <h3>Adding modern analytical depth</h3>
              <p>
                Pursuing an M.S. in Business Analytics at Wake Forest to deepen
                capability in Python, SQL, statistics, visualization, and
                data-informed decision support.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section className="expertise-section" id="expertise" aria-labelledby="expertise-title">
        <div className="section-shell">
          <div className="section-heading">
            <p className="section-kicker light">VALUE I BRING</p>
            <h2 id="expertise-title">Three capabilities, one operating style</h2>
          </div>
          <div className="expertise-grid">
            <article>
              <span className="expertise-index">01</span>
              <h3>Professional judgment</h3>
              <p>
                Evaluate accounting estimates, financial reporting issues, and
                unusual movements with a disciplined risk lens.
              </p>
              <ul>
                <li>Audit &amp; assurance</li>
                <li>Workpaper review</li>
                <li>Financial reporting</li>
              </ul>
            </article>
            <article>
              <span className="expertise-index">02</span>
              <h3>Analytics in context</h3>
              <p>
                Use data tools to investigate a business question—not simply to
                produce another dashboard or model.
              </p>
              <ul>
                <li>Python &amp; SQL</li>
                <li>Power BI &amp; Excel</li>
                <li>Statistics &amp; visualization</li>
              </ul>
            </article>
            <article>
              <span className="expertise-index">03</span>
              <h3>Structured execution</h3>
              <p>
                Translate complex work into reviewable steps, coordinate peers,
                and communicate conclusions to senior stakeholders.
              </p>
              <ul>
                <li>Project leadership</li>
                <li>Technical coaching</li>
                <li>Stakeholder communication</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section-shell work-section" id="work" aria-labelledby="work-title">
        <div className="section-heading split-heading">
          <div>
            <p className="section-kicker">SELECTED WORK</p>
            <h2 id="work-title">Evidence behind the narrative</h2>
          </div>
          <p className="section-lead">
            Each case shows the business context, my specific contribution,
            the method I used, and the decision value of the work.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-number">{project.number}</div>
              <div className="project-main">
                <p className="project-proof">{project.proof}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="tag-list" aria-label={`${project.title} skills`}>
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <Link className="project-link" href={project.href}>
                View case study <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>

        <div className="supporting-proof">
          <div>
            <p className="section-kicker">ADDITIONAL EVIDENCE</p>
            <h3>Transfer pricing analysis</h3>
          </div>
          <p>
            Authored the firm's first transfer pricing report, conducting a
            global comparable-company search and evaluating profitability
            against an interquartile arm's-length range.
          </p>
          <span>Research discipline · Benchmarking · Commercial context</span>
        </div>
      </section>

      <section className="insights-section" id="insights" aria-labelledby="insights-title">
        <div className="section-shell">
          <div className="section-heading split-heading">
            <div>
              <p className="section-kicker">MARKET PERSPECTIVE</p>
              <h2 id="insights-title">What I am watching</h2>
            </div>
            <p className="section-lead">
              Three shifts shaping the future of audit and risk—and why they
              matter for the work I want to do.
            </p>
          </div>

          <div className="insight-grid">
            {insights.map((insight) => (
              <article key={insight.index}>
                <span className="insight-index">{insight.index}</span>
                <h3>{insight.title}</h3>
                <p>{insight.text}</p>
                <div className="implication">
                  <strong>Why it matters</strong>
                  <p>{insight.implication}</p>
                </div>
                <a href={insight.href} target="_blank" rel="noreferrer">
                  Source: {insight.source} <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell resume-section" id="resume" aria-labelledby="resume-title">
        <div className="resume-card">
          <div className="resume-intro">
            <p className="section-kicker light">RÉSUMÉ</p>
            <h2 id="resume-title">Experience built across the full audit cycle</h2>
            <p>
              From hands-on accounting and tax work to multinational assurance
              and team-level review, my background gives analytics a practical
              financial context.
            </p>
            <div className="button-row">
              <a
                className="button button-light"
                href="/Christine-Liu-Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View résumé
              </a>
              <a
                className="text-link-light"
                href="/Christine-Liu-Resume.pdf"
                download
              >
                Download PDF <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <ol className="experience-list">
            <li>
              <span>2026–2027</span>
              <div>
                <strong>Wake Forest University</strong>
                <p>M.S. in Business Analytics candidate</p>
              </div>
            </li>
            <li>
              <span>2024–2026</span>
              <div>
                <strong>Hong Yu CPAs</strong>
                <p>Senior Auditor</p>
              </div>
            </li>
            <li>
              <span>2022–2024</span>
              <div>
                <strong>Ernst &amp; Young</strong>
                <p>Audit Associate</p>
              </div>
            </li>
            <li>
              <span>2019–2022</span>
              <div>
                <strong>Hong Yu CPAs</strong>
                <p>Accountant / Auditor</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="section-shell contact-grid">
          <div>
            <p className="section-kicker">LET'S CONNECT</p>
            <h2 id="contact-title">Bring audit context to analytical questions.</h2>
          </div>
          <div className="contact-copy">
            <p>
              I am interested in audit analytics, risk analytics, internal audit
              analytics, and adjacent financial analytics opportunities.
            </p>
            <div className="contact-links">
              <a href="mailto:christineliu0221.usa@gmail.com">
                Email Christine <span aria-hidden="true">↗</span>
              </a>
              <a
                href="https://www.linkedin.com/in/yuhsuan-christine-liu"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
