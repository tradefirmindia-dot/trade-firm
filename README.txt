TRADE FIRM RESEARCH PLATFORM — V8.0

PRODUCTION BASELINE
- Next.js 16
- Official Trade Firm brand assets preserved
- Mobile-first light institutional interface
- Existing CRM and Telegram lead-delivery flow preserved

INCLUDED
- Home research platform and research-service enquiry form
- Full Research Services page for indices, options, futures, F&O, equities,
  intraday, swing/positional markets and IPO research
- 10X THINK framework section
- Dedicated Tools area and interactive Risk Planner with Qty support
- Selectable Risk Planner risk–reward ratio from 1:1 through 1:10
- Research Blogs index with six complete evergreen research notes
- Proper About Us page and company principles
- Research coverage, process, FAQ, SEO routes and professional market-risk wording
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
CRM_SUPABASE_SECRET_KEY

The secret key must remain server-side. Never rename it with a
NEXT_PUBLIC_ prefix and never commit a real key or Telegram token to GitHub.

DEPLOYMENT
Push the updated project to the production branch connected to Vercel. Confirm
the environment variables in Vercel before testing a real lead submission.
