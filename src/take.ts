import { purry } from './purry';

/**
 * Returns the first `n` elements of `array`.
 * @param array the array
 * @param n the number of elements to take
 * @signature
 *    R.take(array, n)
 * @example
 *    R.take([1, 2, 3, 4, 3, 2, 1], 3) // => [1, 2, 3]
 * @data_first
 * @category Array
 */
export function take<T>(array: T[], n: number): T[];

/**
 * Returns the first `n` elements of `array`.
 * @param n the number of elements to take
 * @signature
 *    R.take(n)(array)
 * @example
 *    R.pipe([1, 2, 3, 4, 3, 2, 1], R.take(n)) // => [1, 2, 3]
 * @data_last
 * @category Array
 */
export function take<T>(n: number): (array: T[]) => T[];

export function take() {
  return purry(_take, arguments);
}

function _take<T>(array: T[], n: number) {
  return array.slice(0, n);
}