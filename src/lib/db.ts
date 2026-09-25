/**
 * Client Prisma partagé.
 *
 * En développement, Next recharge les modules à chaque modification : sans
 * ce cache sur globalThis, chaque rechargement ouvrirait une connexion de
 * plus jusqu'à saturer la base.
 */
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const db = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db;
