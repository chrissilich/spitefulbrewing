'use strict';
// Throws an Error if your jQuery selection is empty.
jQuery.fn.emptyError = function() {
	if (this.length === 0) {
		throw 'Nothing was selected!';
	}
	return this;
};

// Warns you in the console if your jQuery selection is empty.
jQuery.fn.emptyWarn = function() {
	if (this.length === 0) {
		console.warn('Nothing was selected!');
	}
	return this;
};