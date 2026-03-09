# Rename and Move Conflicts (Structural Conflicts)

Until now, we worked with line-level conflicts.

In this chapter, we move to **structural conflicts**:
- Files renamed
- Files moved across directories
- Files renamed while being edited

These conflicts are different because they depend on how Git *detects* renames — not how it stores them.

---

# Critical Insight

Git does NOT store renames explicitly.

Git stores:
- Snapshots of file content

When a file appears deleted in one commit and a similar file appears added in another,
Git **guesses** that it was renamed.

This guess is based on:
- Content similarity
- Rename detection heuristics

Because of this:
- Rename detection can fail
- Merges may behave unexpectedly
- Conflicts can become confusing

---

# Why This Matters in Real Projects

Rename and move conflicts commonly happen during:

- Large refactors
- Directory restructuring
- Codebase modularization
- Monorepo reorganizations
- Framework migrations

Example scenarios:

- Dev A renames `utils.js` → `helpers.js`
- Dev B edits `utils.js`
- Merge happens
- Git must decide:
  - Was it deleted?
  - Was it renamed?
  - Should edits apply to the new name?

This is where structural conflicts emerge.

---

# What You Will Learn in This Chapter

## 1️⃣ File Rename vs Edit

You will simulate:

- Branch A renames a file
- Branch B edits the same file
- Merge both

You will observe:
- How Git detects rename
- How conflicts appear
- What happens if similarity threshold changes

---

## 2️⃣ Directory Move Conflicts

You will simulate:

- Moving a file to a new folder
- Editing it in another branch
- Merging both

You will observe:
- How Git applies changes across paths
- When it succeeds automatically
- When it fails

---

# Key Mental Model for This Chapter

Line conflicts happen because of overlapping text.

Rename conflicts happen because of:

    `Structure divergence + heuristic detection`

Understanding this makes you much more confident during large refactors.

---

# Before Starting

Ensure:
- Your working tree is clean
- You understand three-way merge
- You are comfortable resolving standard conflicts

Then proceed to:

- `file-rename-vs-edit/`