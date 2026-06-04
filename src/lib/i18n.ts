/* ============================================================
   i18n — full EN/IT dictionary (UI strings + localized content).
   The English object is the source of truth for the type; the
   Italian object must match its shape.
   ============================================================ */

export type Lang = "en" | "it";
export const LANGS: Lang[] = ["en", "it"];
export const LANG_LABEL: Record<Lang, string> = { en: "EN", it: "IT" };

export type Theme = "dark" | "light";

const en = {
  brand: {
    tagline: "Applied intelligence for ambitious teams.",
    description:
      "Aether is an AI engineering studio. We design, build and ship intelligent products — from research to production — with a cinematic eye and an engineer's rigor.",
    location: "Milan · New York · Remote",
  },
  nav: {
    items: [
      { href: "/work", label: "Work" },
      { href: "/services", label: "Services" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
    cta: "Start a project",
  },
  hero: {
    badge: "AI engineering studio · Booking 2026",
    line1: "Frontier AI,",
    line2serif: "engineered",
    line2rest: "to ship.",
    sub: "designs, builds and deploys intelligent products — from research to production — with a cinematic eye and an engineer's rigor.",
    ctaPrimary: "Start a project",
    ctaSecondary: "See the work",
    scroll: "Scroll",
  },
  clients: { label: "Trusted by teams shaping their categories" },
  manifesto: {
    eyebrow: "Our thesis",
    lines: [
      "Intelligence is not a feature you bolt on.",
      "It is a material — and like any material, it has a grain.",
      "We work with that grain: probabilistic, evaluable, alive.",
      "The result should feel intentional, never generic.",
    ],
  },
  chaos: {
    eyebrow: "Scroll-scrubbed sequence",
    caption:
      "You control the motion. Scroll maps directly to the frame index — chaos resolves into order, one frame at a time.",
    live: "LIVE · 15 FPS",
    frame: "FRAME",
    entropy: "[ entropy ]",
    resolved: "[ resolved ]",
    headingA: "From chaos,",
    headingB: "structure.",
    note: "Every system we ship makes the same move: noise in, intentional order out.",
  },
  capabilities: {
    eyebrow: "What we do",
    titleA: "Four disciplines,",
    titleB: "one system.",
    core: "core",
    items: [
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
    ],
  },
  work: {
    eyebrow: "Selected work",
    heading: "Proof, not promises.",
    note: "Systems in production today — scroll sideways to move through them.",
    viewAll: "View all work",
    headerEyebrow: "Selected work",
    headerTitle: "Systems in production, not slideware.",
    headerDesc:
      "A sample of what we've shipped. Every engagement leaves a measurable mark — and a team better equipped to keep going.",
    meta: ["40+ products shipped", "6 industries", "2019 — present"],
    items: [
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
    ],
  },
  particle: {
    eyebrow: "Live WebGL · interactive depth",
    headingA: "Depth you can",
    headingB: "touch.",
    copy: "Thousands of points, rendered in real time. Move your cursor — the field parts around it. This is the same fidelity we bring to every interface.",
    hint: "↖ move your cursor",
  },
  process: {
    eyebrow: "How we work",
    titleA: "A method,",
    titleB: "not a gamble.",
    intro:
      "Four phases that turn a clever idea into a dependable system — and leave your team faster than we found it.",
    steps: [
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
    ],
  },
  testimonials: {
    eyebrow: "Word of mouth",
    headingA: "The teams we build with",
    headingB: "keep us close.",
    items: [
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
    ],
  },
  stats: [
    { value: "12×", label: "median speed-up shipping models to production" },
    { value: "$240M", label: "enterprise value influenced by our systems" },
    { value: "40+", label: "intelligent products designed & deployed" },
    { value: "99.98%", label: "inference uptime across managed deployments" },
  ],
  footer: {
    eyebrow: "Let's build",
    headingA: "Have a problem worth",
    headingB: "solving well?",
    cta: "Start a project",
    sitemap: "Sitemap",
    social: "Social",
    contact: "Contact",
    rights: "Applied intelligence studio.",
  },
  services: {
    headerEyebrow: "Services",
    headerTitle: "From frontier research to dependable production.",
    headerDesc:
      "Four disciplines, run by senior people who do the work. Engage us for one, or all of them as a single system.",
  },
  about: {
    headerEyebrow: "About",
    headerTitle: "A senior studio for the intelligence era.",
    headerDesc:
      "No layers, no hand-offs to juniors. The people who scope your problem are the people who ship the system.",
    principlesEyebrow: "Principles",
    principlesTitle: "What we hold to.",
    peopleEyebrow: "The people",
    peopleTitle: "Small, senior, accountable.",
    values: [
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
    ],
    team: [
      { name: "Sofia Lindqvist", role: "Founder · ML Systems", initials: "SL" },
      { name: "Marco Devlin", role: "Design Engineering", initials: "MD" },
      { name: "Aria Chen", role: "Applied Research", initials: "AC" },
      { name: "Tobias Renn", role: "Platform & Infra", initials: "TR" },
    ],
  },
  contact: {
    headerEyebrow: "Contact",
    headerTitle: "Let's build something intelligent.",
    headerDesc:
      "Tell us about the problem. The more specific, the better — we reply to every serious note.",
    email: "Email",
    studios: "Studios",
    nextLabel: "What happens next",
    next: [
      "We read your note and reply within two working days.",
      "A 30-minute call to pressure-test the problem together.",
      "A short, fixed-scope proposal — no fluff, no retainer trap.",
    ],
    form: {
      name: "Name",
      email: "Email",
      company: "Company",
      reason: "Reason",
      budget: "Budget",
      project: "Project",
      namePh: "Ada Lovelace",
      emailPh: "you@company.com",
      companyPh: "Where you work",
      projectPh: "What are you trying to build?",
      send: "Send message",
      sending: "Sending…",
      avgReply: "Avg. reply · 48h",
      successTitle: "Message received.",
      successBody:
        "we read every note and reply within two working days.",
      successHi: "Thanks",
      sendAnother: "Send another →",
      errRequired: "required",
      errInvalid: "invalid",
      errDetail: "add detail",
    },
    reasons: [
      "New engagement",
      "Partnership",
      "Press",
      "Careers",
      "Just exploring",
    ],
    budgets: ["< $50k", "$50k–$150k", "$150k–$500k", "$500k+"],
  },
  ui: {
    themeToLight: "Switch to light",
    themeToDark: "Switch to dark",
    language: "Language",
  },
};

const it: typeof en = {
  brand: {
    tagline: "Intelligenza applicata per team ambiziosi.",
    description:
      "Aether è uno studio di ingegneria AI. Progettiamo, costruiamo e portiamo in produzione prodotti intelligenti — dalla ricerca al rilascio — con occhio cinematografico e rigore ingegneristico.",
    location: "Milano · New York · Da remoto",
  },
  nav: {
    items: [
      { href: "/work", label: "Lavori" },
      { href: "/services", label: "Servizi" },
      { href: "/about", label: "Studio" },
      { href: "/contact", label: "Contatti" },
    ],
    cta: "Inizia un progetto",
  },
  hero: {
    badge: "Studio di ingegneria AI · Disponibili dal 2026",
    line1: "AI di frontiera,",
    line2serif: "ingegnerizzata",
    line2rest: "per il rilascio.",
    sub: "progetta, costruisce e rilascia prodotti intelligenti — dalla ricerca alla produzione — con occhio cinematografico e rigore ingegneristico.",
    ctaPrimary: "Inizia un progetto",
    ctaSecondary: "Guarda i lavori",
    scroll: "Scorri",
  },
  clients: { label: "Scelti da team che ridefiniscono il loro settore" },
  manifesto: {
    eyebrow: "La nostra tesi",
    lines: [
      "L'intelligenza non è una funzione da aggiungere.",
      "È un materiale — e come ogni materiale, ha una sua venatura.",
      "Lavoriamo con quella venatura: probabilistica, valutabile, viva.",
      "Il risultato deve sembrare intenzionale, mai generico.",
    ],
  },
  chaos: {
    eyebrow: "Sequenza guidata dallo scroll",
    caption:
      "Il movimento lo controlli tu. Lo scroll è mappato direttamente sull'indice del frame — il caos si risolve in ordine, un frame alla volta.",
    live: "LIVE · 15 FPS",
    frame: "FRAME",
    entropy: "[ entropia ]",
    resolved: "[ risolto ]",
    headingA: "Dal caos,",
    headingB: "struttura.",
    note: "Ogni sistema che rilasciamo fa lo stesso movimento: rumore in ingresso, ordine intenzionale in uscita.",
  },
  capabilities: {
    eyebrow: "Cosa facciamo",
    titleA: "Quattro discipline,",
    titleB: "un solo sistema.",
    core: "core",
    items: [
      {
        id: "strategy",
        index: 1,
        title: "Strategia & Ricerca AI",
        summary:
          "Trasformiamo l'ambizione ancora vaga in una roadmap sequenziata e finanziabile di sistemi intelligenti.",
        detail:
          "Mappatura delle opportunità, fattibilità dei modelli, audit dei dati e una sequenza di sviluppo che il tuo board può approvare. Riduciamo i rischi prima di scrivere una riga di codice di produzione.",
        deliverables: [
          "Modello opportunità & ROI",
          "Audit dati & fattibilità",
          "Framework di valutazione",
          "Roadmap di sviluppo",
        ],
      },
      {
        id: "product",
        index: 2,
        title: "Design di Prodotto Generativo",
        summary:
          "Interfacce per sistemi probabilistici — progettate perché le persone si fidino della macchina.",
        detail:
          "Progettiamo i momenti in cui le persone incontrano i modelli: streaming, citazioni, undo, guardrail e la coreografia che fa sentire l'intelligenza intenzionale, non magica.",
        deliverables: [
          "Design language & token",
          "Pattern di UI generativa",
          "Prototipo in codice",
          "Specifica di motion & interazione",
        ],
      },
      {
        id: "engineering",
        index: 3,
        title: "Ingegneria ML Applicata",
        summary:
          "Pipeline di produzione: retrieval, fine-tuning, agent ed eval che non vanno alla deriva.",
        detail:
          "Da RAG e agent con tool-use fino a modelli fine-tuned e inferenza in tempo reale, costruiamo sistemi che reggono sotto carico — osservabili, valutabili e attenti ai costi.",
        deliverables: [
          "Sistemi di retrieval & agent",
          "Fine-tuning & distillazione",
          "Suite di eval & guardrail",
          "Infrastruttura di inferenza",
        ],
      },
      {
        id: "platform",
        index: 4,
        title: "Piattaforma & Scala",
        summary:
          "L'infrastruttura, l'osservabilità e la governance per gestire l'AI con serietà.",
        detail:
          "Controllo dei costi, tracing, red-teaming, routing dei modelli e l'impalcatura operativa che trasforma una demo brillante in una piattaforma affidabile su cui la tua azienda può poggiare.",
        deliverables: [
          "Routing modelli & gateway",
          "Osservabilità & tracing",
          "Governance & red-teaming",
          "Deployment gestito",
        ],
      },
    ],
  },
  work: {
    eyebrow: "Lavori selezionati",
    heading: "Prove, non promesse.",
    note: "Sistemi oggi in produzione — scorri lateralmente per attraversarli.",
    viewAll: "Tutti i lavori",
    headerEyebrow: "Lavori selezionati",
    headerTitle: "Sistemi in produzione, non slide.",
    headerDesc:
      "Un campione di ciò che abbiamo rilasciato. Ogni progetto lascia un segno misurabile — e un team più attrezzato per andare avanti.",
    meta: ["40+ prodotti rilasciati", "6 settori", "2019 — oggi"],
    items: [
      {
        slug: "northwind-copilot",
        client: "Northwind",
        title: "Un agent che chiude il bilancio",
        category: "Sistemi Agentici",
        year: "2025",
        blurb:
          "Un copilot finanziario che riconcilia i mastrini, redige i commenti agli scostamenti e non inventa mai un numero che non può citare.",
        metric: "9 giorni → 4 ore",
        metricLabel: "chiusura mensile",
        accent: "from-[#3fdcff] to-[#5b8cff]",
      },
      {
        slug: "helios-vision",
        client: "Helios",
        title: "Vedere i difetti prima del rilascio",
        category: "Computer Vision",
        year: "2025",
        blurb:
          "Rilevamento difetti in tempo reale sulla linea, eseguito all'edge con latenza sotto i 30ms e revisione human-in-the-loop.",
        metric: "−72%",
        metricLabel: "difetti sfuggiti",
        accent: "from-[#5b8cff] to-[#8b6cff]",
      },
      {
        slug: "quanta-search",
        client: "Quanta",
        title: "Una ricerca che capisce davvero",
        category: "Retrieval",
        year: "2024",
        blurb:
          "Una piattaforma di retrieval su dieci milioni di documenti con citazioni, permessi e risposte che i tuoi legali approvano.",
        metric: "3,1×",
        metricLabel: "accuratezza risposte",
        accent: "from-[#4fe3b0] to-[#3fdcff]",
      },
      {
        slug: "vantage-forecast",
        client: "Vantage",
        title: "Prevedere l'imprevedibile",
        category: "ML Applicato",
        year: "2024",
        blurb:
          "Un modello di domanda che fonde segnali classici e ragionamento LLM sul chiacchiericcio di mercato non strutturato.",
        metric: "+18,4%",
        metricLabel: "precisione previsioni",
        accent: "from-[#8b6cff] to-[#5b8cff]",
      },
      {
        slug: "lumen-studio",
        client: "Lumen",
        title: "Uno studio creativo generativo",
        category: "Media Generativi",
        year: "2025",
        blurb:
          "Generazione di immagini e testi on-brand con guardrail: così un team di 12 persone produce come uno da 100.",
        metric: "20×",
        metricLabel: "velocità dei contenuti",
        accent: "from-[#3fdcff] to-[#4fe3b0]",
      },
    ],
  },
  particle: {
    eyebrow: "WebGL live · profondità interattiva",
    headingA: "Profondità che puoi",
    headingB: "toccare.",
    copy: "Migliaia di punti, renderizzati in tempo reale. Muovi il cursore — il campo si apre intorno ad esso. È la stessa cura che mettiamo in ogni interfaccia.",
    hint: "↖ muovi il cursore",
  },
  process: {
    eyebrow: "Come lavoriamo",
    titleA: "Un metodo,",
    titleB: "non una scommessa.",
    intro:
      "Quattro fasi che trasformano un'idea brillante in un sistema affidabile — e lasciano il tuo team più veloce di come l'abbiamo trovato.",
    steps: [
      {
        phase: "01",
        title: "Immersione",
        body: "Due settimane dentro il tuo problema. Mappiamo dati, vincoli e la forma del valore prima di proporre qualsiasi cosa.",
      },
      {
        phase: "02",
        title: "Prototipo",
        body: "Un prototipo funzionante e valutabile in codice — non slide. Dimostriamo che il modello si merita il suo posto.",
      },
      {
        phase: "03",
        title: "Produzione",
        body: "Irrobustiamo il sistema: eval, guardrail, osservabilità e l'infrastruttura per scalarlo in sicurezza.",
      },
      {
        phase: "04",
        title: "Compounding",
        body: "Ci integriamo nel tuo team perché la capacità — e il vantaggio — continuino a crescere anche dopo di noi.",
      },
    ],
  },
  testimonials: {
    eyebrow: "Passaparola",
    headingA: "I team con cui costruiamo",
    headingB: "ci tengono vicini.",
    items: [
      {
        quote:
          "Aether ha rilasciato in dieci settimane ciò che il nostro team interno rincorreva da un anno. La differenza è stata il rigore — hanno valutato tutto.",
        name: "Elena Markov",
        role: "Chief Product Officer, Northwind",
      },
      {
        quote:
          "Trattano i modelli come ingegneria, non come magia. Il sistema è in produzione da otto mesi senza un solo guasto silenzioso.",
        name: "David Osei",
        role: "VP Engineering, Helios",
      },
      {
        quote:
          "Il team più senior con cui abbiamo lavorato. Hanno reso la nostra AI inevitabile, non un'aggiunta posticcia.",
        name: "Priya Nair",
        role: "Founder & CEO, Quanta",
      },
    ],
  },
  stats: [
    { value: "12×", label: "accelerazione mediana nel portare i modelli in produzione" },
    { value: "$240M", label: "valore aziendale influenzato dai nostri sistemi" },
    { value: "40+", label: "prodotti intelligenti progettati e rilasciati" },
    { value: "99,98%", label: "uptime di inferenza sui deployment gestiti" },
  ],
  footer: {
    eyebrow: "Costruiamo",
    headingA: "Hai un problema che vale",
    headingB: "la pena risolvere bene?",
    cta: "Inizia un progetto",
    sitemap: "Mappa del sito",
    social: "Social",
    contact: "Contatti",
    rights: "Studio di intelligenza applicata.",
  },
  services: {
    headerEyebrow: "Servizi",
    headerTitle: "Dalla ricerca di frontiera alla produzione affidabile.",
    headerDesc:
      "Quattro discipline, gestite da persone senior che fanno il lavoro. Ingaggiaci per una, o per tutte come un unico sistema.",
  },
  about: {
    headerEyebrow: "Studio",
    headerTitle: "Uno studio senior per l'era dell'intelligenza.",
    headerDesc:
      "Nessun livello intermedio, nessun passaggio ai junior. Chi inquadra il tuo problema è chi rilascia il sistema.",
    principlesEyebrow: "Principi",
    principlesTitle: "Ciò a cui teniamo.",
    peopleEyebrow: "Le persone",
    peopleTitle: "Pochi, senior, responsabili.",
    values: [
      {
        title: "Rigore prima dell'hype",
        body: "Valutiamo prima di credere. Ogni sistema esce con un modo per sapere se funziona.",
      },
      {
        title: "Il gusto è una feature",
        body: "L'artigianalità si accumula. Come ci si sente fa parte di se funziona.",
      },
      {
        title: "Possedere il risultato",
        body: "Ci integriamo, rilasciamo, restiamo responsabili della metrica — non della presentazione.",
      },
      {
        title: "Costruire per accumulare",
        body: "Lasciamo i team più veloci di come li abbiamo trovati. Il vantaggio sopravvive all'incarico.",
      },
    ],
    team: [
      { name: "Sofia Lindqvist", role: "Founder · Sistemi ML", initials: "SL" },
      { name: "Marco Devlin", role: "Design Engineering", initials: "MD" },
      { name: "Aria Chen", role: "Ricerca Applicata", initials: "AC" },
      { name: "Tobias Renn", role: "Piattaforma & Infra", initials: "TR" },
    ],
  },
  contact: {
    headerEyebrow: "Contatti",
    headerTitle: "Costruiamo qualcosa di intelligente.",
    headerDesc:
      "Raccontaci il problema. Più sei specifico, meglio è — rispondiamo a ogni messaggio serio.",
    email: "Email",
    studios: "Sedi",
    nextLabel: "Cosa succede dopo",
    next: [
      "Leggiamo il tuo messaggio e rispondiamo entro due giorni lavorativi.",
      "Una call di 30 minuti per mettere alla prova il problema insieme.",
      "Una proposta breve e a perimetro fisso — niente fronzoli, niente trappole da retainer.",
    ],
    form: {
      name: "Nome",
      email: "Email",
      company: "Azienda",
      reason: "Motivo",
      budget: "Budget",
      project: "Progetto",
      namePh: "Ada Lovelace",
      emailPh: "tu@azienda.com",
      companyPh: "Dove lavori",
      projectPh: "Cosa stai cercando di costruire?",
      send: "Invia messaggio",
      sending: "Invio…",
      avgReply: "Risposta media · 48h",
      successTitle: "Messaggio ricevuto.",
      successBody:
        "leggiamo ogni messaggio e rispondiamo entro due giorni lavorativi.",
      successHi: "Grazie",
      sendAnother: "Invia un altro →",
      errRequired: "obbligatorio",
      errInvalid: "non valida",
      errDetail: "aggiungi dettagli",
    },
    reasons: [
      "Nuovo incarico",
      "Partnership",
      "Stampa",
      "Lavora con noi",
      "Sto solo esplorando",
    ],
    budgets: ["< 50k €", "50k–150k €", "150k–500k €", "500k+ €"],
  },
  ui: {
    themeToLight: "Passa al chiaro",
    themeToDark: "Passa allo scuro",
    language: "Lingua",
  },
};

export type Dict = typeof en;
export const dictionaries: Record<Lang, Dict> = { en, it };

export function isLang(value: string | undefined): value is Lang {
  return value === "en" || value === "it";
}

export function isTheme(value: string | undefined): value is Theme {
  return value === "dark" || value === "light";
}
