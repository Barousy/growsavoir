// src/app/debug/page.tsx
export const dynamic = 'force-static';

export default function DebugPage() {
  return (
    <main style={{padding: 24}}>
      <h1>DEBUG OK</h1>
      <p>Si vous voyez cette page, le routage Next.js fonctionne côté Netlify.</p>
    </main>
  );
}
