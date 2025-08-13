// src/middleware.ts
import { NextResponse } from 'next/server';

// Désactive toute logique de réécriture/redirect le temps du diagnostic
export function middleware() {
  return NextResponse.next();
}

// Laisse passer tout (sinon on pourrait bloquer du statique)
export const config = {
  matcher: ['/((?!_next|.*\\..*|api).*)'],
};
