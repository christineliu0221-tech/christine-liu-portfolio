import type { Metadata } from "next";
import { ProjectPage } from "../../project-page";

export const metadata: Metadata = {
  title: "PCAOB Audit Analytics",
  description:
    "A case study connecting Power BI outputs with financial-statement risk in a PCAOB-compliant audit.",
};

export default function PCAOBAuditAnalyticsPage() {
  return (
    <ProjectPage
      eyebrow="CASE STUDY 02 · DATA-ENABLED ASSURANCE"
      title="PCAOB Audit Analytics"
      summary="A dashboard becomes valuable only when its signals are connected to financial-statement risk, business context, and a clear follow-up question."
      metrics={[
        { label: "Environment", value: "PCAOB-compliant audit" },
        { label: "Analytical view", value: "Power BI outputs" },
        { label: "Focus areas", value: "Inventory · COGS · Revenue" },
      ]}
      context="The audit of a global electronics distributor involved large and interconnected financial-statement areas. Analytical outputs could surface movements at scale, but those movements still needed to be interpreted in relation to the business, account relationships, and audit risk."
      contribution="I collaborated with a data analytics support team and reviewed Power BI dashboard outputs across inventory, cost of goods sold, and revenue. My contribution was to connect the visual patterns with audit context and identify movements that warranted attention or explanation."
      approach={[
        "Reviewed the dashboard structure and the relationship between the three financial-statement areas.",
        "Compared trends and movements to expected account behavior and the underlying business context.",
        "Flagged unusual patterns and translated visual signals into focused follow-up questions.",
        "Connected analytical observations with the broader audit approach and documentation needs.",
      ]}
      outcome="Used data-enabled review to identify trends and unusual movements that could inform audit focus and follow-up, while keeping interpretation grounded in financial-statement relationships."
      relevance="The work reflects the central challenge in audit analytics: technology can expand coverage, but professionals must still decide which signals matter, why they matter, and what evidence is needed next. Christine brings the financial context required to make analytics actionable."
      nextProject={{
        label: "AI-Assisted Pricing Analytics",
        href: "/projects/pricing-analytics",
      }}
    />
  );
}
