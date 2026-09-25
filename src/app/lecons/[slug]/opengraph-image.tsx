/**
 * Image de partage propre à chaque leçon.
 *
 * Ces pages circulent surtout par messagerie : une vignette qui porte le titre
 * de la leçon et sa matière vaut mieux qu'une image générique, et bien mieux
 * que l'image absente de l'ancienne version.
 */
import { ImageResponse } from 'next/og';
import { getLesson } from '@/lib/content';
import { SITE_NAME, levelLabel } from '@/lib/site';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = `Leçon ${SITE_NAME}`;

export default async function LessonImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lesson = await getLesson(slug);

  const title = lesson?.title ?? 'Leçon';
  const subject = lesson?.subject.name ?? SITE_NAME;
  const tint = lesson?.subject.color ?? '#2563eb';
  const footer = [
    SITE_NAME,
    lesson ? levelLabel(lesson.level) : null,
    lesson ? `${lesson.estimatedMinutes} min` : null,
    lesson?.ageGroup,
  ]
    .filter(Boolean)
    .join(' · ');

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '72px',
          background: '#0e0f14',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, fontSize: 30, color: tint }}>
          <div style={{ width: 18, height: 18, borderRadius: 9, background: tint, display: 'flex' }} />
          <span style={{ display: 'flex' }}>{subject}</span>
        </div>
        <div
          style={{
            fontSize: title.length > 60 ? 54 : 66,
            fontWeight: 700,
            lineHeight: 1.12,
            marginTop: 34,
            display: 'flex',
          }}
        >
          {title}
        </div>
        <div style={{ display: 'flex', marginTop: 'auto', fontSize: 28, color: '#a4a9bb' }}>{footer}</div>
      </div>
    ),
    size,
  );
}
