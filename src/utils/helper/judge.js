export const isDesignated = (target, type) => {
    const map = {
        'json': '[object Object]',
        'object': '[object Object]',
    }
    return Object.prototype.toString.call(target) === map[type.toString().toLowerCase()]
}