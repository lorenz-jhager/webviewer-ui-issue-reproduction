## webviewer-ui issue reproduction

This is a minimal project to reproduce an issues with the WebViewer UI.

To reproduce issue:

(Add Apryse license key in `index.html#L15`)  

1. `npm i`
2. `npm run move-static`
3. `npm start`
4. Open in browser and wait 5s => webviewer is closed but workers (except PDFworker.js) are still running - can be observed in browser-dev-tools > memory-tab.
