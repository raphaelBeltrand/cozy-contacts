#!/bin/bash

target="build/services/sync-index-displayName/contacts.js"
firstChar=$(head -c 1 $target)

chmod +x $target
if [[ $firstChar != \#* ]]; then
  sed -i '' '1i\
  #!/usr/bin/env node
  ' $target
fi
cozy-run-dev -m manifest.webapp $target