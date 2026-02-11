# Long-Lived Branch Conflict

This simulates a very common real-world problem:

A feature branch lives for too long.
Meanwhile, `main` continues evolving.

When you finally merge → heavy conflicts.

---

# Why This Happens (Minimal but Critical Theory)

When a branch is created:

    main ──── A ──── B
                \
                 feature

Over time:

    main ──── A ──── B ──── C ──── D ──── E
                \
                 feature ─── F ─── G

The further `main` moves ahead,
the harder the final merge becomes.

Conflicts increase because:
- Same files evolve independently
- Context shifts
- Refactors occur

---

# Goal of This Exercise

You will:
1. Create a feature branch
2. Let main evolve multiple times
3. Modify the same file in both
4. Experience a realistic merge conflict

---

## Step 1: Create Base Project

```bash
git checkout main

cat <<EOF > demo/app.js
function calculateTotal(price, tax) {
  return price + tax;
}
EOF

git add demo/app.js
git commit -m "Initial version of calculateTotal"
```

## Step 2: Create Long-Lived Feature Branch
```bash
git checkout -b feature-discount


Simulate working on this branch:

cat <<EOF > demo/app.js
function calculateTotal(price, tax, discount) {
  const subtotal = price + tax;
  return subtotal - discount;
}
EOF

git add demo/app.js
git commit -m "Add discount support"
```

DO NOT merge yet.

## Step 3: Meanwhile, main Evolves (Simulating Other Devs)
```bash
git checkout main
```

Simulate multiple commits on main:

### Refactor 1
```bash
cat <<EOF > demo/app.js
function calculateTotal(price, taxRate) {
  const tax = price * taxRate;
  return price + tax;
}
EOF

git add demo/app.js
git commit -m "Refactor: use taxRate instead of tax"
```

### Refactor 2
```bash
cat <<EOF > demo/app.js
export function calculateTotal(price, taxRate) {
  const tax = price * taxRate;
  return price + tax;
}
EOF

git add demo/app.js
git commit -m "Convert to ES module export"
```

## Step 4: Visualize Before Merge
```bash
git log --oneline --graph --all --decorate
```

#### Observe:

- main moved ahead 2 commits
- feature-discount is based on old structure

## Step 5: Attempt the Merge
```bash
git checkout feature-discount
git merge main
```
## Step 6: Inspect the Conflict
```bash
git status
cat demo/app.js
```

You should now see a heavy conflict.

Then,
```bash
git checkout feature-discount
git merge main
```

## Key Takeaways

- The longer a branch lives, the harder the merge
- Refactors amplify conflicts
- Why teams enforce small PRs
- Conflict complexity scales with history divergence
- Frequent integration reduces risk