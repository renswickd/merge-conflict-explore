# Same Line Conflict

This is the **most common** and **most obvious** merge conflict.

Two branches modify the **exact same line** differently.

---

## Goal

Trigger a conflict by editing the same line on two branches.

---

## Step 1: Create Base Commit

```bash
git checkout main
echo "version=1" > demo/file.txt
git add demo/file.txt
git commit -m "Base version"
```

## Step 2: Modify Same Line in feature-a

```bash
git checkout -b feature-a
# to edit file
sed -i '' 's/version=1/version=2/' demo/file.txt
git add demo/file.txt
git commit -m "Update version to 2"
```

## Step 3: Modify Same Line in feature-b

```bash
git checkout main
git checkout -b feature-b
sed -i '' 's/version=1/version=3/' demo/file.txt
git add demo/file.txt
git commit -m "Update version to 3"
```

## Step 4: Merge and Observe

```bash
git checkout feature-a
git merge feature-b
```

## Step 5: Inspect Conflict

```bash
git status
cat demo/file.txt
```