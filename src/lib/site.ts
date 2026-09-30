import researchAsset from "@/assets/research-focus.jpg.asset.json";
import signalAsset from "@/assets/signal-work.jpg.asset.json";
import teamAsset from "@/assets/ml-team.jpg.asset.json";

export const logoInk = "/images/ttn-logo-ink.png";
export const logoLight = "/images/ttn-logo-light.png";
export const founderPhoto = "/images/founder-dan.jpg";

export const imgResearch = researchAsset.url;
export const imgSignal = signalAsset.url;
export const imgTeam = teamAsset.url;

export const EMAIL = "dan@ttn-talent.com";
export const LINKEDIN_DAN = "https://www.linkedin.com/in/dankirkpatrick/";
export const LINKEDIN_TTN = "https://www.linkedin.com/company/ttn-talent";

export const NAV_LINKS = [
  { label: "Expertise", to: "/expertise" },
  { label: "How I Work", to: "/how-i-work" },
  { label: "About Dan", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export const TRUST = [
  { value: "2005", label: "Hiring AI talent since" },
  { value: "22+", label: "Years in specialist search" },
  { value: "3–5", label: "Live assignments at a time" },
] as const;

export const EXPERTISE = [
  {
    index: "01",
    title: ["Artificial", "Intelligence"],
    descriptor: "Applied AI · Platforms · Production",
    body: "Applied AI engineers, AI platform leadership and the people who take models from prototype into dependable production systems.",
    roles: [
      "AI Engineer",
      "Applied AI Scientist",
      "AI Platform Lead",
      "Head of AI",
      "Chief AI Officer",
    ],
    image: imgResearch,
  },
  {
    index: "02",
    title: ["Machine", "Learning"],
    descriptor: "ML Engineering · Data Science · Lifecycle",
    body: "ML engineering and data science across the full lifecycle, from senior individual contributors through to functional leadership.",
    roles: [
      "ML Engineer",
      "Data Scientist",
      "MLOps Engineer",
      "ML Lead",
      "Director of Data Science",
    ],
    image: imgTeam,
  },
  {
    index: "03",
    title: ["Frontier", "Research"],
    descriptor: "Research Science · Research Engineering",
    body: "Research scientists and research leadership working at the edge of what is currently possible, where a single hire shifts a roadmap.",
    roles: [
      "Research Scientist",
      "Research Engineer",
      "Research Manager",
      "Head of Research",
    ],
    image: imgSignal,
  },
] as const;

export const PROCESS = [
  {
    index: "01",
    title: "Scope the search",
    body: "Start with what the team is actually building — the architecture, the stage, the problem the hire has to own.",
  },
  {
    index: "02",
    title: "Work the network",
    body: "Direct, personal outreach through long-standing specialist relationships, not a job advert and a queue.",
  },
  {
    index: "03",
    title: "Human review",
    body: "Every résumé and every candidate reviewed with judgement and context. No algorithmic screening.",
  },
  {
    index: "04",
    title: "Shortlist & close",
    body: "A focused shortlist, plus hands-on support through interview, offer and close.",
  },
] as const;

export const ROLE_CHIPS = [
  "AI Engineer",
  "ML Engineer",
  "Research Scientist",
  "AI Leader",
  "ML Leader",
  "Research Leader",
  "Other",
] as const;
