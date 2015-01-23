'use strict';

var lengthSort = require('./');
var test = require('ava');

test('sort items ascending', function (t) {
	var arr = ['foobar', 'foo', 'foobarmoo'];
	var expected = ['foo', 'foobar', 'foobarmoo'];
	t.assert(arr.sort(lengthSort.asc), expected);
	t.end();
});

test('sort items descending', function (t) {
	var arr = ['foobar', 'foo', 'foobarmoo'];
	var expected = ['foobarmoo', 'foobar', 'foo'];
	t.assert(arr.sort(lengthSort.asc), expected);
	t.end();
});