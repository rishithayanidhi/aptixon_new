"use client";

import { usePathname } from "next/navigation";
import { SiteHeader } from "@/components/site";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = ["/admin", "/employee", "/worker"].includes(pathname);
  const isAuth = ["/login", "/register"].includes(pathname);

  if (isDashboard) {
    return <>{children}</>;
  }

  return (
    <>
      {!isAuth && <SiteHeader />}
      {children}
      {/* {!isAuth && <SiteFooter />} */}
    </>
  );
}
