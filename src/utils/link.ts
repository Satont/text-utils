import tlds from 'tlds'

type LinksOptions = {
  withSpaces?: boolean,
}

const regularSybols = `[а-яa-z0-9-ё]`
const regulars = [
  new RegExp(`${regularSybols}+\\s*\\.\\s*(${tlds.join('|')})`, 'igu'),
  new RegExp(`${regularSybols}+\\.(${tlds.join('|')})`, 'igu'),
]

export const includes = (input: string, { withSpaces = false } = {} as LinksOptions): boolean => {
  return input.search(regulars[withSpaces ? 0 : 1]) >= 0
}

export const length = (input: string, { withSpaces = false } = {} as LinksOptions): number => {
  return (input.match(regulars[withSpaces ? 0 : 1]) || []).length
}
