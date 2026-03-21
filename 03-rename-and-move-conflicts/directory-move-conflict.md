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
# Real-World Example

Imagine:

    - Dev A:
        - Moves all files into `src/`
    - Dev B:
        - Adds features to those same files

If done simultaneously, merge can become painful.

---

# Goal of This Exercise

You will:

1. Create a file in a flat structure
2. Move it into a new directory on one branch
3. Edit the original file on another branch
4. Merge both branches
5. Observe Git’s behavior

---

# Step 1: Create Base Project Structure

```bash
git checkout main

mkdir -p demo
cat <<EOF > demo/logger.js
function log(message) {
  console.log(message);
}
EOF

git add demo/logger.js
git commit -m "Add logger.js in demo root"
```

# Step 2: Branch A – Move File Into New Directory

Simulate project restructuring.

```bash
git checkout -b restructure-folders

mkdir -p demo/utils
git mv demo/logger.js demo/utils/logger.js
git commit -m "Move logger.js into utils directory"
```
No content changes, just move.

# Step 3: Branch B – Modify File in Original Location

```bash
git checkout main
git checkout -b improve-logger
```
Modify original file:

```bash
cat <<EOF > demo/logger.js
function log(message) {
  const timestamp = new Date().toISOString();
  console.log(timestamp + ": " + message);
}
EOF

git add demo/logger.js
git commit -m "Add timestamp to logger"
```

Now we have divergence:

- restructure-folders → file moved
- improve-logger → file modified
- Both branched from same base

# Step 4: Visualize Before Merge

```bash
git log --oneline --graph --all --decorate
```

Pause and predict:

- Will Git detect the move?
- Will it apply the content change to the new path?
- Will there be a conflict?


# Step 5: Merge Restructure Into Improve
```bash
git checkout improve-logger
git merge restructure-folders
```

# Step 6: Inspect the Result

```bash
git status
ls demo/
ls demo/utils/
cat demo/utils/logger.js
```
---

# What Likely Happened

If rename detection succeeds:
- Git detects logger.js was moved
- Applies timestamp change to demo/utils/logger.js
- No major conflict
---

# If rename detection fails:
- You may see delete/modify conflict
- Git may ask you to resolve path manually
- Why This Usually Works

Because:
- File content similarity is high
- Only structure changed
- Content change was small
- Git similarity threshold (~50%) is enough.



