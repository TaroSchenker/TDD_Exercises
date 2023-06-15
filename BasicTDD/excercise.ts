export const add = (a: number, b: number): number => {
  return a + b;
};

export const includesValue = (arr: Array<number>, val: number): boolean => {
  return arr.includes(val);
};

interface ITestObject<TKey, TValue> {
  TKey: TValue;
}
export function keyValue<T, K extends keyof T>(obj: T, key: K, val: any) {
  return obj[key] === val;
}

interface MockResponse {
  data: string;
}

interface JsonResponse {
  json(): Promise<MockResponse>;
  status: number;
}

export async function getData(url: string): Promise<JsonResponse> {
  const mockResponse = { data: "someData" };
  return new Promise((res, reject) => {
    setTimeout(() => {
      if (url) {
        res({
          json: () => Promise.resolve(mockResponse),
          status: 200,
        });
      } else {
        reject("404: Not Found");
      }
    });
  });
}

export const functionObject = {
  myFunction: () => {},
};

export function myFunction(fn: () => void) {
  fn();
}

export function divide(a: number, b: number) {
  if (a === 0 || b === 0) return "Cannot divide by zero";
  return a / b;
}

export function doAfterDelay(cb: () => void, delay: number) {
  setTimeout(() => {
    cb();
  }, delay);
}

export async function fetchData() {
  return Promise.resolve("Data");
}

export async function fetchError(){
  return Promise.reject(new Error("Error"))
}
