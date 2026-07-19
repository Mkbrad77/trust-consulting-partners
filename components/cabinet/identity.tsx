import { Section } from "@/components/ui/section";
import { Container } from "@/components/layout/container";

const identity = [
  { label: "Raison sociale", value: "TRUST CONSULTING PARTNERS SARL" },
  { label: "Forme juridique / Capital", value: "SARL au capital de 1 000 000 FCFA" },
  { label: "Siège social", value: "Yaoundé, Cameroun" },
  {
    label: "Zone d'intervention",
    value: "Cameroun, Gabon, Congo-Brazzaville, Côte d'Ivoire, avec une présence grandissante à travers l'Afrique",
  },
  {
    label: "Secteurs couverts",
    value: "Industrie, Commerce, BTP, Logistique, Assurance, Services, Agro-industrie, Immobilier",
  },
];

export function CabinetIdentity() {
  return (
    <Section className="bg-[#F7F9FC]">
      <Container className="max-w-3xl">
        <h2 className="text-2xl font-semibold text-primary">
          Identité du cabinet
        </h2>
        <dl className="mt-8 divide-y divide-border rounded-2xl border border-border bg-background">
          {identity.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-1 gap-1 px-6 py-5 sm:grid-cols-3 sm:gap-4"
            >
              <dt className="text-sm font-medium text-muted">{row.label}</dt>
              <dd className="text-sm font-medium text-foreground sm:col-span-2">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  );
}