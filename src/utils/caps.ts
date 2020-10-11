export default new class Caps {
  private readonly regular = /[A-Z]/g

  private checkCapsLength(input: string) {
    return (input.match(this.regular) || []).length
  }

  percentage(input: string): number {
    const capsLength = this.checkCapsLength(input)

    return Math.ceil((100 * capsLength) / input.length)
  }

  capsed(input: string, { percentage = 50 } = {}): boolean {
    const capsLength = this.checkCapsLength(input)

    return Math.ceil(capsLength / (input.length / 100)) >= percentage
  }
}
