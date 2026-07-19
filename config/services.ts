export type ServiceTier = {
  name: string;
  detail: string;
  price: string;
};

export type ServiceHighlight = {
  title: string;
  description: string;
  note: string;
};

export type ServiceData = {
  slug: string;
  title: string;
  navLabel: string;
  summary: string;
  offerings: string[];
  fee: string;
  target?: string;
  tiers?: ServiceTier[];
  highlight?: ServiceHighlight;
};

export const services: ServiceData[] = [
  {
    slug: "daf-externalisee",
    title: "Direction Administrative et Financière Externalisée (DAF-X™)",
    navLabel: "DAF-X™",
    summary:
      "Lorsque la direction consacre un temps croissant à la finance — trésorerie, reporting, budgets, contrôles fiscaux — au détriment du cœur de métier, ou que la visibilité sur la trésorerie, les marges et le runway devient insuffisante, l'intervention d'un DAF externalisé change la donne : il clarifie, structure, projette et sécurise.",
    offerings: [
      "Pilotage de la trésorerie et des marges",
      "Reporting financier mensuel et tableaux de bord",
      "Structuration des budgets et prévisions",
      "Sécurisation des relations bancaires et fiscales",
    ],
    fee: "Dès 500 000 FCFA HT/mois",
    target: "PME réalisant 300M à 5Mds FCFA de chiffre d'affaires, filiales, groupes en croissance",
    tiers: [
      {
        name: "DAF Temps Partagé",
        detail: "2 à 4 jours/mois, pilotage continu",
        price: "Dès 500 000 FCFA/mois",
      },
      {
        name: "DAF de Mission",
        detail: "Intervention ciblée, livrable précis",
        price: "Dès 1 500 000 FCFA",
      },
      {
        name: "DAF de Transition",
        detail: "Intérim DAF complet, 1 à 12 mois",
        price: "Dès 1 200 000 FCFA/mois",
      },
    ],
  },
  {
    slug: "audit-controle-interne",
    title: "Audit & Contrôle Interne",
    navLabel: "Audit & Contrôle Interne",
    summary:
      "Évaluation des risques, amélioration des processus, conformité réglementaire et assurance indépendante sur la fiabilité de vos processus internes.",
    offerings: [
      "Audit comptable & financier : régularité, sincérité des comptes, conformité SYSCOHADA",
      "Audit interne & contrôle interne : cartographie des risques, plan d'action priorisé",
      "Due diligence financière : fusions-acquisitions, investissement, financement",
      "Audit de trésorerie & de conformité réglementaire (COBAC, CIMA, DGI, CNPS, OHADA)",
    ],
    fee: "Sur devis, selon le périmètre de la mission",
    highlight: {
      title: "Focus : audit et recouvrement des trop-perçus bancaires",
      description:
        "Les établissements de crédit appliquent des mécanismes de calcul complexes pour les intérêts débiteurs, commissions et frais divers. Erreurs de jours de valeur, double facturation, frais non contractuels : ces anomalies représentent généralement entre 0,5 % et 3 % du volume des flux bancaires annuels.",
      note: "Honoraires de succès : 10 % HT sur les montants effectivement recouvrés. Aucun frais fixe initial, aucun honoraire si aucune extourne n'est obtenue.",
    },
  },
  {
    slug: "conseil-fiscal",
    title: "Conseil Fiscal & Optimisation",
    navLabel: "Conseil Fiscal",
    summary:
      "Un accompagnement fiscal complet, de la conformité courante à l'optimisation structurelle de groupe.",
    offerings: [
      "Fiscalité courante : déclarations IS, TVA, IRCM, TSR, patente, droits d'enregistrement",
      "Optimisation fiscale et restructuration fiscale de groupe",
      "Contentieux fiscal : assistance lors des contrôles DGI, mémoires en défense",
      "Prix de transfert et fiscalité internationale",
    ],
    fee: "Sur devis, selon le périmètre de la mission",
  },
  {
    slug: "financement-bancaire",
    title: "Financement Bancaire",
    navLabel: "Financement Bancaire",
    summary:
      "De l'évaluation de votre capacité d'endettement jusqu'à la négociation, nous sécurisons l'accès à vos financements.",
    offerings: [
      "Diagnostic de la capacité d'endettement et de la bancabilité",
      "Business plan, montage du dossier de crédit, sélection des banques partenaires",
      "Financements alternatifs : capital-investissement, SFI, AFD, BDEAC, FMO",
    ],
    fee: "Pourcentage du financement obtenu",
  },
  {
    slug: "restructuration-financiere",
    title: "Restructuration Financière & Redressement",
    navLabel: "Restructuration",
    summary:
      "Face à une situation de tension financière, nous intervenons rapidement pour stabiliser, restructurer et redresser.",
    offerings: [
      "Diagnostic de liquidité et plan de trésorerie d'urgence",
      "Restructuration de la dette et réorganisation de groupe",
      "Procédures OHADA de prévention des difficultés",
    ],
    fee: "Sur devis, selon le périmètre de la mission",
  },
  {
    slug: "conception-suivi-business-plans",
    title: "Accompagnement dans la Conception et le Suivi de l'Implémentation des Business Plans",
    navLabel: "Business Plans",
    summary:
      "Nous accompagnons les porteurs de projets dans la conception de business plans solides et bancables, ainsi que dans le suivi rigoureux de leur mise en œuvre opérationnelle jusqu'à l'atteinte des objectifs fixés.",
    offerings: [
      "Conception et structuration du business plan (hypothèses, prévisionnel financier, plan de financement)",
      "Accompagnement dans la présentation du projet aux partenaires financiers",
      "Suivi périodique de l'implémentation et des indicateurs de performance",
      "Ajustements et recommandations en cours d'exécution du projet",
    ],
    fee: "Sur devis, selon le périmètre de la mission",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}