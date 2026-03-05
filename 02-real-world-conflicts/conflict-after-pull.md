# Conflict After Pull (Why `git pull` Explodes)

Many developers experience this:

"I pulled from main and now I have conflicts."

But `git pull` is not magic.

`git pull` is actually:

    git fetch
    +
    git merge (or rebase)

If your local branch and remote branch both changed,
Git must merge them.

Conflicts happen when changes overlap.

---

# Goal of This Exercise

You will:

1. Simulate a remote change
2. Make local changes
3. Perform `git pull`
4. Observe the conflict
5. Understand what really happened

---