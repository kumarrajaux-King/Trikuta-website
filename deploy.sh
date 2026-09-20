#!/usr/bin/env bash
# Trikuta website — one-command deploy.
#
# Usage:  ./deploy.sh  ["optional commit message"]
#
# Run this from inside your cloned repo, after copying the latest
# project files over it. It stages everything, commits, and pushes.

set -euo pipefail

cd "$(dirname "$0")"

if [ ! -d .git ]; then
  echo "Not a git repository. Run this from inside your cloned repo."
  exit 1
fi

MSG="${1:-Update site $(date '+%Y-%m-%d %H:%M')}"
BRANCH="$(git rev-parse --abbrev-ref HEAD)"

if git diff --quiet && git diff --cached --quiet && [ -z "$(git ls-files --others --exclude-standard)" ]; then
  echo "Nothing changed. Copy the new files in first."
  exit 0
fi

git add -A
git commit -m "$MSG"
git push origin "$BRANCH"

echo
echo "Pushed to $BRANCH."
echo "If Pages or your host is wired to this branch, the deploy is running now."
