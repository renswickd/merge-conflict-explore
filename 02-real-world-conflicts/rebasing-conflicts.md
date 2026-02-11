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