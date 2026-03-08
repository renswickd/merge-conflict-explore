# Conflict After Pull (Why `git pull` Explodes)

Many developers experience this:

"I pulled from main and now I have conflicts."

But `git pull` is not magic.

`git pull` is actually:

    git fetch
    +
    git merge (or rebase)

If your local branch and remote branch both changed,
Git must merge them.

Conflicts happen when changes overlap.

---

# Goal of This Exercise

You will:

1. Simulate a remote change
2. Make local changes
3. Perform `git pull`
4. Observe the conflict
5. Understand what really happened

---

# Step 1: Create Base File

```bash
git checkout main

cat <<EOF > demo/config.js
const config = {
  apiUrl: "https://api.dev.local",
};
EOF

git add demo/config.js
git commit -m "Initial config"
```

# Step 2: Simulate Remote Update

We simulate another developer updating main.

```bash
git checkout -b remote-update
```
Modify the file:
```bash
cat <<EOF > demo/config.js
const config = {
  apiUrl: "https://api.production.com",
};
EOF

git add demo/config.js
git commit -m "Update API URL to production"
```
Now simulate pushing to main:
```bash
git checkout main
git merge remote-update
```
Main now has the remote change.
# Step 3: Simulate Local Developer Working on Old Main

First reset to simulate being outdated:

```bash
git checkout main
git reset --hard HEAD~1
```
Now your local main does NOT have the production URL change.

Make a local change:
```bash
cat <<EOF > demo/config.js
const config = {
  apiUrl: "https://api.staging.local",
};
EOF

git add demo/config.js
git commit -m "Change API URL to staging"
```
Now:

- Remote main has production URL
- Local main has staging URL

# Step 4: Simulate Pull

We simulate pull by merging updated main.

First move main back to updated version:

```bash
git merge remote-update
```
If you followed correctly,
you should now see a conflict.
## Inspect the Conflict
```bash
git status
cat demo/config.js
```

## What Just Happened?

Your local branch:
- Changed apiUrl to staging

Remote branch:
- Changed apiUrl to production

When pulling, Git tried to merge:
- Your local commit
- The new remote commit
Both changed the same line → conflict.