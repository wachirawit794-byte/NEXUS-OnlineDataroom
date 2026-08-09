import { notFound } from "next/navigation";
import Link from "next/link";
import { findItem } from "@/lib/data";
import DocViewer from "@/components/DocViewer";

interface PageProps {
  params: {
    folderId: string;
    itemId: string;
  };
}

export default function DocumentPage({ params }: PageProps) {
  const result = findItem(params.folderId, params.itemId);

  if (!result) {
    notFound();
  }

  const { folder, item } = result;

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-2 border-b border-slate-200 bg-white px-4 py-3 text-xs text-slate-500 md:px-6">
        <Link href="/dashboard" className="hover:text-blue-600">
          00_Data_Room_Index
        </Link>
        <span>/</span>
        <span className="text-slate-700">{folder.title}</span>
        <span>/</span>
        <span className="font-medium text-slate-900">{item.title}</span>
      </div>

      <DocViewer url={item.url} title={item.title} />
    </div>
  );
}
