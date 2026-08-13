import type { Metadata } from "next";
import { ProjectPage } from "../../project-page";

export const metadata: Metadata = {
  title: "AI-Assisted Pricing Analytics",
  description:
    "A Python regression prototype exploring more data-informed professional fee estimates.",
};

export default function PricingAnalyticsPage() {
  return (
    <ProjectPage
      eyebrow="CASE STUDY 03 · ANALYTICAL PROTOTYPING"
      title="AI-Assisted Pricing Analytics"
      summary="A focused prototype exploring whether historical engagement characteristics could make professional fee estimates more consistent and evidence-based."
      metrics={[
        { label: "Tool", value: "Python" },
        { label: "Method", value: "Multiple linear regression" },
        { label: "Model inputs", value: "8 variables" },
      ]}
      context="Professional service pricing often blends experience, expected effort, client characteristics, and judgment. The project explored whether historical engagement data could supplement that judgment with a repeatable analytical reference point."
      contribution="I prototyped a pricing analysis workflow in Python with AI assistance, structured eight explanatory variables, applied multiple linear regression, and evaluated model fit. The project was exploratory rather than a production pricing system."
      approach={[
        "Translated the business question into a defined target and a set of eight potential explanatory variables.",
        "Prepared the analytical workflow and used Python to estimate a multiple linear regression model.",
        "Reviewed model fit and considered how variable relationships could be interpreted in a pricing context.",
        "Identified where additional data, validation, and governance would be required before operational use.",
      ]}
      outcome="Demonstrated how a familiar professional-services decision could be reframed as a testable analytical question, while making the limits of a prototype explicit."
      relevance="Strong analytics work is not defined by the most complex model. It is defined by whether the method fits the question, the result can be explained, and decision-makers understand the limitations. This project shows business framing, technical growth, and responsible interpretation."
      nextProject={{
        label: "Return to selected work",
        href: "/#work",
      }}
    />
  );
}
