import { getDashboardStats, getRecentLeads } from "@/lib/admin/queries";
import { StatCard } from "@/components/admin/StatCard";
import { StatusBadge } from "@/components/admin/StatusBadge";
import {
  Table,
  Thead,
  Th,
  Tr,
  Td,
  TableEmpty,
} from "@/components/admin/Table";
import { fmtDate } from "@/lib/admin/format";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const [stats, recent] = await Promise.all([
    getDashboardStats(),
    getRecentLeads(),
  ]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Overview</h1>
        <p className="mt-1 text-sm text-muted">
          Leads, clients and appointments at a glance.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total leads" value={stats.totalLeads} />
        <StatCard
          label="New leads"
          value={stats.newLeads}
          hint="Awaiting first contact"
        />
        <StatCard label="Active clients" value={stats.activeClients} />
        <StatCard
          label="Upcoming"
          value={stats.upcomingAppointments}
          hint="Appointments ahead"
        />
      </div>

      <div>
        <h2 className="mb-3 text-sm font-medium text-muted">Recent leads</h2>
        <Table>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Reason</Th>
              <Th>Status</Th>
              <Th>Received</Th>
            </Tr>
          </Thead>
          <tbody>
            {recent.length === 0 ? (
              <TableEmpty colSpan={5}>No leads yet.</TableEmpty>
            ) : (
              recent.map((l) => (
                <Tr key={l.id}>
                  <Td className="font-medium text-ink">{l.name}</Td>
                  <Td className="text-muted">{l.email}</Td>
                  <Td className="text-muted">{l.reason ?? "—"}</Td>
                  <Td>
                    <StatusBadge status={l.status} />
                  </Td>
                  <Td className="whitespace-nowrap text-faint">
                    {fmtDate(l.createdAt)}
                  </Td>
                </Tr>
              ))
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
