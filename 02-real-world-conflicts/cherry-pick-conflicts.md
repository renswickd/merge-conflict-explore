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
