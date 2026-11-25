# JSONForge
A local-first JSON workbench built with HTML, CSS and vanilla JavaScript.

## Features
- Parse and validate JSON; pretty-print using 2 or 4 spaces or minify.
- Import JSON files up to 2 MiB, inspect nested paths and search values or types.
- Copy or download output; no server or API keys.

## Run
Open `index.html` in a modern browser, or serve this folder with `python -m http.server 8000` and visit `http://localhost:8000`. GitHub Pages can host it directly from the repository root.

## Tests
With Node.js 18+: `node --test test.js`.
Manual smoke test: load the sample, minify, search `offline`, export and re-import the result; then enter malformed JSON and verify an error.

## Limitations
JavaScript JSON.parse follows IEEE-754 number precision; very large integers can lose precision. Duplicate object keys collapse to the last value. The explorer displays at most 500 matching nodes. Deep nesting or very large input may be slow. Clipboard access depends on browser permissions. No data is sent over the network by the application.
