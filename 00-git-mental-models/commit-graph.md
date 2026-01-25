# Git Commit Graph (How Git Really Thinks)

Most developers think Git tracks **files and folders**.

Git does not.

Git tracks **commits**, and those commits form a **Directed Acyclic Graph (DAG)**.

Understanding this graph is the single most important concept for understanding:
- Merges
- Rebases
- Merge conflicts

---

## Commits Are Nodes in a Graph

Each commit contains:
- A snapshot of the project
- A reference to its parent commit(s)

Example:

A → B → C

- `A` is the first commit
- `B` points to `A`
- `C` points to `B`

There is **no concept of “latest file”** — only snapshots.

---

## Branches Are Just Pointers

A branch is **not a copy of code**.  
A branch is a **movable pointer to a commit**.

---

## Goal of This Exercise

You will:
- Create multiple branches
- Generate diverging commit history
- Visualize Git as a graph

---

## Step 0: Clean Start

```bash
git status
```
Ensure your working tree is clean.

### Step 1: Create First Commit

```bash
echo "Line 1" >> demo/file.txt
git add demo/file.txt
git commit -m "Initial commit"
```

### Step 2: Create a Branch
```bash
git branch feature-a
git checkout feature-a
```

### Step 4: Switch Back to main and Add Another Commit
```bash
git checkout main
echo "Main branch change" >> demo/file.txt
git add demo/file.txt
git commit -m "Main branch change"
```

### Step 3: Add Commit on feature-a
```bash
echo "Feature A change" >> demo/file.txt
git add demo/file.txt
git commit -m "Add feature A"
```

### Step 5: Visualize the Commit Graph
```bash
git log --online --graph --all --decorate
```


## What to Observe

- Each commit points to a parent
- feature-a and main diverged from the same commit
- Branches are just labels, not copies of code
- HEAD points to your current branch

## Key Takeaway

If you understand the commit graph:

- Merge conflicts stop feeling random
- Rebase behaviour becomes predictable