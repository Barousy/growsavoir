import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// À adapter à ta méthode d'auth (cookie, token, Netlify Identity, Auth.js, etc.)
function parseUser(req: NextRequest) {
  // ex: depuis un cookie signé ou un header… ici: “rôle=PREMIUM”
  const role = req.cookies.get('role')?.value; 
  const premiumUntil = req.cookies.get('premiumUntil')?.value;
  const isPremium = role === 'PREMIUM' && (!premiumUntil || new Date(premiumUntil) > new Date());
  return { isPremium };
}

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  // Protéger les pages /lessons/* premium
  if (url.pathname.startsWith('/lesson/')) {
    const isPremiumLesson = url.searchParams.get('premium') === '1'; // ou charge via rewrite + header
    if (isPremiumLesson) {
      const user = parseUser(req);
      if (!user.isPremium) {
        url.pathname = '/upgrade';
        url.searchParams.delete('premium');
        return NextResponse.redirect(url);
      }
    }
  }
  return NextResponse.next();
}
