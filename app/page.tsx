import type { ComponentType } from "react";
import { notFound } from "next/navigation";
import { Dashboard } from "@/components/pages/portal/dashboard";
import AboutPage from "@/components/pages/about-page";
import CareersPage from "@/components/pages/careers-page";
import ContactPage from "@/components/pages/contact-page";
import HomePage from "@/components/pages/home-page";
import LoginPage from "@/components/pages/login-page";
import ProjectsPage from "@/components/pages/projects-page";
import RegisterPage from "@/components/pages/register-page";
import BusinessHomePage from "@/components/pages/businesses/business-home-page";
import EventraPage from "@/components/pages/businesses/eventra-page";
import InfotechPage from "@/components/pages/businesses/infotech-page";
import InfotechQuoteForm from "@/components/pages/businesses/infotech-quote-form";
import SportsPage from "@/components/pages/businesses/sports-page";

function AdminPage() {
  return <Dashboard kind="admin" />;
}

function EmployeePage() {
  return <Dashboard kind="employee" />;
}

function WorkerPage() {
  return <Dashboard kind="worker" />;
}

function InfotechQuotePage() {
  return (
    <main className="quote-request-page">
      <InfotechQuoteForm />
    </main>
  );
}

const routePages: Record<string, ComponentType> = {
  "": HomePage,
  about: AboutPage,
  admin: AdminPage,
  businesses: BusinessHomePage,
  "businesses/eventra": EventraPage,
  "businesses/infotech": InfotechPage,
  "businesses/infotech/request-a-quote": InfotechQuotePage,
  "businesses/sports": SportsPage,
  careers: CareersPage,
  contact: ContactPage,
  employee: EmployeePage,
  login: LoginPage,
  projects: ProjectsPage,
  register: RegisterPage,
  worker: WorkerPage,
};

export function generateStaticParams() {
  return Object.keys(routePages).map((path) => ({
    route: path === "" ? [] : path.split("/"),
  }));
}

export const dynamicParams = false;

export default async function MainPage({
  searchParams,
}: {
  searchParams: Promise<{ route?: string | string[] }>;
}) {
  const { route = "" } = await searchParams;
  const path = Array.isArray(route) ? route.join("/") : route;
  const Page = routePages[path];

  if (!Page) {
    notFound();
  }

  return <Page />;
}
