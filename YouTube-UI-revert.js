// ==UserScript==
// @name     YouTube UI update revert
// @description	Reverts the YouTube UI update by disabling an experiment
// @namespace	https://github.com/Wolfyxon/YouTube-UI-revert/
// @downloadURL	https://github.com/Wolfyxon/YouTube-UI-revert/raw/main/YouTube-UI-revert.js
// @updateURL	https://github.com/Wolfyxon/YouTube-UI-revert/raw/main/YouTube-UI-revert.js
// @license LGPL-2.1
// @match	*://*.youtube.com/*
// @version  1
// @grant    none
// ==/UserScript==

// NOTE: the 'yt' object is only accessible when using 'unsafeWindow'
unsafeWindow.yt.config_.EXPERIMENT_FLAGS.kevlar_watch_grid = false;
