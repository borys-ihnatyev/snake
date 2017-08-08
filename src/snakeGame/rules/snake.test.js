import { createSnake } from './snake'

describe('rules/snake', () => {

    describe('create snake', () => {

        let settings

        beforeEach(() => {
            settings = {
                size: Math.trunc(Math.random() * 100 + 1),
                position: { x: 1, y: 1 },
            }
        })

        it('should start place head into specified position', () => {
            const [ head ] = createSnake(settings)

            expect(head.position)
                .toEqual(settings.position)
        })

        it('should create snake of passed size', () => {
            const snake = createSnake(settings)

            expect(snake.length).toBe(settings.size)
        })

        it('should place snake vertical', () => {
            const snake = createSnake(settings)

            snake.forEach((x) => {
                expect(x.position.x)
                    .toBe(settings.position.x)
            })
        })

        it('should place snake parts close to each other', () => {
            const snake = createSnake(settings)

            for (let i = 0; i < snake.length - 1; i += 1) {
                expect(snake[i + 1].position.y)
                    .toEqual(snake[i].position.y + 1)
            }
        })

        it('should not have prey', () => {
            const snake = createSnake(settings)

            snake.forEach((x) => {
                expect(x.hasPrey)
                    .toBeFalsy()
            })
        })

    })

})
