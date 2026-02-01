# Adjacent Lines Conflict

Two branches modify **different lines**, but close together.

Sometimes Git merges cleanly.
Sometimes it does not.

---

## Goal

See how Git behaves when changes are close but not identical.

---

## Step 1: Create Base Content

```bash
git checkout main
cat <<EOF > demo/file.txt
line-1
line-2
line-3
EOF

git add demo/file.txt
git commit -m "Create base lines"
```
## Step 2: Modify Line 2 (feature-a)
```bash
git checkout -b feature-a
sed -i '' 's/line-2/line-2-from-A/' demo/file.txt
git add demo/file.txt
git commit -m "Modify line 2"
```

## Step 3: Modify Line 3 (feature-b)
```bash
git checkout main
git checkout -b feature-b
sed -i '' 's/line-3/line-3-from-B/' demo/file.txt
git add demo/file.txt
git commit -m "Modify line 3"
```

## Step 4: Merge
```bash
git checkout feature-a
git merge feature-b
```

## Step 5: Inspect Result
```bash
git status
cat demo/file.txt
```