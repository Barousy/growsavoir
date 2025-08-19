import { PrismaClient } from '@prisma/client';

// Singleton pour éviter les multiples connexions en dev
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['warn', 'error'], // tu peux mettre ['query','info','warn','error'] si tu veux tout voir
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
