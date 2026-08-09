import Link from "next/link";
import { companyName } from "@/lib/config";
import { vdrData } from "@/lib/data";

export default function DashboardIndexPage() {
  const totalFiles = vdrData.reduce((sum, f) => sum + f.items.length, 0);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-8">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
          00_Data_Room_Index
        </p>
        <h1 className="mt-1 text-2xl font-semibold text-slate-900">
          {companyName} Data Room
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          {vdrData.length} categories · {totalFiles} documents
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {vdrData.map((folder) => (
          <div
            key={folder.id}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-md"
          >
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-slate-900">
                {folder.title}
              </h2>
              <span className="rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700">
                {folder.items.length}
              </span>
            </div>

            <ul className="space-y-1.5">
              {folder.items.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/dashboard/${folder.id}/${item.id}`}
                    className="block truncate rounded-md px-2 py-1.5 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
