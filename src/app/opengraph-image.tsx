/**
 * Image de partage.
 *
 * L'ancien site déclarait une og:image qui renvoyait une 404 : tout partage
 * sur un réseau social ou une messagerie s'affichait donc sans vignette. Elle
 * est ici produite par le serveur, donc toujours présente et toujours à jour.
 */
import { ImageResponse } from 'next/og';
import { SITE_NAME } from '@/lib/site';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = `${SITE_NAME} — apprendre l’arabe, les langues et les sciences`;

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 55%, #0e7490 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, fontSize: 34, opacity: 0.9 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 64,
              height: 64,
              borderRadius: 16,
              background: '#ffffff',
              color: '#1d4ed8',
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            GS
          </div>
          {SITE_NAME}
        </div>
        <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1, marginTop: 40 }}>
          Apprendre l’arabe, les langues et les sciences
        </div>
        <div style={{ fontSize: 34, marginTop: 28, opacity: 0.88 }}>
          Leçons de 20 minutes pour les 6-8 ans · accès libre
        </div>
      </div>
    ),
    size,
  );
}
