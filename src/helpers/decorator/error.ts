import { createDecoratorAsync } from "./create"

export const error = (title?: string, desc?: string) =>
    createDecoratorAsync(async (self, method, ...args) => {
        try {
            return await method.call(self, ...args)
        } catch (error) {
            console.log(title ?? "error", desc ?? "error", error)
        }
    })