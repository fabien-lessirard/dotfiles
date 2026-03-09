# Plan: Get Dev Container Running

## Context
Docker is running. The devcontainer.json has a base image. setup.sh is simplified.
But the dev container still fails with exit code 1 before setup.sh even runs.
The error is likely the container image failing to pull or start.

## Steps
1. Pull the image manually to confirm it works: `docker pull mcr.microsoft.com/devcontainers/typescript-node:1-24-trixie`
2. If pull fails — switch to a simpler/smaller image like `node:24`
3. Click **Retry** in VSCode after any image change
4. If it still fails — check full Dev Containers output log for the actual error line

## Files to modify if needed
- `.devcontainer/devcontainer.json` — change `image` field
- `.devcontainer/setup.sh` — already simplified, leave as-is

## Verification
- Container starts and bottom-left of VSCode shows `[Dev Container]`
- Terminal inside VSCode runs `node -v` successfully
