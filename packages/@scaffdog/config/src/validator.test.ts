import test from 'ava';
import { validateConfig } from './validator';

test('valid - full', (t) => {
  const config = {
    files: ['string'],
    variables: {
      foo: 'bar',
    },
    helpers: [() => 'str', () => {}],
  };

  t.is(validateConfig(config), config);
});

test('valid - partial', (t) => {
  const config = {
    files: ['string'],
  };

  t.is(validateConfig(config), config);
});

test('invalid - empty', (t) => {
  const config = {};

  t.throws(() => {
    validateConfig(config);
  });
});

test('invalid - types', (t) => {
  const config = {
    files: null,
  };

  t.throws(() => {
    validateConfig(config);
  });
});
