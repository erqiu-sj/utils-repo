export const attribute = {
    real: 'data_real',
    classPrefix: "mxnet_"
}

export function returnClass(className: string) {
    return `${attribute.classPrefix}${className}`
}
