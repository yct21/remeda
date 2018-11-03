import { purry } from './purry'
import { Pred } from './_types'


/**
 * Implement `if/else, if/else, ...` logic.
 *
 * @param value The initial value
 * @param conditionBranches A list of [predicate, transformer]
 * @param defaultValue The default value
 * @signature R.cond(data, branch1, branch2, branch3, default)
 */
export function cond<T, K>(
  value: T,
  ...branches: Array<[Pred<T, boolean>, (input: T) => K]>
): K

export function cond<T, K>(
  ...branches: Array<[Pred<T, boolean>, (input: T) => K]>
): (value: T) => K;

export function cond() {
  return purry(_cond, arguments)
};

function _cond<T, K>(
  value: T,
  ...branches: Array<[Pred<T, boolean>, (input: T) => K]>
): K {
  let branchIndex = 0
  while (branchIndex < branches.length) {
    let branch = branches[branchIndex]
    if (branch[0](value)) {
      return branch[1](value)
    }
  }

  throw new Error('No branch hit')
}
