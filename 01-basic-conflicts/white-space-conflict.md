# Whitespace Conflict

Whitespace changes are **invisible**, but Git treats them as real changes.

These conflicts often surprise developers.

---

## Goal

Trigger a conflict using whitespace-only changes.

---

## Step 1: Create Base File

```bash
git checkout main
cat <<EOF > demo/file-01-whitespace.txt
function test() {
  return true;
}
EOF

git add demo/file-01-whitespace.txt
git commit -m "demo 01: Whitespace - case function"

```
## Step 2: Change Indentation (feature-01-a)

```bash
git checkout -b feature-01-a
sed -i '' 's/  return/    return/' demo/file-01-whitespace.txt
git add demo/file-01-whitespace.txt
git commit -m "demo 01: Whitespace - change indentation"
```
## Step 3: Change Same Line Content (feature-01-b)

```bash
git checkout main
git checkout -b feature-01-b
sed -i '' 's/true/false/' demo/file-01-whitespace.txt
git add demo/file-01-whitespace.txt
git commit -m "demo 01: Whitespace - change return value"
```
## Step 4: Merge

```bash
git checkout feature-01-a
git merge feature-01-b
```
## Step 5: Inspect Conflict

```bash
git status
cat demo/file-01-whitespace.txt
```

## Key Takeaway
Git does not understand formatting intent.

Whitespace + content changes on the same line often result in conflicts.


---

# Why This Section

- Each conflict type is **isolated**
- Exercises are **predictable**
- Learners build intuition:
  - same line → conflict
  - different lines → maybe safe
  - whitespace → dangerous

This is **exactly** how senior devs internalise Git.

---