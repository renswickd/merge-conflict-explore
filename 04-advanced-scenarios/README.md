# Advanced Conflict Scenarios

So far, you have learned:

- Line-level conflicts
- Long-lived branch conflicts
- Rebase and cherry-pick conflicts
- Rename and structural conflicts

This chapter focuses on conflicts that are:

- Tool-driven
- Ecosystem-driven
- Workflow-driven

These conflicts often surprise even experienced developers.

---

# Why These Scenarios Matter

In real projects, conflicts are not limited to source code.

They frequently occur in:

- Binary files (images, PDFs, compiled artifacts)
- Lock files (package-lock.json, poetry.lock, yarn.lock)
- Generated files (dist/, build outputs)
- Submodules (nested repositories)

These conflicts are different because:

- Git cannot diff them meaningfully
- They may not be manually resolvable
- They often require team conventions
- They may require `.gitattributes` configuration

---

# What You Will Learn

## 1️⃣ Binary File Conflicts

- Why Git cannot auto-merge binary files
- What a binary conflict looks like
- Why manual resolution is often impossible
- Strategies to avoid them

---

## 2️⃣ Lock File Conflicts

- Why lock files conflict frequently
- Why blindly choosing “ours” is risky
- Why regenerating may be safer
- How package managers interact with Git

---

## 3️⃣ Generated File Conflicts

- Why committing build artifacts causes pain
- Why dist/ conflicts are noisy
- How to avoid tracking generated files
- When `.gitignore` is not enough

---

## 4️⃣ Submodule Conflicts

- Why submodules behave differently
- Why conflict markers don’t appear inside them
- How pointer conflicts work
- Why teams avoid submodules

---

# Important Mental Shift

Earlier conflicts were about:

    "Which code is correct?"

These conflicts are often about:

    "Should this file even be merged?"

Sometimes the correct answer is:

- Regenerate the file
- Rebuild dependencies
- Re-clone submodule
- Or avoid tracking it entirely

---

# Before Starting

Ensure:

- You are comfortable resolving standard conflicts
- You understand merge vs rebase
- You understand structural conflicts
