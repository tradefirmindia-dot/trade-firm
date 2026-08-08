TRADE FIRM PRECISION WEBSITE

PRODUCTION BASELINE
- Next.js 16
- Official Trade Firm brand assets preserved
- Mobile-first light institutional interface

INCLUDED
- Research Desk product preview
- Complimentary discovery-call form
- 10X THINK framework section
- Interactive educational Risk Planner
- Research coverage, process, FAQ and risk disclosure
- Server-side lead validation, spam protection and duplicate handling
- Optional direct sync into the Trade Firm CRM Supabase database
- Optional Telegram lead notifications

LOCAL SETUP
1. Copy .env.example to .env.local.
2. Add only the services you use.
3. Run: npm install
4. Run: npm run dev
5. Open: http://localhost:3000

CRM CONNECTION
Add the same Supabase project URL and server-side service-role key used by the
Trade Firm CRM to these website environment variables:

CRM_SUPABASE_URL
CRM_SUPABASE_SERVICE_ROLE_KEY

The service-role key must remain server-side. Never rename it with a
NEXT_PUBLIC_ prefix and never commit a real key or Telegram token to GitHub.

DEPLOYMENT
Push the updated project to the production branch connected to Vercel. Confirm
the environment variables in Vercel before testing a real lead submission.
