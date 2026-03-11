## webviewer-ui issue reproduction

This is a minimal project to reproduce an issues with the WebViewer UI.
The PDF files to reproduce the issue are not included in this repository, but are provided to apryse support.

To reproduce issue:

(Add Apryse license key in `index.html#L15`)  
(Add provided files to `public` folder - next to `index.html` as `file-1.pdf` and `file-2.pdf`)  
(For testing file-2 comment `index.html#L26-L27` and uncomment `index.html#L28-L29`)

1. `npm i`
2. `npm run move-static`
3. `npm start`
