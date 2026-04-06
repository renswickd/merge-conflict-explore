# Generated File Conflicts (Build Artifacts & Auto-Generated Files)

Generated files are files that:

- Are produced by a tool
- Can be recreated from source
- Should not require manual editing

Examples in Python projects:

- __pycache__/
- .pyc files
- dist/
- build/
- coverage reports
- auto-generated docs
- compiled requirements
- compiled protobuf files

Generated files often cause noisy and unnecessary conflicts.

---

# Critical Insight

If a file can be regenerated,
it should usually NOT be manually merged.

The correct resolution is often:

    Delete → Regenerate → Commit

---

# Goal of This Exercise

You will:

1. Create a small Python script
2. Simulate generating build artifacts
3. Modify artifacts differently in two branches
4. Merge branches
5. Observe conflict
6. Fix properly
---

# Step 1: Create Simple Python Script

```bash
git checkout main

mkdir -p demo/python-app
cd demo/python-app

cat <<EOF > app.py
def greet(name):
    return f"Hello {name}"
EOF

git add app.py
git commit -m "Add simple Python app"
```

# Step 2: Simulate Generated Build File

Simulate a build output directory.
```bash
mkdir -p dist
cat <<EOF > dist/output.txt
Build version 1
EOF

git add dist
git commit -m "Add generated build output"
```