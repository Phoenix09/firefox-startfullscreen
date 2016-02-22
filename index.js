var WindowUtils = require("sdk/window/utils");
var windows = require("sdk/windows").browserWindows;

windows.on("open", function() {
	var window = WindowUtils.getMostRecentBrowserWindow()
	if (WindowUtils.isBrowser(window) && !window.fullScreen) {
		window.BrowserFullScreen();
	}
});
