"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Navigation } from "@/components/layout/navigation";
import {
  APTIXON_AUTH_SESSION_KEY,
  INFOTECH_LOGIN_HREF,
  INFOTECH_ROUTE,
} from "@/lib/auth";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [authorizedInfotechPath, setAuthorizedInfotechPath] = useState<
    string | null
  >(null);
  const isDashboard = ["/admin", "/employee", "/worker"].includes(pathname);
  const isAuth = ["/login", "/register"].includes(pathname);
  const isInfotechRoute =
    pathname === INFOTECH_ROUTE || pathname.startsWith(`${INFOTECH_ROUTE}/`);

  useEffect(() => {
    if (!isInfotechRoute) {
      return;
    }

    if (sessionStorage.getItem(APTIXON_AUTH_SESSION_KEY) === "true") {
      setAuthorizedInfotechPath(pathname);
      return;
    }

    setAuthorizedInfotechPath(null);
    router.replace(INFOTECH_LOGIN_HREF);
  }, [isInfotechRoute, pathname, router]);

  if (isDashboard) {
    return <>{children}</>;
  }

  if (isInfotechRoute && authorizedInfotechPath !== pathname) {
    return null;
  }

  return (
    <>
      {!isAuth && <Navigation />}
      {children}
    </>
  );
}
