const regular = /[A-Z]/g

const checkCapsLength = (input: string) => {
  return (input.match(regular) || []).length
}

export const percentageOf = (input: string): number => {
  const capsLength = checkCapsLength(input)

  return Math.ceil((100 * capsLength) / input.length)
}

export const isCapsed = (input: string, { percentage = 50 } = {}): boolean => {
  const capsLength = checkCapsLength(input)

  return Math.ceil(capsLength / (input.length / 100)) >= percentage
}
