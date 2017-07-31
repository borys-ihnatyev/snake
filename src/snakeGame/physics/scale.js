import { map } from 'ramda'

export const toPx = (x) => x + 'px'
export const scaleToPx = (scale, vector) => map((x) => toPx(scale * x), vector)