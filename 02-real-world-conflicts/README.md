# Real-World Merge Conflicts

Basic conflicts are simple.

Real-world conflicts happen because:
- Branches live too long
- Multiple developers modify the same areas
- History evolves significantly before merging

This section simulates real engineering workflows.

---

## Exercises

| Folder | What You Learn |
|--------|---------------|
| long-lived-branch | Why old branches become conflict-heavy |
| rebasing-conflicts | Why rebase can repeat conflicts |
| cherry-pick-conflicts | Why applying old commits causes issues |
| conflict-after-pull | Why `git pull` suddenly explodes |

---

# Compare Cherry-Pick vs Rebase vs Merge

| Operation   | Applies How?              | Conflict Pattern            |
| ----------- | ------------------------- | --------------------------- |
| Merge       | Compare 3 branches        | One conflict resolution     |
| Rebase      | Replay multiple commits   | Conflict per commit         |
| Cherry-pick | Apply one specific commit | Conflict if context changed |
