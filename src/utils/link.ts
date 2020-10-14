import tlds from 'tlds'

type LinksOptions = {
  withSpaces?: boolean,
}

const regulars = [
  new RegExp(`(www)? ??\\.? ?[a-zA-Z0-9]+([a-zA-Z0-9-]+) ??\\. ?(${tlds.join('|')})(?=\\P{L}|$)`, 'igu'),
  new RegExp(`[a-zA-Z0-9]+([a-zA-Z0-9-]+)?\\.(${tlds.join('|')})(?=\\P{L}|$)`, 'igu'),
]

export const includes = (input: string, { withSpaces = false } = {} as LinksOptions): boolean => {
  return input.search(regulars[withSpaces ? 0 : 1]) >= 0
}

export const length = (input: string, { withSpaces = false } = {} as LinksOptions): number => {
  return (input.match(regulars[withSpaces ? 0 : 1]) || []).length
}
