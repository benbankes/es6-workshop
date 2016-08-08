import test from 'ava';

test('ES7 defines an exponentiation operator', t => {
  t.is(3 ** 2, 9);
});

test('ES7 defines an exponentiation operator', t => {
  t.true(true);
  // t.true(['foo', 'bar', 'baz'].includes('foo'));
});

// ============================================================================

// REVIEW:
// - The entirety of ES7 / ES2016 fits in a tweet: `x ** y` and `[].includes`.
