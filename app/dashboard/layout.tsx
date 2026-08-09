import Link from "next/link";
import { companyName } from "@/lib/config";
import { vdrData } from "@/lib/data";
import { logout } from "@/app/actions/auth";
import DashboardSecurity from "./DashboardSecurity";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <DashboardSecurity />

      {/* Sidebar */}
      <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-white md:flex md:flex-col">
        <div className="flex h-16 items-center gap-2 border-b border-slate-200 px-5">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 text-sm font-bold text-white">
            N
          </div>
          <span className="truncate text-sm font-semibold text-slate-900">
            {companyName}
          </span>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
          <Link
            href="/dashboard"
            className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
          >
            00_Data_Room_Index
          </Link>

          <div className="pt-2">
            {vdrData.map((folder) => (
              <Link
                key={folder.id}
                href={`/dashboard/${folder.id}/${folder.items[0]?.id ?? ""}`}
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
              >
                {folder.title}
              </Link>
            ))}
          </div>
        </nav>
      </aside>

      {/* Main column */}
      <div className="flex min-h-screen flex-1 flex-col">
        <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 md:px-6">
          <span className="text-sm font-semibold text-slate-900 md:hidden">
            {companyName}
          </span>
          <span className="hidden text-sm font-medium text-slate-500 md:block">
            Virtual Data Room
          </span>

          <form action={logout}>
            <button
              type="submit"
              className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Log out
            </button>
          </form>
        </header>

        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
