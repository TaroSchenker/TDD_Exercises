// exercise.test.ts

import { add, includesValue, keyValue } from "./excercise";

/* 
  1. Simple function testing
  Write a test for a function called `add` that adds two numbers. 
  The function should take two arguments and return their sum. 
  Then implement the function to make the test pass.
*/

// TODO: Write your test here
describe("add", () => {
  test("should add two numbers", () => {
    expect(add(1, 1)).toBe(2);
  });
});

/* 
  2. Array manipulation testing
  Write a test for a function called `includesValue` that checks whether an array includes a value. 
  The function should take an array and a value as arguments, and return true if the value is in the array, false otherwise. 
  Then implement the function to make the test pass.
*/

// TODO: Write your test here
describe("includesValue", () => {
  test("Function should return true if the given value is present in the given array", () => {
    expect(includesValue([5, 10, 15], 15)).toBeTruthy();
  });
});
/* 
  3. Object manipulation testing
  Write a test for a function called `keyValue` that checks whether an object includes a certain key-value pair. 
  The function should take an object, a key, and a value as arguments, and return true if the key-value pair exists in the object, false otherwise. 
  Then implement the function to make the test pass.
*/


// TODO: Write your test here
describe("Object manipulation Testing", () => {
  test("Check whether an object includes a certain key value pair and returns true if key value pair exists", () => {
    expect(keyValue({ test: "target" }, "test", "target")).toBeTruthy;
    expect(keyValue({ test: "target" }, "test", "000")).toBeFalsy;
  });
});
/* 
  4. Async function testing
  Write a test for a function called `getData` that fetches data from a given URL and returns the data.
  The function should take a URL string as an argument, and return a Promise that resolves with the fetched data. 
  You may use a library such as axios for making the HTTP request.
  Then implement the function to make the test pass.
*/

// TODO: Write your test here

/* 
  5. Mocking and spy testing
  Write a test for a function called `myFunction` that calls another function `anotherFunction` with a specific argument.
  You should use jest.fn() to create a mock function for `anotherFunction`, and jest.spyOn() to make sure `myFunction` calls `anotherFunction` with the correct argument.
  Then implement the functions to make the test pass.
*/

// TODO: Write your test here

/* 
  6. Error handling testing
  Write a test for a function called `divide` that divides two numbers. 
  The function should take two arguments and return their quotient. 
  However, if the second argument is zero, the function should throw an Error with the message "Cannot divide by zero".
  Then implement the function to make the test pass.
*/

// TODO: Write your test here

/* 
  7. Callback function testing
  Write a test for a function called `doAfterDelay` that executes a callback after a delay.
  The function should take a callback function and a delay in milliseconds as arguments, and execute the callback after the delay.
  You can use jest's fake timers to test this.
  Then implement the function to make the test pass.
*/

// TODO: Write your test here

/* 
  8. Promise resolution testing
  Write a test for a function called `fetchData` that returns a Promise which resolves to a certain value.
  The function should take no arguments, and return a Promise that resolves to the string "Data".
  Then implement the function to make the test pass.
*/

// TODO: Write your test here

/* 
  9. Promise rejection testing
  Write a test for a function called `fetchError` that returns a Promise which rejects with an Error.
  The function should take no arguments, and return a Promise that rejects with an Error with the message "Error".
  Then implement the function to make the test pass.
*/

// TODO: Write your test here

/* 
  10. Event emission testing
  Write a test for a class called `EventEmitter` that can emit events and register event listeners.
  The class should have an `on` method to register an event listener, and an `emit` method to emit an event.
  You should write tests to make sure that the event listeners are called when an event is emitted.
  Then implement the class to make the test pass.
*/

// TODO: Write your test here
