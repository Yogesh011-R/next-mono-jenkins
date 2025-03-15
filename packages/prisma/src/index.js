"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const client_1 = require("@prisma/client");
// For development, use the global instance
// For production, use a new instance
const globalForPrisma = global;
// Use the global instance in development to prevent multiple instances during hot reloading
exports.client = globalForPrisma.prisma ||
    new client_1.PrismaClient({
        // Add output for debugging
        log: ['query', 'error', 'warn'],
    });
// Set the global variable only in development
if (process.env.NODE_ENV !== 'production')
    globalForPrisma.prisma = exports.client;
