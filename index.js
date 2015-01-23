'use strict';

/**
 * Sort an array of strings by length
 *
 * @param {String} a
 * @param {String} b
 * @api public
 */

module.exports.desc = function (a, b) {
	return b.length - a.length;
};

module.exports.asc = function (a, b) {
	return a.length - b.length;
};
