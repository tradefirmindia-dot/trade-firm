#!/bin/bash
set -e

cd "$(dirname "$0")"

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js is not installed. Install the current Node.js LTS version first."
  read -r -p "Press Enter to close..."
  exit 1
fi

if [ ! -d node_modules ]; then
  echo "Preparing Trade Firm website..."
  npm install
fi

echo "Starting Trade Firm website at http://localhost:3000"
npm run dev
