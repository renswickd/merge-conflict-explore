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

---

# Step 1: Create a Fake Binary File

We simulate a binary file using random data.

```bash
git checkout main

head -c 100 /dev/urandom > demo/image.bin
git add demo/image.bin
git commit -m "Add binary file"
```

# Step 2: Modify Binary File in Branch A
```bash
git checkout -b feature-a
head -c 120 /dev/urandom > demo/image.bin
git add demo/image.bin
git commit -m "Modify binary file in feature-a"
```

# Step 3: Modify Binary File in Branch B
```bash
git checkout main
git checkout -b feature-b
head -c 140 /dev/urandom > demo/image.bin
git add demo/image.bin
git commit -m "Modify binary file in feature-b"
```

Now both branches changed the same binary file differently.

# Step 4: Merge and Observe
```bash
git checkout feature-a
git merge feature-b
git status
```

You should see something like:
```bash
CONFLICT (content): Merge conflict in demo/image.bin
```

Now try to open the file:

```bash
cat demo/image.bin
```
You will NOT see conflict markers.

Git cannot inject them into binary data.

## What Are Your Options?

You must manually choose:

1. Keep your version:
```bash
git checkout --ours demo/image.bin
git add demo/image.bin
git commit -m "Resolve binary conflict using ours"
```

2. OR keep the other branch’s version:
```bash
git checkout --theirs demo/image.bin
git add demo/image.bin
git commit -m "Resolve binary conflict using theirs"
```
There is no merging of content.

## Why This Is Dangerous

If two developers modify the same image or compiled file:

- One change will be lost
- Manual inspection may be impossible
- Merge tools cannot help

## Professional Best Practices
- Avoid modifying same binary file concurrently
- Use file locking (e.g., Git LFS locking)
- Avoid committing build artifacts
- Store large binaries in object storage
- Use Git LFS for large media files

## Key Takeaways
- Git cannot merge binary files
- Conflict resolution is manual selection
- Binary conflicts lose information
- Team workflow matters more than Git mechanics
