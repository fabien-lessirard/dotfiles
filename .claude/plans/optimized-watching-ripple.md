# Plan: Improve release prompt + CLAUDE.md startup sync check

## Changes to make

### 1. release_automation_prompt.md — 3 fixes acceptés

**Fix 1 — `jq` absent sur Windows :**
Remplacer tous les appels `jq` dans les étapes de polling par `gh run list | grep` natif.

**Fix 2 — Working tree déjà propre :**
Au début de l'étape 2, vérifier si le working tree est propre (`git status --short`). Si propre, sauter les étapes 2-5 (commit/push) et aller directement au check de PR existant.

**Fix 5 — Merger main dans la branche avant le PR :**
Ajouter une nouvelle étape avant le push/PR : vérifier si la branche a divergé de main (`git log main..HEAD` et `git log HEAD..main`). Si main a des commits que la branche n'a pas, merger main dans la branche avec `git merge main -X ignore-cr-at-eol` et résoudre les conflits avant de continuer.

### 2. CLAUDE.md — Nouvelle règle de startup

Ajouter une section **Startup Sync** :
> Au début de chaque session :
> 1. Vérifier si le remote main est plus récent que le local : `git fetch origin main && git log main..origin/main --oneline`
> 2. Si oui → mettre à jour le local : `git checkout main && git pull origin main`
> 3. Si on était sur une branche → y retourner et merger main : `git checkout <branche> && git merge main -X ignore-cr-at-eol`
> 4. Stasher `.env.development.local` si nécessaire avant tout checkout

### 3. Ajouter .env.development.local au .gitignore

`.env.development.local` contient des secrets et ne devrait pas être tracké. Plutôt que de stasher à chaque checkout :
1. Ajouter `.env.development.local` dans `.gitignore`
2. Le désindexer : `git rm --cached .env.development.local`

Cela élimine le besoin de stasher dans la règle startup et dans le release prompt.

### 4. gemini.md — Mirror de CLAUDE.md

Répercuter la même règle Startup Sync dans `gemini.md`.

## Fichiers à modifier
- `src/prompts/release_automation_prompt.md`
- `CLAUDE.md`
- `gemini.md`
- `.gitignore`
