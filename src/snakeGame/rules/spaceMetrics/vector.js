import { __, add, divide, map, mergeWith } from 'ramda'

export const Vector = {
    add: (a, b) => mergeWith(add, a, b),
    div: (vector, num) => map(divide(__, num), vector)
}
