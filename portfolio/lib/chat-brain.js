// =============================================================
//  Portfolio chat "brain" — no-key smart retrieval over your data.
//  Upgradeable: swap this for a real LLM call in /api/chat later.
// =============================================================
import {
  profile,
  projects,
  publications,
  certifications,
  experience,
  education,
  skills,
} from "@/lib/data";

// Build a set of knowledge "chunks" with keywords + an answer.
export function buildKnowledge() {
  const chunks = [];

  // Intro / who
  chunks.push({
    keys: ["who", "about", "yourself", "intro", "sachin", "you"],
    answer: `${profile.name} is an AI builder who ships production-grade AI systems end-to-end — multi-agent apps, RAG pipelines, and full-stack products. ${profile.location}.`,
  });

  // Ship fast / philosophy
  chunks.push({
    keys: ["ship", "fast", "speed", "quick", "constraint", "philosophy", "how"],
    answer:
      "With AI, Sachin isn't the constraint — he's the multiplier. He reviews workflows, rebuilds them with AI, and ships fast. Example: MediCopilot went from idea to a working multi-agent app in 2 days at a Microsoft × Cognizant hackathon.",
  });

  // Projects (each)
  projects.forEach((p) => {
    chunks.push({
      keys: [
        p.title.toLowerCase(),
        ...p.title.toLowerCase().split(/\s+/),
        ...p.tags.map((t) => t.toLowerCase()),
      ],
      answer: `${p.title} — ${p.blurb} ${p.description}${
        p.repo ? ` Code: ${p.repo}` : ""
      }${p.live ? ` Live: ${p.live}` : ""}`,
    });
  });

  // All projects overview
  chunks.push({
    keys: ["projects", "work", "built", "portfolio", "apps", "made", "shipped"],
    answer:
      "Sachin has shipped " +
      projects.length +
      " projects: " +
      projects.map((p) => p.title).join(", ") +
      ". Ask about any one of them!",
  });

  // Publication
  publications.forEach((pub) => {
    chunks.push({
      keys: [
        "publication",
        "paper",
        "research",
        "ieee",
        "published",
        "iciteics",
        "lte",
        "mec",
      ],
      answer: `Published: "${pub.title}" (${pub.authors}) at ${pub.venue}, ${pub.publisher} ${pub.year}.${
        pub.link ? ` Read it: ${pub.link}` : ""
      }`,
    });
  });

  // Certifications
  chunks.push({
    keys: [
      "cert",
      "certification",
      "certified",
      "claude",
      "anthropic",
      "cognizant",
      "context engineering",
      "credential",
    ],
    answer:
      "Certifications: " +
      certifications.map((c) => `${c.title} (${c.issuer})`).join("; ") +
      ".",
  });

  // Experience
  chunks.push({
    keys: ["experience", "work history", "job", "cognizant", "role", "current"],
    answer:
      "Experience: " +
      experience.map((e) => `${e.role} at ${e.org} (${e.period})`).join("; ") +
      ".",
  });

  // Education
  chunks.push({
    keys: ["education", "study", "college", "university", "degree", "kle"],
    answer:
      "Education: " +
      education.map((e) => `${e.degree}, ${e.school} (${e.year})`).join("; ") +
      ".",
  });

  // Skills
  chunks.push({
    keys: [
      "skills",
      "tech",
      "stack",
      "technologies",
      "languages",
      "tools",
      "python",
      "typescript",
      "rag",
      "agents",
      "llm",
    ],
    answer:
      "Skills — " +
      skills.map((s) => `${s.group}: ${s.items.join(", ")}`).join(" | "),
  });

  // Contact
  chunks.push({
    keys: [
      "contact",
      "email",
      "reach",
      "hire",
      "phone",
      "linkedin",
      "github",
      "connect",
      "get in touch",
    ],
    answer: `Reach Sachin at ${profile.email} or ${profile.phone}. GitHub: ${profile.github} · LinkedIn: ${profile.linkedin}`,
  });

  // Role fit
  chunks.push({
    keys: [
      "razorpay",
      "role",
      "fit",
      "why",
      "hacker",
      "team",
      "builder",
      "hiring",
      "10x",
      "100x",
    ],
    answer:
      "Sachin is a fit for an AI hacker/builder team: he builds with AI end-to-end, ships fast, works without hierarchy, and lets output speak. Everything in this portfolio is proof — including the portfolio itself, built with AI.",
  });

  return chunks;
}

const STOP = new Set([
  "the", "a", "an", "is", "are", "of", "to", "and", "or", "in", "on", "for",
  "what", "whats", "tell", "me", "about", "your", "you", "do", "does", "did",
  "can", "with", "how", "i", "have", "has",
]);

function tokenize(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w && !STOP.has(w));
}

// Score each chunk against the query; return the best answer(s).
export function answerQuery(query, knowledge) {
  const qTokens = tokenize(query);
  if (qTokens.length === 0) {
    return "Ask me about Sachin's projects, skills, publication, or how he ships with AI.";
  }

  let best = null;
  let bestScore = 0;

  for (const chunk of knowledge) {
    let score = 0;
    for (const qt of qTokens) {
      for (const key of chunk.keys) {
        // exact whole-key match is strongest; only allow partial for longer
        // tokens to avoid noise from substrings inside descriptions.
        if (key === qt) score += 3;
        else if (qt.length >= 4 && (key.includes(qt) || qt.includes(key)))
          score += 1;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      best = chunk;
    }
  }

  if (!best || bestScore < 1.5) {
    return "I focus on Sachin's work. Try asking about a project (e.g. MediCopilot), his AI stack, the IEEE paper, certifications, or how to reach him.";
  }
  return best.answer;
}
