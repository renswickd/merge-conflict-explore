# Three-Way Merge (How Git Decides What Conflicts)

A merge is NOT:
> “Take my branch and apply the other one”

A merge IS:
> “Compare two branches relative to their common ancestor”

That comparison is called a **three-way merge**.

---

## What Git Compares (Minimal Theory)

Git compares:
1. Merge base (common ancestor)
2. Current branch (HEAD)
3. Branch being merged

If Git cannot safely combine changes, it stops.

---

## Goal of This Exercise

You will:
- Recreate a classic three-way merge
- Predict whether a conflict will occur
- Verify your prediction using Git

---

## Step 1: Create a Known Base Commit

```bash
git checkout main
echo "Shared base" > demo/file.txt
git add demo/file.txt
git commit -m "Create shared base"
```
This commit will become the merge base.

## Step 2: Create feature-a from main
```bash

git checkout -b feature-a
echo "Change from feature A" >> demo/file.txt
git add demo/file.txt
git commit -m "Feature A change"
```

## Step 3: Create feature-b from main
```bash

git checkout main
git checkout -b feature-b
echo "Change from feature B" >> demo/file.txt
git add demo/file.txt
git commit -m "Feature B change"
```

At this point:

Both branches share the same base

Both changed the same file differently

## Step 4: Visualize Before Merging
```bash
git log --oneline --graph --all --decorate
```

Before merging, pause and predict:

Will Git be able to auto-merge? - Why or why not?

## Step 5: Perform the Merge
```bash

git checkout feature-a
git merge feature-b
```
## Step 6: Inspect the Conflict

```bash

git status
```
Open the file:
```bash
cat demo/file.txt
```

You should see conflict markers.

Why Git Stopped (Critical Insight)
Git saw:

- Base: Shared base

- feature-a: added line A

- feature-b: added line B

Git could not decide:

Which change should come first?

Whether both should exist?

So it asked you.

Key Rule to Remember

`If both branches modify the same region relative to the merge base, a conflict is likely.`