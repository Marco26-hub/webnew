import { getLeads } from "@/lib/admin/queries";
import { leadStatus } from "@/lib/db/schema";
import { updateLeadStatus, deleteLead } from "@/app/admin/actions";
import { StatusSelect } from "@/components/admin/StatusSelect";
import { DeleteButton } from "@/components/admin/DeleteButton";
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

export default async function LeadsPage() {
  const rows = await getLeads();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Leads</h1>
        <p className="mt-1 text-sm text-muted">
          Enquiries captured from the website contact form.
        </p>
      </div>

      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Contact</Th>
            <Th>Reason</Th>
            <Th>Budget</Th>
            <Th>Message</Th>
            <Th>Status</Th>
            <Th>Received</Th>
            <Th />
          </Tr>
        </Thead>
        <tbody>
          {rows.length === 0 ? (
            <TableEmpty colSpan={8}>No leads yet.</TableEmpty>
          ) : (
            rows.map((l) => (
              <Tr key={l.id}>
                <Td className="whitespace-nowrap font-medium text-ink">
                  {l.name}
                </Td>
                <Td className="text-muted">
                  <div>{l.email}</div>
                  {l.company && (
                    <div className="text-xs text-faint">{l.company}</div>
                  )}
                </Td>
                <Td className="text-muted">{l.reason ?? "—"}</Td>
                <Td className="whitespace-nowrap text-muted">
                  {l.budget ?? "—"}
                </Td>
                <Td className="max-w-xs">
                  <p className="line-clamp-2 text-muted">{l.message}</p>
                </Td>
                <Td>
                  <StatusSelect
                    value={l.status}
                    options={leadStatus.enumValues}
                    action={updateLeadStatus.bind(null, l.id)}
                  />
                </Td>
                <Td className="whitespace-nowrap text-faint">
                  {fmtDate(l.createdAt)}
                </Td>
                <Td>
                  <DeleteButton
                    action={deleteLead.bind(null, l.id)}
                    confirmText="Delete this lead?"
                  />
                </Td>
              </Tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
}
