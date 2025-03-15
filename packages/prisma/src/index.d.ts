import { PrismaClient } from "@prisma/client";
declare global {
    var prisma: PrismaClient | undefined;
    var process: any;
    var global: typeof globalThis;
}
export declare const client: PrismaClient<import("@prisma/client").Prisma.PrismaClientOptions, never, import("@prisma/client/runtime/library").DefaultArgs>;
//# sourceMappingURL=index.d.ts.map