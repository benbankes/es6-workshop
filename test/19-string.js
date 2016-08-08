import test from 'ava';

// These are all super handy, and hopefully obvious...

test('Strings now have `.startsWith`', t => {
  let s = 'Hello, world';

  t.true(s.startsWith('Hell'));
});

test('Strings now have `.endsWith`', t => {
  let s = 'Hello, world';

  t.true(s.endsWith('orld'));
});

test('Strings now have `.includes`', t => {
  let s = 'Hello, world';

  t.true(s.includes('o, w'));
});

test('Strings now have `.repeat`', t => {
  let s = 'NA'.repeat(6) + ' BATMAN!';

  t.is(s, 'NANANANANANA BATMAN!');
});

// ============================================================================

// REVIEW:
// - String instances now have a bunch of new methods
//   - `.startsWith`, `.endsWith`, and `.includes`
//   - `.repeat`
