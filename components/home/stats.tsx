import { Container } from "@/components/layout/container";

const stats = [
  { value: "18+", label: "ans d'expérience en finance de groupe" },
  { value: "4", label: "pays d'intervention en zone CEMAC / UEMOA" },
  { value: "5", label: "pôles d'expertise dédiés à votre performance" },
  { value: "24h", label: "délai de réponse ouvré, mobilisation en urgence" },
];

export function Stats() {
  return (
    <section className="border-y border-border bg-background py-14">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl font-semibold text-primary md:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}