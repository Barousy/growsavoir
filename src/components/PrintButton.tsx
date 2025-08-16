'use client';

export default function PrintButton({
  variant = 'solid',
}: { variant?: 'solid' | 'primary' }) {
  const base = 'rounded-xl px-4 py-2 text-sm transition-colors';
  const styles =
    variant === 'primary'
      ? 'bg-sky-600 text-white hover:bg-sky-700'
      : 'bg-slate-200 text-slate-900 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700';

  return (
    <button onClick={() => window.print()} className={`${base} ${styles}`}>
      Imprimer / PDF
    </button>
  );
}
