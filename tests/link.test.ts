import { expect } from 'chai';
import { link } from '../src/index';

describe('Includes github.com', function() {
  it('withSpaces = false', function() {
    const result = link.includes('github.com')
    expect(result).equal(true)
  })

  it('withSpaces = true', function() {
    const result = link.includes('github.com', { withSpaces: true })
    expect(result).equal(true)
  })
})

describe('Includes github . com', function() {
  it('withSpaces = false', function() {
    const result = link.includes('github . com')
    expect(result).equal(false)
  })

  it('withSpaces = true', function() {
    const result = link.includes('github . com', { withSpaces: true })
    expect(result).equal(true)
  })
})

describe('Includes github .com', function() {
  it('withSpaces = false', function() {
    const result = link.includes('github .com')
    expect(result).equal(false)
  })

  it('withSpaces = true', function() {
    const result = link.includes('github .com', { withSpaces: true })
    expect(result).equal(true)
  })
})

describe('Includes github. com', function() {
  it('withSpaces = false', function() {
    const result = link.includes('github. com')
    expect(result).equal(false)
  })

  it('withSpaces = true', function() {
    const result = link.includes('github. com', { withSpaces: true })
    expect(result).equal(true)
  })
})

describe('Message "github.com, gitlab.com"', function() {
  const message = 'github.com, gitlab.com'

  it('withSpaces = false equals 2', function() {
    const result = link.length(message)
    expect(result).equal(2)
  })

  it('withSpaces = true equals 2', function() {
    const result = link.length(message)
    expect(result).equal(2)
  })
})

describe('Message "github . com, gitlab . com"', function() {
  const message = 'github . com, gitlab . com'

  it('withSpaces = false equals 0', function() {
    const result = link.length(message)
    expect(result).equal(0)
  })

  it('withSpaces = true equals 2', function() {
    const result = link.length(message, { withSpaces: true })
    expect(result).equal(2)
  })
})

describe('Message "github. com, gitlab. com"', function() {
  const message = 'github. com, gitlab. com'

  it('withSpaces = false equals 0', function() {
    const result = link.length(message)
    expect(result).equal(0)
  })

  it('withSpaces = true equals 2', function() {
    const result = link.length(message, { withSpaces: true })
    expect(result).equal(2)
  })
})

describe('Message "github .com, gitlab .com"', function() {
  const message = 'github .com, gitlab .com'

  it('withSpaces = false equals 0', function() {
    const result = link.length(message)
    expect(result).equal(0)
  })

  it('withSpaces = true equals 2', function() {
    const result = link.length(message, { withSpaces: true })
    expect(result).equal(2)
  })
})
