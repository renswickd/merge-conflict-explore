# Why this Repo?
A hands-on conflict lab sessions for intermediate developers to understand Git merges, rebases, and conflict resolution.
> This is NOT a beginner Git tutorial. It assumes you already know `clone`, `add`, `commit`, and `push`.

## Repository Structure
```
merge-conflict-explore/
│
├── README.md
│
├── 00-git-mental-models/
│   ├── README.md
│   ├── commit-graph.md
│   ├── three-way-merge.md
│   └── index-vs-working-tree.md
│
├── 01-basic-conflicts/
│   ├── README.md
│   ├── same-line-conflict/
│   ├── adjacent-lines-conflict/
│   └── whitespace-conflict/
│
├── 02-real-world-conflicts/
│   ├── README.md
│   ├── long-lived-branch/
│   ├── rebasing-conflicts/
│   ├── cherry-pick-conflicts/
│   └── conflict-after-pull/
│
├── 03-rename-and-move-conflicts/
│   ├── README.md
│   ├── file-rename-vs-edit/
│   └── directory-move-conflict/
│
├── 04-advanced-scenarios/
│   ├── README.md
│   ├── binary-files/
│   ├── lock-files/
│   ├── generated-files/
│   └── submodule-conflicts/
│
├── 05-resolution-strategies/
│   ├── README.md
│   ├── manual-resolution/
│   ├── ours-theirs/
│   ├── rerere/
│   └── merge-tools/
│
├── 06-team-workflows/
│   ├── README.md
│   ├── gitflow-conflicts/
│   ├── trunk-based-conflicts/
│   └── monorepo-conflicts/
│
├── scripts/
│   ├── reset-scenario.sh
│   └── create-conflict.sh
│
└── blog-outline/
│   └── series-outline.md
├── demo/
│   ├── demo-files
```
