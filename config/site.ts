export const siteConfig = {
  name: "Trust Consulting Partners",
  legalName: "TRUST CONSULTING PARTNERS SARL",
  slogan: "Votre performance financière, notre engagement.",
  domain: "https://trust-consulting-partners.com",
  description:
    "Cabinet de conseil financier, fiscal et stratégique au service des entreprises de la zone CEMAC/UEMOA.",
  contact: {
    emailGeneral: "info@trust-consulting-partners.com",
    phones: [
      { country: "Cameroun", number: "+237 677 59 25 82", href: "tel:+237677592582" },
      { country: "Cameroun", number: "+237 677 03 57 06", href: "tel:+237677035706" },
      { country: "Côte d'Ivoire", number: "+225 07 13 27 40 05", href: "tel:+2250713274005" },
    ],
    whatsappHref: "https://wa.me/237677592582",
  },
  offices: [
  { city: "Yaoundé", label: "Siège social", address: "Essos, à côté de l'immeuble de la Délégation Départementale du Travail et de la Sécurité Sociale du Centre" },
  { city: "Douala", label: "Siège N°2", address: "Bépanda, face CAMTEL" },
  { city: "Abidjan", label: "Siège N°3", address: "Angré, face restaurant La Shish" },
  ],
  mainNav: [
    { label: "Notre Cabinet", href: "/notre-cabinet", children: undefined },
    {
      label: "Nos Services",
      href: "/services",
      children: [
        {
          label: "Direction Financière Externalisée (DAF-X™)",
          href: "/services/daf-externalisee",
          description: "Pilotage financier, reporting, trésorerie",
        },
        {
          label: "Audit & Contrôle Interne",
          href: "/services/audit-controle-interne",
          description: "Audit comptable, due diligence, conformité",
        },
        {
          label: "Conseil Fiscal & Optimisation",
          href: "/services/conseil-fiscal",
          description: "Déclarations, contentieux DGI, prix de transfert",
        },
        {
          label: "Financement Bancaire",
          href: "/services/financement-bancaire",
          description: "Business plan, dossier de crédit, négociation",
        },
        {
          label: "Restructuration & Redressement",
          href: "/services/restructuration-financiere",
          description: "Diagnostic de liquidité, restructuration de dette",
        },
        {
          label: "Accompagnement Business Plans",
          href: "/services/conception-suivi-business-plans",
          description: "Conception et suivi de l'implémentation de vos business plans",
        },
      ],
    },
    {
      label: "Ressources",
      href: "/actualites",
      children: [
        { label: "Actualités", href: "/actualites", description: "Nos publications et analyses" },
        { label: "FAQ", href: "/faq", description: "Questions fréquentes" },
      ],
    },
    { label: "Contact", href: "/contact", children: undefined },
  ],
  // À compléter dès que tu me donnes les liens réels (LinkedIn en priorité pour un cabinet B2B)
  socials: [] as { label: string; href: string }[],
} as const;