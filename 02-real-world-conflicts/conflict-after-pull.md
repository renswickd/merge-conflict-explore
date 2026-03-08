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
