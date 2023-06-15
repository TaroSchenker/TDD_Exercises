export const add = (a: number, b: number): number => {
  return a + b;
};

export const includesValue = (arr: Array<number>, val: number): boolean => {
  return arr.includes(val);
};

interface ITestObject<TKey, TValue> {
  TKey: TValue;
}
export function keyValue<T, K extends keyof T,>(obj: T, key: K, val: any) {
  return obj[key] === val;
}
