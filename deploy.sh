#!/bin/bash
# Deploy revenue-site to GitHub Pages
# Usage: bash deploy.sh

set -e

SITE_DIR="$(cd "$(dirname "$0")" && pwd)"
GITHUB_TOKEN=$(grep GITHUB_TOKEN /home/quarm/clawd/.env | cut -d= -f2)

cd "$SITE_DIR"

echo "Building site..."
npx astro build

echo "Deploying to gh-pages..."
cd dist
rm -rf .git
git init -b gh-pages
git add -A
git commit -m "Deploy $(date -u +%Y-%m-%dT%H:%M:%SZ)"
git remote add origin "https://Mquarmoc:${GITHUB_TOKEN}@github.com/Mquarmoc/toolscout.git"
git push -f origin gh-pages

rm -rf .git
cd "$SITE_DIR"

echo "✅ Deployed to https://mquarmoc.github.io/toolscout/"
