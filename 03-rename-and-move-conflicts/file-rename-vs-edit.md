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

# Goal of This Exercise

You will:

1. Create a file
2. Rename it in one branch
3. Edit it in another branch
4. Merge them
5. Observe how Git handles rename detection

---

# Step 1: Create Base File

```bash
git checkout main

cat <<EOF > demo/utils.js
function calculate(a, b) {
  return a + b;
}
EOF

git add demo/utils.js
git commit -m "Add utils.js with calculate function"
```
2: Rename File in Branch A
# Step 
```bash
git checkout -b rename-utils
git mv demo/utils.js demo/helpers.js
git commit -m "Rename utils.js to helpers.js"
```
