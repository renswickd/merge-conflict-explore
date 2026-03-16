# Directory Move Conflict (Structural Refactor)

This exercise simulates a common real-world scenario:

- Branch A restructures the project and moves files into new folders
- Branch B modifies one of those files
- Git must decide how to combine structure + content changes

---

# Critical Concept

Moving a file to another directory is treated the same as renaming.

Git sees:
- File deleted from old path
- Similar file added at new path

If similarity is high enough, Git assumes it was moved.
If not, Git may treat it as delete + add.

---

# Goal of This Exercise

You will:

1. Create a file in a flat structure
2. Move it into a new directory on one branch
3. Edit the original file on another branch
4. Merge both branches
5. Observe Git’s behavior

---