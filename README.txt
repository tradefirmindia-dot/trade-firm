TRADE FIRM ADVISORY & RESEARCH WEBSITE — V8.1.4

PRODUCTION BASELINE
- Next.js 16
- Official Trade Firm brand assets preserved
- Mobile-first light institutional interface
- Existing CRM and Telegram lead-delivery flow preserved

INCLUDED
- Home advisory and research firm website with service enquiry form
- Full Advisory & Research Services page for indices, options, futures, F&O, equities,
  intraday, swing/positional markets and IPO research
- 10X THINK framework section
- Dedicated Tools area and interactive Risk Planner with Qty support
- Selectable Risk Planner risk–reward ratio from 1:1 through 1:10
- Advisory & Research Insights index with 15 complete evergreen articles
- Proper About Us page and company principles
- Advisory coverage, professional FAQs, Article/FAQ schema, SEO routes and market-risk wording
- Responsive mobile header branding with TRADE FIRM / ADVISORY • RESEARCH
- Compact research cards and inner-page spacing; all awkward "research-led" labels removed
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
