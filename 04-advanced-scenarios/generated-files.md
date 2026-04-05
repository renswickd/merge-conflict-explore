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
