export default function includesOneOf(input: string, arrayOfStrings: string[]): boolean {
  return arrayOfStrings.some(str => input.includes(str))
}
