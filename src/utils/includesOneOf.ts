export default (input: string, arrayOfStrings: string[]): boolean => {
  if(!Array.isArray(arrayOfStrings)) {
    throw new Error('includesOneOf only accepts an array')
  }

  return arrayOfStrings.some(str => input.includes(str))
}