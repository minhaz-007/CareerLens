import { analyseRoleReadiness, type RoleEvidence } from "./role-profiles";

export type AnalysisCheck = {
  name: string;
  passed: boolean;
  message: string;
  category: "structure" | "contact" | "impact" | "readability";
};

export type CVAnalysis = {
  cvHealth: {
    score: number;

    scores: {
      structure: number;
      readability: number;
      impact: number;
    };

    stats: {
      critical: number;
      improvements: number;
      passed: number;
    };

    checks: AnalysisCheck[];
  };

  roleReadiness: {
    targetRole: string;
    score: number | null;
    status: "not-analysed" | "analysed" | "unsupported";
    profileId: string | null;
    family: string | null;
    confidence: "high" | "medium" | "low" | "none";
    evidence: RoleEvidence[];
  };
};

export function analyseCVText(text: string, targetRole = ""): CVAnalysis {
  const cleanText = text.replace(/\s+/g, " ").trim();

  const checks: AnalysisCheck[] = [];

  function addCheck(
    name: string,
    passed: boolean,
    message: string,
    category: AnalysisCheck["category"]
  ) {
    checks.push({
      name,
      passed,
      message,
      category,
    });
  }

  // ==================================================
  // LAYER 1 — CV HEALTH
  // ==================================================

  // --------------------------------------------------
  // STRUCTURE
  // --------------------------------------------------

  const hasExperience =
    /\b(experience|employment|work history|professional experience)\b/i.test(
      text
    );

  const hasEducation =
    /\b(education|academic background|qualifications)\b/i.test(text);

  const hasSkills =
    /\b(skills|technical skills|core skills|competencies|technologies)\b/i.test(
      text
    );

  const hasSummary =
    /\b(summary|profile|professional profile|personal profile|objective)\b/i.test(
      text
    );

  addCheck(
    "Experience section",
    hasExperience,
    hasExperience
      ? "A recognisable experience section was detected."
      : "Consider adding a clearly labelled Experience section.",
    "structure"
  );

  addCheck(
    "Education section",
    hasEducation,
    hasEducation
      ? "A recognisable Education section was detected."
      : "Consider using a clearly labelled Education section.",
    "structure"
  );

  addCheck(
    "Skills section",
    hasSkills,
    hasSkills
      ? "A recognisable Skills section was detected."
      : "A dedicated Skills section could improve recruiter scanning.",
    "structure"
  );

  addCheck(
    "Professional summary",
    hasSummary,
    hasSummary
      ? "A professional profile or summary was detected."
      : "A concise professional summary could communicate your value more quickly.",
    "structure"
  );

  const structureSignals = [hasExperience, hasEducation, hasSkills, hasSummary];

  const structureScore = Math.round(
    40 +
      (structureSignals.filter(Boolean).length / structureSignals.length) * 60
  );

  // --------------------------------------------------
  // CONTACT / READABILITY
  // --------------------------------------------------

  const hasEmail = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.test(cleanText);

  const hasPhone = /(?:\+?\d[\d\s().-]{7,}\d)/.test(cleanText);

  const hasLinkedIn = /linkedin(?:\.com)?/i.test(cleanText);

  addCheck(
    "Email address",
    hasEmail,
    hasEmail
      ? "An email address was detected."
      : "Make sure your CV contains a professional email address.",
    "contact"
  );

  addCheck(
    "Phone number",
    hasPhone,
    hasPhone
      ? "A phone number was detected."
      : "Make sure your CV contains a contact phone number.",
    "contact"
  );

  addCheck(
    "LinkedIn profile",
    hasLinkedIn,
    hasLinkedIn
      ? "A LinkedIn reference was detected."
      : "Consider adding an up-to-date LinkedIn profile if relevant.",
    "contact"
  );

  // --------------------------------------------------
  // LENGTH
  // --------------------------------------------------

  const words = cleanText.split(/\s+/).filter(Boolean);
  const wordCount = words.length;

  const reasonableLength = wordCount >= 250 && wordCount <= 1200;

  addCheck(
    "CV content length",
    reasonableLength,
    reasonableLength
      ? "Your CV contains a reasonable amount of text for automated review."
      : wordCount < 250
      ? "Your CV appears quite short and may need more evidence or detail."
      : "Your CV contains a large amount of text and may benefit from tighter editing.",
    "readability"
  );

  const readabilitySignals = [hasEmail, hasPhone, reasonableLength];

  const readabilityScore = Math.round(
    50 +
      (readabilitySignals.filter(Boolean).length / readabilitySignals.length) *
        50
  );

  // --------------------------------------------------
  // EVIDENCE & IMPACT
  // --------------------------------------------------

  const metricMatches =
    cleanText.match(
      /\b\d+(?:\.\d+)?%|\b£\s?\d+|\b\$\s?\d+|\b\d+\+|\b\d{2,}\b/g
    ) || [];

  const actionVerbs = [
    "achieved",
    "analysed",
    "analyzed",
    "automated",
    "built",
    "created",
    "delivered",
    "developed",
    "designed",
    "generated",
    "implemented",
    "improved",
    "increased",
    "launched",
    "led",
    "managed",
    "optimised",
    "optimized",
    "produced",
    "reduced",
    "saved",
    "streamlined",
  ];

  const actionVerbCount = actionVerbs.reduce((count, verb) => {
    const regex = new RegExp(`\\b${verb}\\b`, "gi");

    return count + (cleanText.match(regex)?.length || 0);
  }, 0);

  const hasMetrics = metricMatches.length >= 3;
  const hasActionLanguage = actionVerbCount >= 3;

  addCheck(
    "Measurable achievements",
    hasMetrics,
    hasMetrics
      ? "Your CV contains several measurable results or quantities."
      : "More measurable achievements could strengthen the evidence of your impact.",
    "impact"
  );

  addCheck(
    "Action-led language",
    hasActionLanguage,
    hasActionLanguage
      ? "Your CV uses several strong action verbs."
      : "Some responsibilities could be rewritten using stronger action-led language.",
    "impact"
  );

  let impactScore = 45;

  impactScore += Math.min(metricMatches.length * 4, 28);
  impactScore += Math.min(actionVerbCount * 3, 27);

  impactScore = Math.min(impactScore, 100);

  // --------------------------------------------------
  // CV HEALTH SCORE
  // --------------------------------------------------

  const cvHealthScore = Math.round(
    structureScore * 0.35 + readabilityScore * 0.3 + impactScore * 0.35
  );

  const failedChecks = checks.filter((check) => !check.passed);

  const criticalCheckNames = [
    "Experience section",
    "Education section",
    "Email address",
  ];

  const critical = failedChecks.filter((check) =>
    criticalCheckNames.includes(check.name)
  ).length;

  const improvements = Math.max(0, failedChecks.length - critical);

  const passed = checks.filter((check) => check.passed).length;

  // ==================================================
  // LAYER 2 — ROLE READINESS
  // ==================================================
  //
  // We intentionally do NOT calculate this yet.
  //
  // The next step will introduce role families and
  // evidence profiles rather than relying on simple
  // target-role keyword matching.
  // ==================================================

  const cleanTargetRole = targetRole.trim();
  const roleMatch = analyseRoleReadiness(cleanText, cleanTargetRole);

  return {
    cvHealth: {
      score: cvHealthScore,

      scores: {
        structure: structureScore,
        readability: readabilityScore,
        impact: impactScore,
      },

      stats: {
        critical,
        improvements,
        passed,
      },

      checks,
    },

    roleReadiness: {
      targetRole: cleanTargetRole,
      score: roleMatch.score,
      status: !cleanTargetRole
        ? "not-analysed"
        : roleMatch.matched
        ? "analysed"
        : "unsupported",
      profileId: roleMatch.profileId,
      family: roleMatch.family,
      confidence: roleMatch.confidence,
      evidence: roleMatch.evidence,
    },
  };
}
