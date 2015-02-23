'use strict';

module.exports.desc = function (a, b) {
	return b.length - a.length;
};

module.exports.asc = function (a, b) {
	return a.length - b.length;
};
