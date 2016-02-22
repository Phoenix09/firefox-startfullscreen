var WindowUtils = require("sdk/window/utils");
var windows = require("sdk/windows").browserWindows;
var { viewFor } = require("sdk/view/core");

windows.on("open", function(browserWindow) {
	var chromeWindow = viewFor(browserWindow);
	if (WindowUtils.isBrowser(chromeWindow) && !chromeWindow.fullScreen) {
		chromeWindow.BrowserFullScreen();
	}
});
