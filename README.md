# Aptixon Unified Web Platform — Next.js starter

A responsive Next.js App Router implementation based on the supplied Aptixon homepage reference and Aptixon Unified Web Platform SRS v1.2 (11 Nov 2026).

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Routes
- `/` Corporate homepage
- `/about`, `/businesses`, `/projects`, `/careers`, `/contact` Separate public pages
- `/login`, `/register` Unified login and AEAR registration demo
- `/admin`, `/employee`, `/worker` Role-oriented portal demos

## Important implementation boundary
The public website pages and client-side interactions are implemented. Portal screens use sample data and simulated actions so you can test the navigation and workflows. This is **not yet a production authentication or data platform**.

Before production, connect:
- PostgreSQL data models and migrations
- Server-side authentication, Argon2/bcrypt password hashing, JWT/session cookies, CSRF protection and rate limiting
- SMS/OTP provider (MSG91/Twilio), transactional email (SES/SendGrid)
- Secure private object storage for KYC and receipt uploads
- Aadhaar verification and face-match providers
- RBAC middleware and audit logs
- Reimbursement two-tier approvals, attendance/timesheet APIs, payout batching
- Push notifications and service-worker offline read-only caching

Never use demo login or client-side role selection as an authorization boundary. Validate all permissions on the server. Do not store real Aadhaar numbers or documents in this demo.

## Performance notes
The public pages are mostly server-rendered; client components are limited to navigation and interactive forms. For production, use optimized local imagery, CDN caching, route-level loading states, database indexes, Redis, pagination, monitoring and load testing. The SRS targets FCP <= 2s on 4G, API p95 <= 500ms and 10,000 concurrent users; these targets require deployed infrastructure and testing.
