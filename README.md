## webviewer-ui issue reproduction

This is a minimal project to reproduce two issues with the WebViewer UI:

- Issue 1 [#1101](https://github.com/ApryseSDK/webviewer-ui/issues/1101): Viewer crashes when it's resized to a narrow width, and the UI has some elements that are 'disabled' (via [disableElements](https://sdk.apryse.com/api/web/UI.html#.disableElements)).
- Issue 2 [#1102](https://github.com/ApryseSDK/webviewer-ui/issues/1102): Divider can not be enabled / disabled analog to other UI elements.

To reproduce issue:

(Add Apryse license key in index.html#L15)

1. `npm i`
2. `npm run move-static`
3. `npm start`
4. Open in browser http://localhost:8100
5. Change Tool Mode to Pan
6. => Issue 2: The dividers are still visible!
7. Resize the window to a narrow width
8. => Issue 1: The viewer crashes with errors in the console!
