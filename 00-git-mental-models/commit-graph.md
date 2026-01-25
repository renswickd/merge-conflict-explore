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

