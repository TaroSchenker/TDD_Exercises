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
