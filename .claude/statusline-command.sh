#!/usr/bin/env bash

input=$(cat)

model=$(echo "$input" | jq -r '.model.display_name // "Claude"')
cwd=$(echo "$input" | jq -r '.workspace.current_dir // .cwd // ""')
dir=$(basename "$cwd")
used=$(echo "$input" | jq -r '.context_window.used_percentage // empty')

if [ -n "$used" ]; then
  used_int=${used%.*}
  context_info=" | ctx: ${used_int}% used"
else
  context_info=""
fi

printf "\033[0;36m%s\033[0m  \033[0;33m%s\033[0m%s" "$model" "$dir" "$context_info"
