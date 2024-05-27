let uniqKeyFlag: number = 0
const uniqKey = (): string => {
  uniqKeyFlag ++
  const _str = new Date().getTime()
  return `u-${_str}-${uniqKeyFlag}`
}
export { uniqKey }