import { createDecorator } from "./create"

export const filterKey = (fields: string[]) =>
    createDecorator((self, method, ...args) => {
        const result = method.apply(self, ...args)
        if (!Array.isArray(result)) {
            return result
        }
        return result.map((item: any) => {
            const copy = structuredClone(item)
            fields.forEach(field => {
                delete copy[field]
            })
            return item
        })
    })