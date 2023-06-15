## Jest Commands

### Organizing Tests

- `describe('name', () => {})`: Creates a block that groups together several related tests.
- `test('name', () => {})`: Defines a test case.
- `beforeEach(fn)`: A setup function that will run before each test in the `describe` block.
- `beforeAll(fn)`: A setup function that will run once before any of the tests in the `describe` block.
- `afterEach(fn)`: A teardown function that will run after each test in the `describe` block.
- `afterAll(fn)`: A teardown function that will run once after all tests in the `describe` block.

### Making Assertions

- `expect(value)`: Creates an "expectation" for a test.
- `expect(value).toBe(other)`: Checks if a value is equal to another.
- `expect(value).toEqual(other)`: Checks if a value is deeply equal to another.
- `expect(value).not.toBe(other)`: Checks if a value is not equal to another.
- `expect(array).toContain(item)`: Checks if an array contains a particular item.
- `expect(fn).toThrow()`: Checks if a function throws an error. Can also check for a specific error or error message.
- `expect(value).toBeTruthy()`: Checks if a value is truthy.
- `expect(value).toBeFalsy()`: Checks if a value is falsy.

### Mocking Functions

- `jest.fn()`: Creates a new mock function.
- `mockFn.mock.calls`: An array containing the call arguments of all calls that have been made to this mock function.
- `mockFn.mock.results`: An array containing the result (or thrown error) of each call to this function.
- `mockFn.mockReturnValue(value)`: Sets the return value of the mock function.
- `mockFn.mockImplementation(fn)`: Sets a custom implementation for the mock function.


## Jest Test Examples

### Simple Function Tests

```typescript
// add.test.ts
import { add } from './add';

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

// add.ts
export function add(a: number, b: number): number {
  return a + b;
}

// arrayObject.test.ts
import { includesValue, keyValue } from './arrayObject';

test('array includes value', () => {
  expect(includesValue([1, 2, 3], 2)).toBeTruthy();
});

test('object has key-value pair', () => {
  expect(keyValue({ a: '1', b: '2' }, 'a', '1')).toBeTruthy();
});

// arrayObject.ts
export function includesValue(array: any[], value: any): boolean {
  return array.includes(value);
}

export function keyValue(object: Record<string, any>, key: string, value: any): boolean {
  return object[key] === value;
}
// asyncFunction.test.ts
import { getData } from './asyncFunction';

test('returns data from server', async () => {
  const data = await getData('https://example.com');
  expect(data).toBeDefined();
});

// asyncFunction.ts
import axios from 'axios';

export async function getData(url: string): Promise<any> {
  const response = await axios.get(url);
  return response.data;
}

// mocking.test.ts
import { myFunction } from './myFunction';

jest.mock('./myFunction');

test('myFunction returns expected value', () => {
  myFunction.mockImplementation(() => 'mocked value');
  expect(myFunction()).toBe('mocked value');
});

// myFunction.ts
export function myFunction() {
  // actual implementation here
}
