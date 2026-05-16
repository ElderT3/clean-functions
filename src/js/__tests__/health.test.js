import getHealthStatus from '../health';

test('healthy', () => {
  expect(getHealthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
});

test('wounded', () => {
  expect(getHealthStatus({ name: 'Маг', health: 40 })).toBe('wounded');
});

test('boundary wounded', () => {
  expect(getHealthStatus({ name: 'Маг', health: 15 })).toBe('wounded');
});

test('critical', () => {
  expect(getHealthStatus({ name: 'Маг', health: 10 })).toBe('critical');
});