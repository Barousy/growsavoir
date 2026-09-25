/**
 * Image de partage d'une matière.
 *
 * Satori (le moteur d'ImageResponse) exige un `display` explicite dès qu'un
 * bloc a plusieurs enfants, et ne connaît pas l'héritage CSS du navigateur :
 * les textes sont donc assemblés avant d'être rendus, un bloc par ligne.
 */
import { ImageResponse } from 'next/og';
import { getSubject } from '@/lib/content';
import { SITE_NAME } from '@/lib/site';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = `Matière ${SITE_NAME}`;

export default async function SubjectImage({ params }: { params: Promise<{ subject: string }> }) {
  const { subject: slug } = await params;
  const subject = await getSubject(slug);

  const name = subject?.name ?? 'Catalogue';
  const tint = subject?.color ?? '#2563eb';
  const count = subject?.lessons.length ?? 0;
  const line = [`${count} leçons`, subject?.description].filter(Boolean).join(' · ').slice(0, 110);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '72px',
          background: `linear-gradient(135deg, #0e0f14 0%, ${tint} 100%)`,
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 30, opacity: 0.85 }}>{`${SITE_NAME} · matière`}</div>
        <div style={{ display: 'flex', fontSize: 78, fontWeight: 700, lineHeight: 1.1, marginTop: 26 }}>{name}</div>
        <div style={{ display: 'flex', fontSize: 32, marginTop: 24, opacity: 0.9 }}>{line}</div>
      </div>
    ),
    size,
  );
}
