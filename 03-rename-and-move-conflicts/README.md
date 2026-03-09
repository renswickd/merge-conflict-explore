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