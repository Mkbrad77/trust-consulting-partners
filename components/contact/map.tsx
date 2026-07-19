export function ContactMap() {
  const query = encodeURIComponent(
    "Esos, à côté de l'Hôtel La Grâce, Yaoundé, Cameroun"
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