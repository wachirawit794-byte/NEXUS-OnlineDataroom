"use client";

interface DocViewerProps {
  url: string;
  title: string;
}

export default function DocViewer({ url, title }: DocViewerProps) {
  if (!url) {
    return (
      <div className="flex min-h-screen w-full flex-col items-center justify-center bg-white text-center">
        <p className="text-sm font-medium text-slate-500">
          No document has been linked for this item yet.
        </p>
        <p className="mt-1 text-xs text-slate-400">
          Add a Google Drive embed link in{" "}
          <code className="rounded bg-slate-100 px-1 py-0.5">
            lib/data.ts
          </code>
        </p>
      </div>
    );
  }

  return (
    <div className="vdr-protected min-h-screen w-full bg-white">
      <iframe
        src={url}
        title={title}
        className="h-screen min-h-screen w-full border-0"
        allow="autoplay"
      />
    </div>
  );
}
