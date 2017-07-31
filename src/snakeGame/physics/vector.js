import { mergeWith, map, add, divide, __ } from 'ramda'

export const vector = {
    add: (a, b) => mergeWith(add, a, b),
    div: (vector, num) => map(divide(__, num), vector)
}
