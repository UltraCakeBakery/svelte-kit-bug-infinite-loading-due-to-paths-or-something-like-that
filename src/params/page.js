const reservedRouteNames = ['banana']

export function match(param)
{
    return !reservedRouteNames.includes(param)
}