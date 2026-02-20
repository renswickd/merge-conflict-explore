# Rebasing Conflicts

Rebasing rewrites history.

Unlike merge, which creates a new commit,
rebase replays commits one-by-one on top of another branch.

This is why conflicts during rebase can:
- Happen multiple times
- Feel repetitive
- Be more confusing than merge conflicts

---

# What Rebase Actually Does (Critical Concept)

Given this history:

main:        A --- B --- C
                     \
feature:              D --- E

Running:

    git rebase main

Git does NOT merge.

Git does this:

1. Temporarily remove commits D and E
2. Move feature to point at C
3. Replay D
4. Replay E

If D conflicts with C → conflict
If E conflicts with result of D → conflict again

---

# Goal of This Exercise

You will:
1. Create diverging history
2. Modify overlapping logic
3. Rebase feature onto updated main
4. Experience repeated conflict resolution
5. Learn how to recover safely

---

# Step 1: Create Base File

```bash
git checkout main

cat <<EOF > demo/app.js
function greet(name) {
  return "Hello " + name;
}
EOF

git add demo/app.js
git commit -m "Initial greet function"
```

# Step 2: Create Feature Branch with Multiple Commits
```bash
git checkout -b feature-enhancement
```

## Commit 1
```bash
cat <<EOF > demo/app.js
function greet(name) {
  const message = "Hello " + name;
  return message;
}
EOF

git add demo/app.js
git commit -m "Refactor: introduce message variable"
```

## Commit 2
```bash
cat <<EOF > demo/app.js
function greet(name) {
  const message = "Hello " + name;
  console.log("Greeting user");
  return message;
}
EOF

git add demo/app.js
git commit -m "Add logging"
```

Now your feature branch has 2 commits.

# Step 3: Meanwhile, main Changes
```base
git checkout main
```

Simulate another developer modifying the same function:

```bash
cat <<EOF > demo/app.js
function greet(userName) {
  return `Hello ${userName}`;
}
EOF

git add demo/app.js
git commit -m "Refactor: use template string and rename parameter"
```

# Step 4: Visualize Before Rebase
```bash
git log --oneline --graph --all --decorate
```

You should see:

- main has advanced.
- feature-enhancement has two commits.
- They diverged.

# Step 5: Start the Rebase
```bash
git checkout feature-enhancement
git rebase main
```

What Happens Now?

Git takes:

Commit 1 → tries to replay it on top of main

If conflict occurs:

    - Rebase stops
    - You must resolve
    - Then continue

# Step 6: Inspect Conflict
```bash
git status
cat demo/app.js
```
Resolve the conflict manually.

Then:
```bash
git add demo/app.js
git rebase --continue
```
`Important: It May Conflict Again`

Git now replays Commit 2.

If that commit also conflicts, you must resolve it again.
