/* ============================================================
   Read queries for the admin dashboard (server-only).
   ============================================================ */
import { asc, count, desc, eq, gte } from "drizzle-orm";
import { db } from "@/lib/db";
import { appointments, clients, leads } from "@/lib/db/schema";

export async function getLeads() {
  return db.select().from(leads).orderBy(desc(leads.createdAt));
}

export async function getClients() {
  return db.select().from(clients).orderBy(desc(clients.createdAt));
}

export async function getAppointments() {
  return db
    .select({
      id: appointments.id,
      title: appointments.title,
      clientId: appointments.clientId,
      clientName: clients.name,
      startsAt: appointments.startsAt,
      endsAt: appointments.endsAt,
      location: appointments.location,
      status: appointments.status,
      notes: appointments.notes,
      createdAt: appointments.createdAt,
    })
    .from(appointments)
    .leftJoin(clients, eq(appointments.clientId, clients.id))
    .orderBy(asc(appointments.startsAt));
}

/** Lightweight client list for the appointment form's dropdown. */
export async function getClientOptions() {
  return db
    .select({ id: clients.id, name: clients.name })
    .from(clients)
    .orderBy(asc(clients.name));
}

export async function getDashboardStats() {
  const now = new Date();
  const [[totalLeads], [newLeads], [activeClients], [upcoming]] =
    await Promise.all([
      db.select({ v: count() }).from(leads),
      db.select({ v: count() }).from(leads).where(eq(leads.status, "new")),
      db
        .select({ v: count() })
        .from(clients)
        .where(eq(clients.status, "active")),
      db
        .select({ v: count() })
        .from(appointments)
        .where(gte(appointments.startsAt, now)),
    ]);

  return {
    totalLeads: totalLeads?.v ?? 0,
    newLeads: newLeads?.v ?? 0,
    activeClients: activeClients?.v ?? 0,
    upcomingAppointments: upcoming?.v ?? 0,
  };
}

/** A few most-recent leads for the dashboard overview. */
export async function getRecentLeads(limit = 5) {
  return db.select().from(leads).orderBy(desc(leads.createdAt)).limit(limit);
}
