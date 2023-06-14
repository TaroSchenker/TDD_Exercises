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
