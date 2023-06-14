// exercise.test.ts

import { add } from "./excercise"

/* 
  1. Simple function testing
  Write a test for a function called `add` that adds two numbers. 
  The function should take two arguments and return their sum. 
  Then implement the function to make the test pass.
*/

// TODO: Write your test here
describe('add', () => {
    test('should add two numbers', () => {
        expect(add(1, 1)).toBe(2)
    })
})

/* 
  2. Array manipulation testing
  Write a test for a function called `includesValue` that checks whether an array includes a value. 
  The function should take an array and a value as arguments, and return true if the value is in the array, false otherwise. 
  Then implement the function to make the test pass.
*/

// TODO: Write your test here

/* 
  3. Object manipulation testing
  Write a test for a function called `keyValue` that checks whether an object includes a certain key-value pair. 
  The function should take an object, a key, and a value as arguments, and return true if the key-value pair exists in the object, false otherwise. 
  Then implement the function to make the test pass.
*/

// TODO: Write your test here

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
