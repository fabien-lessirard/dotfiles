# El Mictlan Dashboard — Memory

## Project
- Git repo: `c:\Users\acodu\dev\dashboard_mictlan`
- GitHub: `fabien-lessirard/dashboard-mictlan-v1`
- Stack: React + Vite + Firebase + Tailwind
- User: Fabien

## Current State (2026-03-05)
- Current branch: `branch-v2.4.0-dev` (just started, 1 empty commit)
- Last release: v2.4.0 (merged PR #24)
- Main is up to date with v2.4.0

## Key Files
- `CLAUDE.md` — instructions Claude Code (startup, shortcuts, Codespace sync, mirror rule)
- `gemini.md` — instructions Gemini CLI (mirror of CLAUDE.md)
- `.devcontainer/devcontainer.json` — Codespace setup (13 extensions, settings)
- `.devcontainer/setup.sh` — Codespace setup script (keybindings)
- `src/prompts/release_automation_prompt.md` — release workflow
- `src/prompts/todolist.md` — pending tasks

## Workflow
- Release: follow `release_automation_prompt.md`
- `jq` n'est pas installé sur Windows — utiliser `gh run list | grep` à la place
- CRLF: toujours utiliser `--ignore-cr-at-eol` pour les diffs et `-X ignore-cr-at-eol` pour les merges
- Secrets (.env.development.local) : toujours stasher avant de changer de branche

## Codespace / Dev Container
- Extension: `ms-vscode-remote.remote-containers`
- `branch-v2.4.0-dev` a l'ancienne version de devcontainer.json (3 extensions seulement) — les nouvelles versions sont dans main
- Whenever extensions/settings/keybindings change → update devcontainer.json + setup.sh + mirror to gemini.md

## Git Patterns
- Branches de dev: `branch-vX.Y.Z-dev`
- Merge squash vers main via `gh pr merge <n> --squash --delete-branch`
- Version bump: `npm version minor --no-git-tag-version` + commit manuel + tag annoté
- Première branche créée depuis v2.2.0 alors que main était déjà à v2.3.0 → toujours vérifier la divergence avant de faire un PR
