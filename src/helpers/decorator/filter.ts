import { createDecorator } from "./create"

export const filterKey = (fields: string[]) =>
    createDecorator((self, method, ...args) => {
        const result = method.apply(self, ...args)
        if (!Array.isArray(result)) {
            return result
        }
        return result.map((item: any) => {
            fields.forEach(field => {
                delete item[field]
            })
            return item
        })
    })