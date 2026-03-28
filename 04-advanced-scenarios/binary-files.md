# Binary File Conflicts (When Git Cannot Help You)

Git is very good at merging text, but NOT good at merging binary files.

Binary files include:
- Images (.png, .jpg)
- PDFs
- Compiled files
- Executables
- Zip archives
- Some proprietary formats

When conflicts occur in binary files, Git cannot insert conflict markers.

It simply says:

    `CONFLICT (content): Merge conflict in <file>`

And stops.

---

# Why This Happens

Git merges files by comparing text lines.

Binary files:
- Do not have line structure
- Cannot be merged meaningfully
- Cannot show inline conflict markers

Git treats them as opaque blobs (binary large objects).

---

# Goal of This Exercise

You will:

1. Create a binary file
2. Modify it differently in two branches
3. Merge branches
4. Observe how Git handles the conflict