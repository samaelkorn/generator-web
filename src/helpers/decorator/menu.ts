import { createDecorator } from "./create"

export const menu = () =>
    createDecorator((self, method, ...args) => {
        const result = method.apply(self, ...args)
        return [...result, 'test2']
    })