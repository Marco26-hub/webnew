/* ============================================================
   SITE CONTENT — single source of truth.
   Swap copy here; every page/section reads from this file so the
   "context graph" stays coherent.
   ============================================================ */

export const site = {
  name: "Aether",
  domain: "aether.studio",
  tagline: "Applied intelligence for ambitious teams.",
  description:
    "Aether is an AI engineering studio. We design, build and ship intelligent products — from research to production — with a cinematic eye and an engineer's rigor.",
  email: "studio@aether.studio",
  location: "Milan · New York · Remote",
  social: [
    { label: "X", href: "https://x.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "GitHub", href: "https://github.com" },
    { label: "Dribbble", href: "https://dribbble.com" },
  ],
};

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/* --- Trust strip --- */
export const clients: string[] = [
  "Northwind",
  "Helios",
  "Quanta",
  "Vantage",
  "Lumen",
  "Atlas",
  "Foundry",
  "Polaris",
];

/* --- Stats --- */
export const stats = [
  { value: "12×", label: "median speed-up shipping models to production" },
  { value: "$240M", label: "enterprise value influenced by our systems" },
  { value: "40+", label: "intelligent products designed & deployed" },
  { value: "99.98%", label: "inference uptime across managed deployments" },
];

/* --- Capabilities (used on Home choreography + Services) --- */
export type Capability = {
  id: string;
  index: number;
  title: string;
  summary: string;
  detail: string;
  deliverables: string[];
};

export const capabilities: Capability[] = [
  {
    id: "strategy",
    index: 1,
    title: "AI Strategy & Research",
    summary:
      "We turn ambiguous ambition into a sequenced, fundable roadmap of intelligent systems.",
    detail:
      "Opportunity mapping, model feasibility, data audits and a build sequence your board can sign off on. We de-risk the unknowns before a line of production code is written.",
    deliverables: [
      "Opportunity & ROI model",
      "Data & feasibility audit",
      "Evaluation framework",
      "Build roadmap",
    ],
  },
  {
    id: "product",
    index: 2,
    title: "Generative Product Design",
    summary:
      "Interfaces for probabilistic systems — designed so people trust the machine.",
    detail:
      "We design the moments where humans meet models: streaming, citations, undo, guardrails and the choreography that makes intelligence feel intentional rather than magical.",
    deliverables: [
      "Design language & tokens",
      "Generative UI patterns",
      "Prototype in code",
      "Motion & interaction spec",
    ],
  },
  {
    id: "engineering",
    index: 3,
    title: "Applied ML Engineering",
    summary:
      "Production pipelines: retrieval, fine-tuning, agents and evals that don't drift.",
    detail:
      "From RAG and tool-use agents to fine-tuned models and real-time inference, we build the systems that hold up under load — observable, evaluable and cost-aware.",
    deliverables: [
      "Retrieval & agent systems",
      "Fine-tuning & distillation",
      "Eval & guardrail suite",
      "Inference infrastructure",
    ],
  },
  {
    id: "platform",
    index: 4,
    title: "Platform & Scale",
    summary:
      "The infrastructure, observability and governance to run AI like an adult.",
    detail:
      "Cost controls, tracing, red-teaming, model routing and the operational scaffolding that turns a clever demo into a dependable platform your enterprise can stand on.",
    deliverables: [
      "Model routing & gateway",
      "Observability & tracing",
      "Governance & red-teaming",
      "Managed deployment",
    ],
  },
];

/* --- Process --- */
export const process = [
  {
    phase: "01",
    title: "Immersion",
    body: "Two weeks inside your problem. We map data, constraints and the shape of value before proposing anything.",
  },
  {
    phase: "02",
    title: "Prototype",
    body: "A working, evaluable prototype in code — not slides. We prove the model earns its place.",
  },
  {
    phase: "03",
    title: "Productionize",
    body: "We harden the system: evals, guardrails, observability and the infrastructure to scale it safely.",
  },
  {
    phase: "04",
    title: "Compound",
    body: "We embed with your team so the capability — and the advantage — keeps compounding after we leave.",
  },
];

/* --- Work / Portfolio --- */
export type Project = {
  slug: string;
  client: string;
  title: string;
  category: string;
  year: string;
  blurb: string;
  metric: string;
  metricLabel: string;
  accent: string; // gradient seed
};

export const projects: Project[] = [
  {
    slug: "northwind-copilot",
    client: "Northwind",
    title: "An agent that closes the books",
    category: "Agentic Systems",
    year: "2025",
    blurb:
      "A finance copilot that reconciles ledgers, drafts variance commentary and never hallucinates a number it can't cite.",
    metric: "9 days → 4 hrs",
    metricLabel: "monthly close",
    accent: "from-[#3fdcff] to-[#5b8cff]",
  },
  {
    slug: "helios-vision",
    client: "Helios",
    title: "Seeing defects before they ship",
    category: "Computer Vision",
    year: "2025",
    blurb:
      "Real-time defect detection on the line, running at the edge with sub-30ms latency and human-in-the-loop review.",
    metric: "−72%",
    metricLabel: "escaped defects",
    accent: "from-[#5b8cff] to-[#8b6cff]",
  },
  {
    slug: "quanta-search",
    client: "Quanta",
    title: "Search that actually understands",
    category: "Retrieval",
    year: "2024",
    blurb:
      "A retrieval platform over ten million documents with citations, permissions and answers your lawyers approve of.",
    metric: "3.1×",
    metricLabel: "answer accuracy",
    accent: "from-[#4fe3b0] to-[#3fdcff]",
  },
  {
    slug: "vantage-forecast",
    client: "Vantage",
    title: "Forecasting the unforecastable",
    category: "Applied ML",
    year: "2024",
    blurb:
      "A demand model blending classical signals and LLM reasoning over unstructured market chatter.",
    metric: "+18.4%",
    metricLabel: "forecast precision",
    accent: "from-[#8b6cff] to-[#5b8cff]",
  },
  {
    slug: "lumen-studio",
    client: "Lumen",
    title: "A generative brand studio",
    category: "Generative Media",
    year: "2025",
    blurb:
      "On-brand image and copy generation with guardrails, so a 12-person team ships like a 100-person one.",
    metric: "20×",
    metricLabel: "content velocity",
    accent: "from-[#3fdcff] to-[#4fe3b0]",
  },
];

/* --- Testimonials --- */
export const testimonials = [
  {
    quote:
      "Aether shipped in ten weeks what our internal team had circled for a year. The difference was rigor — they evaluated everything.",
    name: "Elena Markov",
    role: "Chief Product Officer, Northwind",
  },
  {
    quote:
      "They treat models like engineering, not magic. The system has run in production for eight months without a single silent failure.",
    name: "David Osei",
    role: "VP Engineering, Helios",
  },
  {
    quote:
      "The most senior team we've worked with. They made our AI feel inevitable instead of bolted-on.",
    name: "Priya Nair",
    role: "Founder & CEO, Quanta",
  },
];

/* --- About / Manifesto --- */
export const manifesto = [
  "Intelligence is not a feature you bolt on.",
  "It is a material — and like any material, it has a grain.",
  "We work with that grain: probabilistic, evaluable, alive.",
  "The result should feel intentional, never generic.",
];

export const values = [
  {
    title: "Rigor over hype",
    body: "We evaluate before we believe. Every system ships with a way to know it's working.",
  },
  {
    title: "Taste is a feature",
    body: "Craft compounds. The way it feels is part of whether it works.",
  },
  {
    title: "Own the outcome",
    body: "We embed, we ship, we stay accountable to the metric — not the deck.",
  },
  {
    title: "Build to compound",
    body: "We leave teams faster than we found them. The advantage outlives the engagement.",
  },
];

export const team = [
  { name: "Sofia Lindqvist", role: "Founder · ML Systems", initials: "SL" },
  { name: "Marco Devlin", role: "Design Engineering", initials: "MD" },
  { name: "Aria Chen", role: "Applied Research", initials: "AC" },
  { name: "Tobias Renn", role: "Platform & Infra", initials: "TR" },
];

/* --- Contact --- */
export const contactReasons = [
  "New engagement",
  "Partnership",
  "Press",
  "Careers",
  "Just exploring",
];

export const budgets = ["< $50k", "$50k–$150k", "$150k–$500k", "$500k+"];
