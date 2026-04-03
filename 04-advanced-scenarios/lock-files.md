# Lock File Conflicts (Python Projects)

Lock files record exact dependency versions.

Examples in Python ecosystems:

- poetry.lock
- Pipfile.lock
- uv.lock
- requirements.txt (compiled)
- pip-tools generated requirements

They exist to guarantee reproducible installs.

But they conflict frequently.

---

# Why Lock Files Conflict Often

Lock files:

- Contain pinned versions
- Include transitive dependencies
- Change when ANY dependency changes
- Are usually machine-generated

Two developers adding different packages
will often cause large diffs.

Git sees overlapping changes → conflict.

---

# Critical Insight

Lock files should NOT be manually edited.

They should be regenerated.

---

# Goal of This Exercise

You will:

1. Create a minimal Python project
2. Generate a lock file
3. Add different dependencies in two branches
4. Merge them
5. See conflict
6. Resolve correctly by regenerating

---
