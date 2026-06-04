import type { Lang } from "@/lib/i18n";

/* Long-form case-study content, keyed by project slug + language.
   Kept separate from the marketing dictionary to keep both readable. */

export type CaseStudy = {
  challenge: string;
  approach: string;
  outcome: string;
  stack: string[];
};

export type CaseLabels = {
  back: string;
  overview: string;
  challenge: string;
  approach: string;
  outcome: string;
  stack: string;
  next: string;
  category: string;
  year: string;
  impact: string;
};

export const caseLabels: Record<Lang, CaseLabels> = {
  en: {
    back: "All work",
    overview: "Overview",
    challenge: "The challenge",
    approach: "Our approach",
    outcome: "The outcome",
    stack: "Stack",
    next: "Next project",
    category: "Category",
    year: "Year",
    impact: "Impact",
  },
  it: {
    back: "Tutti i lavori",
    overview: "Panoramica",
    challenge: "La sfida",
    approach: "Il nostro approccio",
    outcome: "Il risultato",
    stack: "Stack",
    next: "Prossimo progetto",
    category: "Categoria",
    year: "Anno",
    impact: "Impatto",
  },
};

export const caseStudies: Record<Lang, Record<string, CaseStudy>> = {
  en: {
    "northwind-copilot": {
      challenge:
        "Northwind's month-end close took nine days of manual reconciliation across a dozen ledgers, with variance commentary written by hand under deadline pressure — and no quick way to trace a number back to its source.",
      approach:
        "We built an agentic finance copilot that reconciles ledgers against source systems, flags anomalies with citations, and drafts variance commentary a controller can edit. Every figure is traceable; the agent refuses to state a number it can't cite.",
      outcome:
        "The close dropped from nine days to four hours, with a complete audit trail. The finance team now reviews exceptions instead of chasing them.",
      stack: ["Tool-use agents", "RAG", "Postgres", "Evals", "Human-in-the-loop"],
    },
    "helios-vision": {
      challenge:
        "Defects were slipping past manual inspection on a high-speed line, reaching customers and triggering costly recalls. Adding inspectors didn't scale.",
      approach:
        "We trained an edge vision model running under 30ms per frame, with a human-in-the-loop queue for low-confidence cases and continuous retraining from each correction.",
      outcome:
        "Escaped defects fell 72%. Inspectors shifted from staring at every unit to adjudicating only the hard calls.",
      stack: ["Computer vision", "Edge inference", "ONNX", "Active learning"],
    },
    "quanta-search": {
      challenge:
        "Ten million documents, strict per-user permissions, and a legal team that wouldn't accept an answer without a verifiable source.",
      approach:
        "We built a permission-aware retrieval platform with hybrid search, re-ranking and inline citations, gated by an eval harness that blocks any release that regresses on answer accuracy.",
      outcome:
        "Answer accuracy improved 3.1×, and every response is traceable to its source — signed off by legal.",
      stack: ["Hybrid retrieval", "Re-ranking", "Citations", "RBAC", "Evals"],
    },
    "vantage-forecast": {
      challenge:
        "Classical demand models kept missing turning points driven by unstructured market signals that no spreadsheet could capture.",
      approach:
        "We blended classical time-series with LLM reasoning over market chatter, news and filings, fused into a single calibrated forecast with confidence intervals planners could trust.",
      outcome:
        "Forecast precision rose 18.4%, giving planners earlier, more confident calls on inventory and pricing.",
      stack: ["Time-series", "LLM reasoning", "Feature fusion", "Calibration"],
    },
    "lumen-studio": {
      challenge:
        "A 12-person brand team couldn't keep up with content demand without diluting the brand or burning out.",
      approach:
        "We built a generative studio for on-brand image and copy, with guardrails, brand-token conditioning and a review flow that keeps a human firmly in control of what ships.",
      outcome:
        "Content velocity went up 20× while staying on-brand — the team now ships like one ten times its size.",
      stack: ["Diffusion", "LLM copy", "Guardrails", "Brand tokens"],
    },
  },
  it: {
    "northwind-copilot": {
      challenge:
        "La chiusura di fine mese di Northwind richiedeva nove giorni di riconciliazione manuale su una dozzina di mastrini, con i commenti agli scostamenti scritti a mano sotto pressione — e nessun modo rapido di risalire dal numero alla sua fonte.",
      approach:
        "Abbiamo costruito un copilot finanziario agentico che riconcilia i mastrini con i sistemi sorgente, segnala le anomalie con citazioni e redige i commenti agli scostamenti che un controller può modificare. Ogni cifra è tracciabile; l'agent si rifiuta di indicare un numero che non può citare.",
      outcome:
        "La chiusura è passata da nove giorni a quattro ore, con un audit trail completo. Il team finance ora revisiona le eccezioni invece di rincorrerle.",
      stack: ["Agent con tool-use", "RAG", "Postgres", "Eval", "Human-in-the-loop"],
    },
    "helios-vision": {
      challenge:
        "I difetti sfuggivano all'ispezione manuale su una linea ad alta velocità, arrivando ai clienti e causando richiami costosi. Aggiungere ispettori non era scalabile.",
      approach:
        "Abbiamo addestrato un modello di visione all'edge che gira in meno di 30ms per frame, con una coda human-in-the-loop per i casi a bassa confidenza e retraining continuo a partire da ogni correzione.",
      outcome:
        "I difetti sfuggiti sono calati del 72%. Gli ispettori sono passati dal guardare ogni pezzo al decidere solo i casi difficili.",
      stack: ["Computer vision", "Inferenza edge", "ONNX", "Active learning"],
    },
    "quanta-search": {
      challenge:
        "Dieci milioni di documenti, permessi rigorosi per utente e un team legale che non accettava una risposta senza una fonte verificabile.",
      approach:
        "Abbiamo costruito una piattaforma di retrieval consapevole dei permessi con ricerca ibrida, re-ranking e citazioni inline, presidiata da una suite di eval che blocca ogni rilascio che peggiora l'accuratezza delle risposte.",
      outcome:
        "L'accuratezza delle risposte è migliorata di 3,1× e ogni risposta è tracciabile alla sua fonte — approvata dal legale.",
      stack: ["Retrieval ibrido", "Re-ranking", "Citazioni", "RBAC", "Eval"],
    },
    "vantage-forecast": {
      challenge:
        "I modelli di domanda classici continuavano a mancare i punti di svolta guidati da segnali di mercato non strutturati che nessun foglio di calcolo poteva catturare.",
      approach:
        "Abbiamo fuso le serie storiche classiche con il ragionamento LLM su chiacchiericcio di mercato, notizie e bilanci, in un'unica previsione calibrata con intervalli di confidenza affidabili per i pianificatori.",
      outcome:
        "La precisione delle previsioni è salita del 18,4%, dando ai pianificatori decisioni più tempestive e sicure su scorte e prezzi.",
      stack: ["Serie storiche", "Ragionamento LLM", "Feature fusion", "Calibrazione"],
    },
    "lumen-studio": {
      challenge:
        "Un team di brand di 12 persone non riusciva a stare al passo con la domanda di contenuti senza diluire il brand o esaurirsi.",
      approach:
        "Abbiamo costruito uno studio generativo per immagini e testi on-brand, con guardrail, condizionamento sui brand-token e un flusso di revisione che tiene saldamente una persona al controllo di ciò che esce.",
      outcome:
        "La velocità dei contenuti è aumentata di 20× restando on-brand — il team ora produce come uno dieci volte più grande.",
      stack: ["Diffusion", "Copy LLM", "Guardrail", "Brand token"],
    },
  },
};
