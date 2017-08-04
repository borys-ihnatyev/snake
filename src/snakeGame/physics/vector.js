import { mergeWith, map, add, divide, __ } from 'ramda'

export const Vector = {
    add: (a, b) => mergeWith(add, a, b),
    div: (vector, num) => map(divide(__, num), vector)
}
