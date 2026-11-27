"use client";
import { useState } from "react";
export default function RegisterPage() {
  const [code, setCode] = useState("");
  const [valid, setValid] = useState(false);
  const [done, setDone] = useState(false);
  return (
    <main className="portal-page">
      <div className="register-card">
        <span className="eyebrow">EMPLOYEE REGISTRATION</span>
        <h1>Set up your Aptixon account.</h1>
        <p>
          Registration requires an AEAR code provisioned by Aptixon Management.
        </p>
        {done ? (
          <div className="success">
            Registration demo complete. You can now return to{" "}
            <a href="/login">Sign in</a>.
          </div>
        ) : (
          <>
            <label>
              Email
              <input
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
                placeholder="Enter your email"
              />
            </label>
            <button
              className="btn btn-green"
              onClick={() => setValid(code.trim().length >= 5)}
            >
              Verify code
            </button>
            {valid && (
              <div className="registration-next">
                <p className="success">
                  Code verified. Please set your password to continue.
                </p>
                <label>
                  New password
                  <input
                    type="password"
                    minLength={8}
                    placeholder="At least 8 characters"
                  />
                </label>
                <label>
                  Confirm password
                  <input
                    type="password"
                    minLength={8}
                    placeholder="Confirm password"
                  />
                </label>
                <label className="check">
                  <input type="checkbox" /> I accept the Terms and Conditions
                </label>
                <button className="btn btn-green" onClick={() => setDone(true)}>
                  Continue registration
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
