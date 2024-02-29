// ==UserScript==
// @name     YouTube UI update revert
// @description	Reverts the YouTube UI update by disabling an experiment
// @match	*://*.youtube.com/*
// @version  1
// @grant    none
// ==/UserScript==

// NOTE: the 'yt' object is only accessible when using 'unsafeWindow'
unsafeWindow.yt.config_.EXPERIMENT_FLAGS.kevlar_watch_grid = false;
