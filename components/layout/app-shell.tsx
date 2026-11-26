"use client";

import { usePathname } from "next/navigation";
import { Navigation } from "@/components/layout/navigation";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = ["/admin", "/employee", "/worker"].includes(pathname);
  const isAuth = ["/login", "/register"].includes(pathname);

  if (isDashboard) {
    return <>{children}</>;
  }

  return (
    <>
      {!isAuth && <Navigation />}
      {children}
    </>
  );
}
