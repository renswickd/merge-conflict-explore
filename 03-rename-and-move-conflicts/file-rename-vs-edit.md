# File Rename vs Edit Conflict

This exercise demonstrates a structural conflict:

- Branch A renames a file
- Branch B edits that same file
- Git must detect whether it was renamed or deleted

---

# Critical Concept

Git does NOT store renames explicitly.

Git sees:
- File deleted in one branch
- Similar file added in another branch

If similarity is high enough, Git assumes it was renamed.

If not, Git may treat it as delete + add, causing confusing conflicts.

---