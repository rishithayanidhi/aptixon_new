"use client";

import { useState } from "react";
import {
  APTIXON_AUTH_SESSION_KEY,
  INFOTECH_ROUTE,
} from "@/lib/auth";

export default function LoginPage() {
  const [accountType, setAccountType] = useState<"User" | "Admin">("User");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function completeLogin(defaultRoute: string) {
    sessionStorage.setItem(APTIXON_AUTH_SESSION_KEY, "true");

    const requestedDestination = new URLSearchParams(location.search).get(
      "next",
    );
    if (requestedDestination) {
      const destination = new URL(requestedDestination, location.origin);
      const isInfotechDestination =
        destination.origin === location.origin &&
        (destination.pathname === INFOTECH_ROUTE ||
          destination.pathname.startsWith(`${INFOTECH_ROUTE}/`));

      if (isInfotechDestination) {
        location.href = destination.href;
        return;
      }
    }

    location.href = defaultRoute;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedEmail = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      setMessage("Enter a valid email address.");
      return;
    }

    if (!password.trim()) {
      setMessage("Enter your password.");
      return;
    }

    completeLogin(accountType === "Admin" ? "/admin" : "/employee");
  }

  function handleGoogleSignIn() {
    setMessage("Google sign-in is not configured yet.");
  }

  return (
    <main className="page">
      <div className="topWave" aria-hidden="true" />
      <div className="rightGlow" aria-hidden="true" />
      <div className="bottomWaves" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <section className="layout">
        <div className="intro">
          <a href="/" className="brand" aria-label="Aptixon Infotech home">
            <svg
              className="brandMark"
              viewBox="0 0 92 82"
              role="img"
              aria-label="Aptixon logo"
            >
              <path
                d="M12 68 39 14c3-7 12-7 16 0l26 54c3 7-6 13-12 8L48 48 27 76c-6 7-19 1-15-8Z"
                fill="currentColor"
              />
              <path
                d="M39 54c5-7 13-7 18 0l-9 10-9-10Z"
                fill="#fff"
                opacity=".95"
              />
            </svg>
            <span className="brandName">
              Aptixon <strong>Infotech</strong><sup>®</sup>
            </span>
          </a>

          <div className="brandRule" />

          <h1>
            Welcome to
            <br />
            Aptixon <span>Infotech</span>
          </h1>

          <p className="introText">
            Access your workspace, projects and resources
            <br className="desktopBreak" />
            in a secure and unified platform.
          </p>
        </div>

        <section className="loginCard" aria-labelledby="login-title">
          <header className="cardHeader">
            <h2 id="login-title">Sign In</h2>
            <p>
              to <span>Aptixon Infotech</span>
            </p>
          </header>

          <div className="accountSwitch" role="tablist" aria-label="Account type">
            <button
              type="button"
              role="tab"
              aria-selected={accountType === "User"}
              className={accountType === "User" ? "activeTab" : "tab"}
              onClick={() => {
                setAccountType("User");
                setMessage("");
              }}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21v-2a8 8 0 0 1 16 0v2" />
              </svg>
              User
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={accountType === "Admin"}
              className={
                accountType === "Admin" ? "activeTab" : "tab"
              }
              onClick={() => {
                setAccountType("Admin");
                setMessage("");
              }}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="7" width="18" height="14" rx="2" />
                <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" />
              </svg>
              Admin
            </button>
          </div>

          <form className="form" onSubmit={handleSubmit}>
            <label className="inputWrap">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m4 7 8 6 8-6" />
              </svg>
              <input
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </label>

            <label className="inputWrap">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="4" y="10" width="16" height="11" rx="2" />
                <path d="M8 10V7a4 4 0 0 1 8 0v3" />
              </svg>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                autoComplete={accountType === "User" ? "current-password" : "current-password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
              <button
                type="button"
                className="visibilityButton"
                onClick={() => setShowPassword((current) => !current)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="m3 3 18 18M10.6 5.2A10.8 10.8 0 0 1 12 5c6.5 0 10 7 10 7a16 16 0 0 1-3.1 3.8M6.2 6.2C3.5 8 2 12 2 12s3.5 7 10 7c1.5 0 2.8-.4 4-1" />
                    <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
                  </svg>
                )}
              </button>
            </label>

            <div className="forgotRow">
              <button
                type="button"
                onClick={() =>
                  setMessage(
                    "Password recovery is not configured yet. Contact Aptixon support.",
                  )
                }
              >
                Forgot password?
              </button>
            </div>

            <button type="submit" className="signInButton">
              Sign In <span aria-hidden="true">→</span>
            </button>
            {message && (
              <p className="formMessage" role="alert">
                {message}
              </p>
            )}
          </form>

          <div className="separator">
            <span />
            <b>or</b>
            <span />
          </div>

          <button
            type="button"
            className="googleButton"
            onClick={handleGoogleSignIn}
          >
            <span className="googleG">G</span>
            Continue with Google
          </button>

          <p className="registerText">
            New to Aptixon Infotech? <a href="/register">Register Now</a>
          </p>
        </section>
      </section>
      
    </main>
  );
}
