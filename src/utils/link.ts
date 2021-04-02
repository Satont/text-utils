import tlds from 'tlds'

const regular = new RegExp(`[a-zA-Z0-9]+([a-zA-Z0-9-]+)?\\.(${tlds.join('|')})(?=\\P{L}|$)`, 'igu')

export const includes = (input: string): boolean => {
  return input.search(regular) >= 0
}

export const length = (input: string): number => {
  return (input.match(regular) || []).length
}

export const overlaps = (input: string): RegExpMatchArray => {
  return input.match(regular) || []
}
