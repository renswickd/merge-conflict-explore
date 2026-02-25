# Cherry-Pick Conflicts (Applying Old Commits to New History)

`git cherry-pick` takes a specific commit and applies it onto your current branch.

Unlike merge or rebase:
- It does NOT consider branch history
- It replays one commit
- It may conflict if context has changed

Cherry-pick conflicts are common in:
- Hotfixes
- Backports
- Selective feature copying

---

# Goal of This Exercise

You will:

1. Create a commit on one branch
2. Let another branch evolve differently
3. Cherry-pick the old commit
4. Experience a conflict
5. Understand why context matters

---

# Step 1: Create Base File

```bash
git checkout main

cat <<EOF > demo/payment.js
function processPayment(amount) {
  return amount * 1.1;
}
EOF

git add demo/payment.js
git commit -m "Initial payment processing"
```

# Step 2: Create Bugfix Branch

Simulate a hotfix branch:
```bash
git checkout -b hotfix-tax-rounding
```

Modify logic:

```bash
cat <<EOF > demo/payment.js
function processPayment(amount) {
  const total = amount * 1.1;
  return Math.round(total);
}
EOF

git add demo/payment.js
git commit -m "Fix: round total amount"
```

Remember this commit hash:
```bash
git log --oneline
```
`Copy the commit ID.`

# Step 3: Meanwhile, main Evolves
```bash
git checkout main
```
Simulate refactor by another developer:

```bash
cat <<EOF > demo/payment.js
export function processPayment(amount, taxRate) {
  const tax = amount * taxRate;
  return amount + tax;
}
EOF

git add demo/payment.js
git commit -m "Refactor: use taxRate parameter and ES module"
```

Now:

hotfix commit is based on old structure

main has refactored function signature

# Step 4: Cherry-Pick the Hotfix Commit

Stay on main:
```bash
git cherry-pick <commit-hash> # copied commit hash
```

# Step 5: Observe Conflict
```bash
git status
cat demo/payment.js
```
You should see conflict markers.