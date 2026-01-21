# Git Mental Models (Foundation for Merge Conflicts)

This section builds the **mental models** required to deeply understand
**why Git merge conflicts happen** and **how Git decides what is a conflict**.

> This is NOT a beginner Git tutorial.  
> It assumes you already know `clone`, `add`, `commit`, and `push`.

If you’ve ever wondered:
- *Why did Git create a conflict here?*
- *Why did rebase cause the same conflict multiple times?*
- *Why does resolving a conflict sometimes feel random?*

This folder answers those questions.

---

## Why Mental Models Matter

Most developers try to **memorise commands**.

Experienced developers:
- Understand **Git’s internal model**
- Predict conflicts *before* they happen
- Resolve conflicts with confidence, not trial and error

This section focuses on **how Git thinks**.

---

## Core Concepts Covered

### 1. Git Is a Graph, Not a Folder
- Git tracks **commits**, not files
- Each commit points to a parent
- Branches are just pointers

Understanding this explains:
- Why merge bases matter
- Why history shape affects conflicts

📄 `commit-graph.md`

---

### 2. Three-Way Merge (The Heart of Conflicts)
When Git merges two branches, it compares:
- **Branch A**
- **Branch B**
- **Their common ancestor (merge base)**

Conflicts occur when Git cannot safely combine changes.

📄 `three-way-merge.md`

---

### 3. The Index (Staging Area) vs Working Tree
Git has **three states**, not two:
- HEAD (last commit)
- Index (staging area)
- Working directory

Understanding this explains:
- Why conflicted files look “half-staged”
- Why `--ours` and `--theirs` work

📄 `index-vs-working-tree.md`

---

## What This Enables Later

Once you understand these mental models, you will:
- Understand conflict markers instantly
- Know when to merge vs rebase
- Avoid unnecessary conflicts
- Debug “weird” Git behaviour confidently

---

For the reasons above, move to `01-basic-conflicts/` only after this makes sense.
