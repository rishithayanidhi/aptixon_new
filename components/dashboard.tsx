"use client";
import { useState } from "react";
import {
  LayoutDashboard,
  CalendarDays,
  Clock,
  ReceiptText,
  Users,
  Settings,
  LogOut,
  Bell,
  CheckCircle2,
  Plus,
  Search,
  Menu,
  X,
  ClipboardList,
  MapPin,
  Trophy,
} from "lucide-react";
const events = [
  ["Kerala Super League", "Kochi · 24 Nov 2026", "Upcoming"],
  ["Youth Football Championship", "Alappuzha · 02 Dec 2026", "Upcoming"],
  ["Snake Boat Championship", "Alappuzha · 12 Dec 2026", "Internal"],
];
export function Dashboard({ kind }: { kind: "admin" | "employee" | "worker" }) {
  const [tab, setTab] = useState(kind === "worker" ? "Discover" : "Dashboard");
  const [checked, setChecked] = useState(false);
  const [filter, setFilter] = useState("All");
  const [toast, setToast] = useState("");
  const isAdmin = kind === "admin",
    isWorker = kind === "worker";
  const title = isAdmin
    ? "Management Console"
    : isWorker
      ? "Crew Worker Portal"
      : "Employee Portal";
  const nav = isAdmin
    ? ["Dashboard", "Employees", "Contracts", "Timesheets", "Reimbursements"]
    : isWorker
      ? ["Discover", "Applied", "KYC", "Profile"]
      : [
          "Dashboard",
          "My Events",
          "Attendance",
          "Timesheets",
          "My Reimbursement",
          "More",
        ];
  const icon = (n: string) =>
    n === "Dashboard" ? (
      <LayoutDashboard />
    ) : n.includes("Event") || n === "Discover" ? (
      <CalendarDays />
    ) : n === "Attendance" ? (
      <Clock />
    ) : n.includes("Reimbursement") ? (
      <ReceiptText />
    ) : n === "Employees" ? (
      <Users />
    ) : n === "Timesheets" ? (
      <ClipboardList />
    ) : n === "Applied" ? (
      <ClipboardList />
    ) : n === "KYC" ? (
      <CheckCircle2 />
    ) : (
      <Settings />
    );
  function notify(s: string) {
    setToast(s);
    setTimeout(() => setToast(""), 2600);
  }
  return (
    <main className="dashboard-page">
      <aside className="dash-sidebar">
        <a className="dash-logo" href="/">
          A<span>ptixon</span>
        </a>
        <small>{title.toUpperCase()}</small>
        <nav>
          {nav.map((n) => (
            <button
              key={n}
              className={tab === n ? "active" : ""}
              onClick={() => setTab(n)}
            >
              {icon(n)}
              {n}
            </button>
          ))}
        </nav>
        <button
          className="dash-logout"
          onClick={() => (location.href = "/login")}
        >
          <LogOut /> Sign out
        </button>
      </aside>
      <section className="dash-main">
        <header className="dash-top">
          <div>
            <span className="eyebrow">APTIXON WORKSPACE</span>
            <h1>{tab}</h1>
          </div>
          <div className="dash-user">
            <button onClick={() => notify("You're all caught up.")}>
              <Bell />
            </button>
            <span className="avatar">
              {isWorker ? "CW" : isAdmin ? "AD" : "MJ"}
            </span>
            <div>
              <b>
                {isWorker
                  ? "Crew Worker"
                  : isAdmin
                    ? "Management"
                    : "Monisha J"}
              </b>
              <small>
                {isWorker
                  ? "Crew account"
                  : isAdmin
                    ? "Administrator"
                    : "AE1025 · Event Manager"}
              </small>
            </div>
          </div>
        </header>
        {toast && <div className="toast">{toast}</div>}
        {tab === "Dashboard" && (
          <>
            <div className="welcome-row">
              <div>
                <h2>Good afternoon, {isAdmin ? "Management" : "Monisha"} 👋</h2>
                <p>Here's what's happening across your Aptixon workspace.</p>
              </div>
              <span className="date-pill">Sunday, 22 November 2026</span>
            </div>
            <div className="stats-grid">
              {(isAdmin
                ? [
                    ["Employees", "128", "+8 this month"],
                    ["Active contracts", "104", "12 expiring soon"],
                    ["Pending timesheets", "18", "Across 4 events"],
                    ["Claims to review", "07", "Awaiting audit"],
                  ]
                : [
                    [
                      "Attendance",
                      checked ? "Checked in" : "Not checked in",
                      checked ? "Today · 09:14 AM" : "Check in to start",
                    ],
                    ["Leave balance", "12 days", "Available this year"],
                    ["Reimbursements", "03 pending", "Manager access"],
                    ["Timesheet approvals", "06 pending", "Team attendance"],
                  ]
              ).map(([a, b, c]) => (
                <article className="stat-card" key={a}>
                  <span>{a}</span>
                  <strong>{b}</strong>
                  <small>{c}</small>
                </article>
              ))}
            </div>
            <div className="dash-columns">
              <section className="dash-panel">
                <div className="panel-heading">
                  <h3>Upcoming events</h3>
                  <button
                    onClick={() => setTab(isWorker ? "Discover" : "My Events")}
                  >
                    View all →
                  </button>
                </div>
                {events.map((e) => (
                  <div className="dash-event" key={e[0]}>
                    <div className="event-symbol">
                      <CalendarDays />
                    </div>
                    <div>
                      <b>{e[0]}</b>
                      <small>{e[1]}</small>
                    </div>
                    <span className="status">{e[2]}</span>
                  </div>
                ))}
              </section>
              <section className="dash-panel">
                <div className="panel-heading">
                  <h3>Quick actions</h3>
                </div>
                <button
                  className="quick-action"
                  onClick={() => setTab("Attendance")}
                >
                  <Clock /> Attendance & shift log
                </button>
                <button
                  className="quick-action"
                  onClick={() => setTab("My Reimbursement")}
                >
                  <ReceiptText /> Submit an expense claim
                </button>
                <button
                  className="quick-action"
                  onClick={() => setTab("Timesheets")}
                >
                  <ClipboardList /> Review timesheets
                </button>
              </section>
            </div>
          </>
        )}
        {tab === "Attendance" && (
          <section className="dash-panel wide-panel">
            <h2>Attendance</h2>
            <p>Record your workday check-in and check-out.</p>
            <div className="attendance-box">
              <div>
                <span>Today's status</span>
                <h2>{checked ? "Checked in · 09:14 AM" : "Not checked in"}</h2>
              </div>
              <button
                className="btn btn-green"
                onClick={() => {
                  setChecked(!checked);
                  notify(
                    checked
                      ? "Checked out successfully"
                      : "Checked in successfully",
                  );
                }}
              >
                {checked ? "Check out" : "Check in"}
              </button>
            </div>
            <h3>Recent attendance</h3>
            <p>21 Nov · Present · 09:02 AM – 06:11 PM</p>
            <p>20 Nov · Present · 09:10 AM – 06:03 PM</p>
          </section>
        )}
        {tab === "Employees" && (
          <section className="dash-panel wide-panel">
            <div className="panel-heading">
              <h2>Employee directory</h2>
              <button
                className="btn btn-green"
                onClick={() =>
                  notify("New employee form is ready for API integration.")
                }
              >
                <Plus /> Provision employee
              </button>
            </div>
            <div className="searchbar">
              <Search />
              <input placeholder="Search employees or AEID" />
            </div>
            {[
              "AE1025 · Monisha J · Event Manager",
              "AE1026 · Arun K · Coordinator",
              "AE1027 · Priya S · Daily Worker",
            ].map((x) => (
              <div className="dash-event" key={x}>
                <Users />
                <b>{x}</b>
                <span className="status">Active</span>
              </div>
            ))}
          </section>
        )}
        {tab === "Discover" && (
          <section className="dash-panel wide-panel">
            <div className="panel-heading">
              <div>
                <span className="eyebrow">KERALA · PAID CREW CALLS</span>
                <h2>Find your next shift.</h2>
              </div>
              <span className="status">3 events</span>
            </div>
            <div className="filter-row">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option>All</option>
                <option>Kochi</option>
                <option>Alappuzha</option>
              </select>
              <select>
                <option>Any date</option>
                <option>This week</option>
              </select>
              <select>
                <option>All roles</option>
                <option>Usher</option>
                <option>Runner</option>
              </select>
            </div>
            <div className="worker-events">
              {events
                .filter((e) => filter === "All" || e[1].includes(filter))
                .map((e) => (
                  <article className="worker-event" key={e[0]}>
                    <div className="worker-event-art">
                      <Trophy />
                      <span>KERALA · LIVE SPORTS</span>
                    </div>
                    <div className="worker-event-info">
                      <span className="eyebrow">{e[2]}</span>
                      <h3>{e[0]}</h3>
                      <p>
                        <MapPin size={15} /> {e[1]}
                      </p>
                      <b>FROM ₹1,400 / SHIFT</b>
                      <button
                        className="btn btn-green"
                        onClick={() =>
                          notify(
                            "Event details opened. Complete KYC to register.",
                          )
                        }
                      >
                        View details →
                      </button>
                    </div>
                  </article>
                ))}
            </div>
          </section>
        )}
        {tab !== "Dashboard" &&
          tab !== "Attendance" &&
          tab !== "Employees" &&
          tab !== "Discover" && (
            <section className="dash-panel wide-panel">
              <div className="panel-heading">
                <h2>{tab}</h2>
                <button
                  className="btn btn-green"
                  onClick={() => notify(`${tab} action started.`)}
                >
                  <Plus /> New
                </button>
              </div>
              <p>
                Manage {tab.toLowerCase()} from this workspace. The sample
                records below demonstrate the interaction flow; connect the
                production API and database for live records.
              </p>
              {[
                "Pending review · 3 records",
                "Approved · 12 records",
                "Recently updated · 4 records",
              ].map((x) => (
                <div className="dash-event" key={x}>
                  <ClipboardList />
                  <b>{x}</b>
                  <button
                    className="text-action"
                    onClick={() => notify("Record updated in demo.")}
                  >
                    Review →
                  </button>
                </div>
              ))}
            </section>
          )}
      </section>
    </main>
  );
}
