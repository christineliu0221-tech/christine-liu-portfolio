import type { Metadata } from "next";
import { ProjectPage } from "../../project-page";

export const metadata: Metadata = {
  title: "SGX Listing Audit Workstream",
  description:
    "A case study in accounting-estimate testing, team coordination, and listing-related assurance.",
};

export default function SGXListingAuditPage() {
  return (
    <ProjectPage
      eyebrow="CASE STUDY 01 · ASSURANCE LEADERSHIP"
      title="SGX Listing Audit Workstream"
      summary="Leading a complex cost-audit workstream required more than accurate testing. It required a clear method, coordinated execution, and conclusions that engagement leadership could review and use."
      metrics={[
        { label: "Environment", value: "Listing-related audit" },
        { label: "Team coordination", value: "2 peer-level staff" },
        { label: "Core judgment", value: "Estimate-to-actual testing" },
      ]}
      context="A content-creator cost stream involved management estimates, individual agreements, accounting records, and subsequent actual amounts. The engagement needed a defensible view of whether recorded accruals were reasonable in a high-visibility listing environment."
      contribution="I served as the primary engagement staff for the workstream, coordinated two peer-level staff, and worked directly with the Senior Manager on the audit approach. My role covered both hands-on testing and the structure needed to keep the work consistent and reviewable."
      approach={[
        "Clarified the population, relevant agreements, accounting records, and estimate mechanics before testing.",
        "Selected and traced samples from streamer agreements to the underlying accounting records.",
        "Reconciled estimated cost accruals to subsequent actual amounts and investigated meaningful variances.",
        "Synthesized evidence and documented conclusions about the reasonableness of management's estimates.",
      ]}
      outcome="Delivered a reviewable body of work that supported engagement leadership's assessment of management's cost estimates while keeping testing, variance analysis, and conclusions connected."
      relevance="Audit and risk analytics roles still depend on the same core disciplines: define the question, understand the data-generating process, investigate exceptions, and communicate a conclusion that another professional can review. This case demonstrates judgment, ownership, and execution under pressure."
      nextProject={{
        label: "PCAOB Audit Analytics",
        href: "/projects/pcaob-audit-analytics",
      }}
    />
  );
}
