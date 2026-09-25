// =============================================================
//  EDIT EVERYTHING ABOUT YOUR PORTFOLIO HERE
//  This is the ONLY file you need to touch to update content.
// =============================================================

export const profile = {
  name: "K Sachin Hebbar",
  // Short tag shown under the name in the hero
  role: "AI Builder · Agents · RAG · Ships Fast",
  // The big headline words rotate in the hero
  headlineWords: ["AI agents.", "RAG pipelines.", "Full-stack apps.", "Shipped fast."],
  // One-liner elevator pitch
  tagline:
    "I build production-grade AI systems end-to-end — multi-agent apps, RAG pipelines, and LLM products. With AI, I'm not the constraint. I ship.",
  location: "India · Open to Bangalore (Full-time)",
  available: true,

  // ---- Contact / socials ----
  email: "sachinhebbar95@gmail.com",
  emailAlt: "connectwithsachinhebbar@gmail.com",
  phone: "+91 9535710745",
  github: "https://github.com/Sachin-69",
  linkedin: "https://www.linkedin.com/in/ksachinhebbar/",
  resumeUrl: "/resume.pdf", // drop a resume.pdf into /public to enable this
  // Optional avatar shown in the Contact section only.
  // Drop your image into /public and set the path (e.g. "/me.jpg").
  // Leave "" to hide the photo entirely.
  photo: "/me.png",
};

// Punchy stats strip (edit freely)
export const stats = [
  { value: "10+", label: "AI projects shipped" },
  { value: "4", label: "LLM providers integrated" },
  { value: "1", label: "IEEE publication" },
  { value: "100%", label: "built with AI" },
];

// Scrolling marquee keywords
export const marquee = [
  "Claude Code",
  "AI Agents",
  "RAG",
  "LLM Guardrails",
  "FastAPI",
  "Next.js",
  "React Native",
  "Prompt Engineering",
  "Vector Search",
  "OpenAI",
  "Anthropic",
  "Ollama",
  "Ship Fast",
];

// =============================================================
//  PROJECTS
//  tags: any strings.  kind: "ai" | "mobile" | "web"
//  Set live / repo to "" to hide that button.
// =============================================================
export const projects = [
  {
    title: "MediCopilot",
    kind: "ai",
    blurb: "Multi-agent AI healthcare & insurance assistant.",
    description:
      "Built in 2 days at a global Microsoft × Cognizant hackathon. A multi-agent system that helps users navigate healthcare and insurance — coordinating specialized AI agents over a FastAPI backend with a JS frontend, powered by Azure OpenAI. Reasons across policies, claims, and medical queries.",
    tags: [
      "Multi-Agent AI",
      "Azure OpenAI",
      "FastAPI",
      "Python",
      "JavaScript",
      "LLMs",
    ],
    badge: "🏆 Microsoft × Cognizant Hackathon · 2 days",
    repo: "https://github.com/Sachin-69/medicopilot",
    live: "",
    accent: "electric",
    featured: true,
  },
  {
    title: "Document-Grounded Support Agent",
    kind: "ai",
    blurb: "RAG chatbot that answers ONLY from your docs — or refuses.",
    description:
      "End-to-end RAG pipeline (ingest → chunk → TF-IDF vector index → cosine-similarity retrieval → LLM). A two-stage guardrail refuses out-of-scope questions instead of hallucinating. Pluggable across OpenAI / Anthropic / Ollama / key-free mode. Ships with REST API, web UI, CLI, and tests.",
    tags: ["RAG", "LLM Guardrails", "scikit-learn", "FastAPI", "Multi-provider"],
    repo: "https://github.com/Sachin-69/chat-support-agent",
    live: "",
    accent: "cyan",
    featured: true,
  },
  {
    title: "Runiverse",
    kind: "mobile",
    blurb: "GPS shape-running tracker (iOS/Android).",
    description:
      "Cross-platform React Native app with real-time GPS tracking, live route rendering, and on-device signal processing (Haversine distance, moving-average smoothing, Douglas–Peucker simplification). Novel 'shape running' captures your route as an image; Convex backend powers auth, stats, and a global leaderboard.",
    tags: ["React Native", "Expo", "TypeScript", "Convex", "Maps"],
    repo: "https://github.com/Sachin-69/Runiverse",
    live: "", // TODO: add demo video / store link if you have one
    accent: "lime",
    featured: true,
  },
  // ---- TODO: fill these two in (details you mentioned) ----
  {
    title: "Wallets E-Commerce Store",
    kind: "web",
    blurb: "Full-stack e-commerce store for wallets.",
    description:
      "A full-stack online store for wallets. Next.js + TypeScript + Tailwind storefront (catalog, product options, cart, checkout) backed by a Django REST API with PostgreSQL/Supabase — handling products, stock, orders, order tracking, transactional emails, and an admin.",
    tags: [
      "Next.js",
      "TypeScript",
      "Django",
      "PostgreSQL",
      "Tailwind",
      "Full-Stack",
    ],
    repo: "https://github.com/Sachin-69/ecom-frontend",
    repo2: "https://github.com/Sachin-69/ecom-backend",
    live: "",
    accent: "pink",
    featured: true,
  },
  {
    title: "Inventory Management App",
    kind: "mobile",
    blurb: "Cross-platform Flutter inventory app.",
    description:
      "A cross-platform inventory management app built with Flutter (Android, Web, Windows) and backed by Firebase — for tracking stock, items, and inventory data from a single codebase across devices.",
    tags: ["Flutter", "Dart", "Firebase", "Cross-Platform", "Mobile"],
    repo: "https://github.com/Sachin-69/inventory_android",
    live: "",
    accent: "cyan",
    featured: false,
  },
];

// =============================================================
//  PUBLICATIONS
// =============================================================
export const publications = [
  {
    title:
      "Performance Analysis of Cooperative Content Sharing in LTE-MEC Networks for Video Streaming Applications",
    authors: "K. Sachin Hebbar, Vijayalakshmi M.",
    venue:
      "2025 IEEE 2nd International Conference on Information Technology, Electronics and Intelligent Communication Systems (ICITEICS)",
    type: "Conference Paper",
    publisher: "IEEE",
    year: "2025",
    link: "https://ieeexplore.ieee.org/document/11341117",
  },
];

// =============================================================
//  CERTIFICATIONS
// =============================================================
export const certifications = [
  {
    title: "Claude Certified Architect — Foundations",
    issuer: "Anthropic",
    meta: "Credential ID: g93tz2qjqm2z · Valid until Jun 5, 2027",
    link: "https://verify.skilljar.com/c/g93tz2qjqm2z",
    image: "/badge-claude.png",
  },
  {
    title: "Context Engineering — Foundation",
    issuer: "Cognizant",
    meta: "",
    link: "",
    image: "/badge-context.png",
  },
  {
    title: "Codex Solutions Practitioner",
    issuer: "OpenAI",
    meta: "Valid until Sep 2027",
    link: "/certificate-codex.png",
    image: "",
  },
  {
    title: "Build with Gemini",
    issuer: "Google",
    meta: "Skill badge",
    link: "https://www.credly.com/badges/210f49c1-06e2-4c00-9ded-61353c137432/public_url",
    image: "/badge-gemini.png",
  },
];

// =============================================================
//  EXPERIENCE
// =============================================================
export const experience = [
  {
    role: "Engineer Trainee",
    org: "Cognizant",
    period: "Jan 2026 — Present",
    points: [],
  },
  {
    role: "Android App Developer Intern",
    org: "Fleetop Technologies",
    period: "Jan 2025 — Jun 2025",
    points: [
      "Built a cross-platform Inventory Management app (Flutter + Firebase).",
    ],
  },
];

// =============================================================
//  EDUCATION
// =============================================================
export const education = [
  {
    degree: "B.E. Computer Science",
    school: "KLE Technological University",
    year: "2025",
  },
];

// =============================================================
//  SKILLS  (grouped)
// =============================================================
export const skills = [
  {
    group: "AI / LLM",
    items: [
      "Generative AI",
      "LLMs",
      "RAG",
      "AI Agents",
      "LLM Guardrails",
      "Prompt Engineering",
    ],
  },
  {
    group: "Frameworks & Tools",
    items: [
      "LangChain",
      "OpenAI API",
      "Anthropic API",
      "Ollama",
      "Vector DBs",
      "scikit-learn",
    ],
  },
  {
    group: "Languages",
    items: ["Python", "JavaScript", "TypeScript"],
  },
  {
    group: "Backend & Infra",
    items: ["FastAPI", "Uvicorn", "REST APIs", "Docker", "Kubernetes"],
  },
  {
    group: "Product",
    items: ["Next.js", "React Native", "Expo", "Firebase", "Convex", "Git"],
  },
];

// =============================================================
//  BUILT WITH AI  — directly answers "send me what you've built with AI"
// =============================================================
export const builtWithAI = {
  headline: "Everything here was built with AI.",
  sub: "I don't just use AI — I build with it as a force multiplier. Here's how I ship.",
  tools: [
    { name: "Claude Code", use: "Primary agentic pair-programmer" },
    { name: "Cursor", use: "In-editor AI edits & refactors" },
    { name: "Claude / GPT / Ollama", use: "Multi-provider LLM logic" },
    { name: "v0 / prompt-driven UI", use: "Rapid interface iteration" },
  ],
  workflow: [
    {
      step: "Spec",
      text: "Turn a fuzzy idea into a tight spec and a plan an agent can execute.",
    },
    {
      step: "Build",
      text: "Drive AI agents to write, wire, and refactor across the full stack.",
    },
    {
      step: "Verify",
      text: "Guardrails, tests, and manual review — AI speed, human judgment.",
    },
    {
      step: "Ship",
      text: "Deploy fast, iterate in production. Shipping beats perfect.",
    },
  ],
  proof: [
    { metric: "2 days", label: "MediCopilot: idea → working multi-agent app" },
    { metric: "6", label: "AI-built projects shipped end-to-end" },
    { metric: "100%", label: "of this portfolio built with AI" },
    { metric: "0", label: "constraints — I'm the multiplier" },
  ],
};
