"use client";
import { useState } from "react";
import Link from "next/link";
import { ShieldCheck, Users, Briefcase, ArrowRight } from "lucide-react";
export default function LoginPage() {
  const [role, setRole] = useState("Employee");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [msg, setMsg] = useState("");
  const [show, setShow] = useState(false);
  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (role === "Crew Worker") {
      if (!otp) {
        setMsg("Demo OTP sent. Enter any 6 digits to continue.");
        return;
      }
      if (!/^\d{6}$/.test(otp)) {
        setMsg("Enter a valid 6-digit OTP.");
        return;
      }
      location.href = "/worker";
    } else {
      const id = (document.getElementById("aeid") as HTMLInputElement)?.value;
      if (!id) {
        setMsg("Enter your AEID.");
        return;
      }
      location.href = role === "Management" ? "/admin" : "/employee";
    }
  }
  return (
    <main className="portal-page">
      <div className="portal-shell">
        <div className="portal-intro">
          <span className="eyebrow light">APTIXON UNIFIED PLATFORM</span>
          <h1>
            One platform.
            <br />
            <em>Every opportunity.</em>
          </h1>
          <p>
            Sign in to manage your work, coordinate events or discover paid crew
            opportunities.
          </p>
          <div className="portal-perks">
            <span>
              <ShieldCheck /> Secure access
            </span>
            <span>
              <Users /> Role-based workspace
            </span>
            <span>
              <Briefcase /> Events & operations
            </span>
          </div>
        </div>
        <div className="login-card">
          <div className="login-brand">
            <span className="brand-mark">A</span>
            <b>Aptixon</b>
          </div>
          <h2>Welcome back</h2>
          <p>Choose your account type to continue.</p>
          <div className="role-tabs">
            {["Management", "Employee", "Crew Worker"].map((r) => (
              <button
                type="button"
                className={role === r ? "selected" : ""}
                onClick={() => {
                  setRole(r);
                  setMsg("");
                  setOtp("");
                }}
                key={r}
              >
                {r}
              </button>
            ))}
          </div>
          <form onSubmit={submit}>
            {role === "Crew Worker" ? (
              <>
                <label>
                  Phone number
                  <input
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    type="tel"
                  />
                </label>
                {otp !== "" && (
                  <label>
                    6-digit OTP
                    <input
                      maxLength={6}
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      placeholder="000000"
                    />
                  </label>
                )}
                <button
                  className="btn btn-green full"
                  type="button"
                  onClick={() => {
                    if (!phone.trim()) setMsg("Enter your phone number.");
                    else if (!otp)
                      setMsg("Demo OTP: use 123456. Enter it below.");
                    else submit({ preventDefault() {} } as any);
                  }}
                >
                  {otp ? "Verify OTP" : "Send OTP"} <ArrowRight size={17} />
                </button>
              </>
            ) : (
              <>
                <label>
                  AEID
                  <input id="aeid" required placeholder="e.g. AE1025" />
                </label>
                <label>
                  Password
                  <input
                    required
                    type={show ? "text" : "password"}
                    placeholder="Enter your password"
                  />
                </label>
                <button
                  type="button"
                  className="text-action show-pass"
                  onClick={() => setShow(!show)}
                >
                  {show ? "Hide password" : "Show password"}
                </button>
                <button className="btn btn-green full">
                  Sign in <ArrowRight size={17} />
                </button>
              </>
            )}
            {msg && <p className="form-message">{msg}</p>}
          </form>
          <div className="login-bottom">
            {role === "Employee" ? (
              <>
                <Link href="/register">Register as Employee</Link>
                <span>·</span>
                <button
                  onClick={() =>
                    setMsg(
                      "Password recovery requires the configured email service in production.",
                    )
                  }
                >
                  Forgot password?
                </button>
              </>
            ) : (
              <span>Standard SMS rates apply · 18+ only</span>
            )}
          </div>
          <small className="login-legal">
            © 2026 Aptixon.com · Terms & Conditions · Privacy Policy
          </small>
        </div>
      </div>
    </main>
  );
}
