export function ContactMap() {
  const query = encodeURIComponent(
  "Essos, Délégation Départementale du Travail et de la Sécurité Sociale du Centre, Yaoundé, Cameroun"
  );

  return (
    <div className="overflow-hidden rounded-2xl border border-border">
      <iframe
        title="Localisation du siège social — Yaoundé"
        src={`https://www.google.com/maps?q=${query}&output=embed`}
        width="100%"
        height="320"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}