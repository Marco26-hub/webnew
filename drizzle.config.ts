import { defineConfig } from "drizzle-kit";

/**
 * Drizzle Kit config.
 *   npm run db:generate   → emit SQL migrations from the schema
 *   npm run db:migrate    → apply migrations (needs DATABASE_URL)
 *   npm run db:push       → push schema directly (quick dev iteration)
 */
export default defineConfig({
  schema: "./src/lib/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL ?? "",
  },
});
