const checkCapsLength = (input: string) => {
  let capsLength = 0
  input = input.replace(/\s/g, '')
  for (let i = 0; i < input.length; i++) {
    if (input.charAt(i) == input.charAt(i).toLocaleUpperCase() && isNaN(parseInt(input.charAt(i)))) {
      capsLength++
    }
  }

  return capsLength
}

export const percentageOf = (input: string): number => {
  const capsLength = checkCapsLength(input)

  return Math.ceil((100 * capsLength) / input.length)
}

export const isCapsed = (input: string, { percentage = 50 } = {}): boolean => {
  const capsLength = checkCapsLength(input)

  return Math.ceil(capsLength / (input.length / 100)) >= percentage
}
