TRADE FIRM PREMIUM V6

RUN ON MAC

1. Extract trade-firm-premium-v6.zip
2. Open the extracted folder in VS Code.
3. Open Terminal > New Terminal.
4. Run:
   npm install
5. Then:
   npm run dev
6. Open:
   http://localhost:3000

IMPORTANT
- This version does NOT use Framer Motion, so the previous motion-dom error will not happen.
- Hero floating logo has been removed.
- Desktop and mobile layouts are rebuilt.
- Leads save in data/leads.json.
- Optional Telegram notifications:
  Copy .env.example to .env.local and enter:
  TELEGRAM_BOT_TOKEN=...
  TELEGRAM_CHAT_ID=...

To stop the website, press Control + C on the keyboard.
