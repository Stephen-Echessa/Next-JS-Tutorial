import { PrismaClient } from ".././src/generated/prisma"

const globalForPrisma = globalThis

export const prisma = globalForPrisma.prisma || new PrismaClient({log: ["query"]})

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma