import tlds from 'tlds'

type LinksOptions = {
  withSpaces?: boolean,
}

export default new class Links {
  private readonly regulars = [
    new RegExp(`(www)? ??\\.? ?[a-zA-Z0-9]+([a-zA-Z0-9-]+) ??\\. ?(${tlds.join('|')})(?=\\P{L}|$)`, 'igu'),
    new RegExp(`[a-zA-Z0-9]+([a-zA-Z0-9-]+)?\\.(${tlds.join('|')})(?=\\P{L}|$)`, 'igu'),
  ]

  includes(input: string, { withSpaces = false } = {} as LinksOptions): boolean {
    return input.search(this.regulars[withSpaces ? 0 : 1]) >= 0
  }

  length(input: string, { withSpaces = false } = {} as LinksOptions): number {
    return (input.match(this.regulars[withSpaces ? 0 : 1]) || []).length
  }
}
