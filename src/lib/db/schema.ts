/* ============================================================
   Database schema (Drizzle ORM · Postgres / Neon)
   Two groups of tables:
     1. Auth tables required by Better Auth (user/session/account/
        verification) — shape dictated by Better Auth + the admin plugin.
     2. Business tables for the admin dashboard (clients/leads/appointments).
   Keep Better Auth field (property) names exactly as below — the Drizzle
   adapter maps them by property key, not by SQL column name.
   ============================================================ */
import {
  pgTable,
  pgEnum,
  text,
  boolean,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

/* ---------------------------------------------------------------
   Better Auth — core tables
   --------------------------------------------------------------- */
export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").notNull().default(false),
  image: text("image"),
  // admin plugin fields
  role: text("role").default("user"),
  banned: boolean("banned").default(false),
  banReason: text("ban_reason"),
  banExpires: timestamp("ban_expires"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const session = pgTable("session", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expires_at").notNull(),
  token: text("token").notNull().unique(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  // admin plugin field (impersonation)
  impersonatedBy: text("impersonated_by"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const account = pgTable("account", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at"),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
  scope: text("scope"),
  // hashed password for the email+password ("credential") provider
  password: text("password"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const verification = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

/* ---------------------------------------------------------------
   Business — enums
   --------------------------------------------------------------- */
export const leadStatus = pgEnum("lead_status", [
  "new",
  "contacted",
  "qualified",
  "won",
  "lost",
]);

export const clientStatus = pgEnum("client_status", [
  "prospect",
  "active",
  "paused",
  "churned",
]);

export const appointmentStatus = pgEnum("appointment_status", [
  "scheduled",
  "confirmed",
  "completed",
  "cancelled",
]);

/* ---------------------------------------------------------------
   Business — tables
   --------------------------------------------------------------- */
export const clients = pgTable("clients", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  email: text("email"),
  company: text("company"),
  phone: text("phone"),
  status: clientStatus("status").notNull().default("active"),
  notes: text("notes"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const leads = pgTable("leads", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  reason: text("reason"),
  budget: text("budget"),
  message: text("message").notNull(),
  source: text("source").notNull().default("website"),
  status: leadStatus("status").notNull().default("new"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const appointments = pgTable("appointments", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  // Reserved for future client-portal scoping; nulled (not deleted) if a
  // client is removed so the appointment history survives.
  clientId: uuid("client_id").references(() => clients.id, {
    onDelete: "set null",
  }),
  startsAt: timestamp("starts_at").notNull(),
  endsAt: timestamp("ends_at"),
  location: text("location"),
  status: appointmentStatus("status").notNull().default("scheduled"),
  notes: text("notes"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

/* ---------------------------------------------------------------
   Inferred row types
   --------------------------------------------------------------- */
export type Client = typeof clients.$inferSelect;
export type Lead = typeof leads.$inferSelect;
export type Appointment = typeof appointments.$inferSelect;

export type LeadStatus = (typeof leadStatus.enumValues)[number];
export type ClientStatus = (typeof clientStatus.enumValues)[number];
export type AppointmentStatus = (typeof appointmentStatus.enumValues)[number];
