import _ from 'lodash'
const pathSearch = (path?: string): Record<string, any> => {
  const _path: string= path || window?.location?.href
  const _arr: string[] = _.split(_path, '?')[1].split('&')
  return _.reduce(_arr, (res: Record<string, any>, item: Record<string, any>) => {
    const _arr: string[] = _.split(item, '=')
    res[_arr[0]] = _arr[1]
    return res
  }, {})
}
export { pathSearch }