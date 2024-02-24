import {PrismaClient} from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}
export const db = globalThis.prisma ?? new PrismaClient(); //don't create too much client when hot loading
if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
