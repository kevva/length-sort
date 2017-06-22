import test from 'ava';
import m from '.';

const fixture = ['foobar', 'foo', 'foobarmoo', 1234];

test('sort items ascending', t => {
	t.deepEqual(fixture.sort(m.asc), ['foo', 1234, 'foobar', 'foobarmoo']);
});

test('sort items descending', t => {
	t.deepEqual(fixture.sort(m.desc), ['foobarmoo', 'foobar', 1234, 'foo']);
});
