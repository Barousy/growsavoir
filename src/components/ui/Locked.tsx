export default function Locked({ cta = 'Passer en Premium' }: { cta?: string }) {
  return (
    <div className="rounded-xl border p-4 bg-gradient-to-b from-neutral-50 to-white text-neutral-800">
      <p className="font-semibold">Contenu réservé aux membres Premium</p>
      <p className="text-sm opacity-80">Débloquez les parcours avancés, Sarf, Nahw, quiz étendus…</p>
      <a href="/upgrade" className="inline-block mt-3 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
        {cta}
      </a>
    </div>
  );
}
