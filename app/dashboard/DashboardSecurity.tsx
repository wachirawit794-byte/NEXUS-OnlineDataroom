"use client";

import { useEffect } from "react";

/**
 * Applies lightweight document-protection rules across the dashboard:
 * blocks the context menu and disables text selection. This is a
 * deterrent, not a real DRM solution — determined users can still
 * access dev tools.
 */
export default function DashboardSecurity() {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);
    document.body.classList.add("select-none");

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.body.classList.remove("select-none");
    };
  }, []);

  return null;
}
