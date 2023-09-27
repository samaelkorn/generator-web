export type CreateDecoratorActionAsync<T> = (self: T, originalMethod: Function, ...args: any[]) => Promise<void> | void
export type CreateDecoratorAction<T> = (self: T, originalMethod: Function, ...args: any[]) => void

export function createDecoratorAsync<T = any>(action: CreateDecoratorActionAsync<T>) {
    return (...arg: [T, string, PropertyDescriptor]) => {
        const [, , descriptor] = arg
        const originalMethod = descriptor.value
        descriptor.value = async function (...args: any[]) {
            const _this = this as T
            await action(_this, originalMethod, ...args)
        }
    }
}
export function createDecorator<T = any>(action: CreateDecoratorAction<T>) {
    return (...arg: [T, string, PropertyDescriptor]) => {
        const [, , descriptor] = arg
        const originalMethod = descriptor.value
        descriptor.value = function (...args: any[]) {
            const _this = this as T
            return action(_this, originalMethod, ...args)
        }
    }
}