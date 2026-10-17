import Link from "next/link";

type ProjectPageProps = {
  eyebrow: string;
  title: string;
  summary: string;
  metrics: Array<{ label: string; value: string }>;
  context: string;
  contributionHeading?: string;
  contribution: string;
  approach: string[];
  outcome: string;
  relevance: string;
  nextProject: { label: string; href: string };
  nextLabel?: string;
};

export function ProjectPage({
  eyebrow,
  title,
  summary,
  metrics,
  context,
  contributionHeading = "Clear ownership within a larger engagement",
  contribution,
  approach,
  outcome,
  relevance,
  nextProject,
  nextLabel = "Next case study",
}: ProjectPageProps) {
  return (
    <main id="main-content" className="case-page">
      <section className="case-hero section-shell">
        <Link className="back-link" href="/#work">
          <span aria-hidden="true">←</span> Back to selected work
        </Link>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="case-summary">{summary}</p>
        <dl className="case-metrics">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <dt>{metric.label}</dt>
              <dd>{metric.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="case-body section-shell">
        <aside className="case-nav" aria-label="Case study sections">
          <p>CASE STRUCTURE</p>
          <a href="#context">Context</a>
          <a href="#contribution">Contribution</a>
          <a href="#approach">Approach</a>
          <a href="#outcome">Outcome</a>
          <a href="#relevance">Relevance</a>
        </aside>

        <div className="case-content">
          <section id="context">
            <p className="section-kicker">01 · CONTEXT</p>
            <h2>The business and assurance question</h2>
            <p>{context}</p>
          </section>

          <section id="contribution">
            <p className="section-kicker">02 · MY CONTRIBUTION</p>
            <h2>{contributionHeading}</h2>
            <p>{contribution}</p>
          </section>

          <section id="approach">
            <p className="section-kicker">03 · APPROACH</p>
            <h2>A structured path from evidence to conclusion</h2>
            <ol className="approach-list">
              {approach.map((step, index) => (
                <li key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </section>

          <section id="outcome">
            <p className="section-kicker">04 · OUTCOME</p>
            <h2>Decision value</h2>
            <div className="case-outcome">{outcome}</div>
          </section>

          <section id="relevance">
            <p className="section-kicker">05 · MARKET RELEVANCE</p>
            <h2>Why this work transfers</h2>
            <p>{relevance}</p>
          </section>

          <div className="confidentiality-note">
            <strong>Confidentiality note</strong>
            <p>
              This case study describes professional scope and methodology at a
              high level. Client records, workpapers, and confidential data are
              not reproduced.
            </p>
          </div>

          <Link className="next-project" href={nextProject.href}>
            <span>{nextLabel}</span>
            <strong>{nextProject.label}</strong>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
