var WindowUtils = require("sdk/window/utils");
var windows = require("sdk/windows").browserWindows;
var { viewFor } = require("sdk/view/core");
let prefs = require("sdk/simple-prefs").prefs;

exports.main = function (options, callbacks) {
	if (options.loadReason == "startup") {
		if (!prefs["startup"]) return;
		for (let window of windows) {
			var chromeWindow = viewFor(window);
			if (WindowUtils.isBrowser(chromeWindow) && !chromeWindow.fullScreen) {
				chromeWindow.BrowserFullScreen();
			}
		}
	}
};

windows.on("open", function(browserWindow) {
	if (!prefs["new"]) return;
	var chromeWindow = viewFor(browserWindow);
	if (WindowUtils.isBrowser(chromeWindow) && !chromeWindow.fullScreen) {
		chromeWindow.BrowserFullScreen();
	}
});
