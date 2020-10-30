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

  it('withSpaces = false', function() {
    const result = link.overlaps('github.com')
    expect(result.length).equal(1)
    expect(result[0]).equal('github.co')
  })

  it('withSpaces = true', function() {
    const result = link.overlaps('github.com', { withSpaces: true })
    expect(result.length).equal(1)
    expect(result[0]).equal('github.co')
  })
})

describe('Includes confused. me', function() {
  it('withSpaces = false', function() {
    const result = link.includes('confused. me')
    expect(result).equal(false)
  })

  it('withSpaces = true', function() {
    const result = link.includes('confused. me', { withSpaces: true })
    expect(result).equal(true)
  })

  it('withSpaces = false', function() {
    const result = link.overlaps('confused. me')
    expect(result).equal(null)
  })

  it('withSpaces = true', function() {
    const result = link.overlaps('confused. me', { withSpaces: true })
    expect(result.length).equal(1)
    expect(result[0]).equal('confused. me')
  })
})

describe('Includes t.me/satont', function() {
  it('withSpaces = false', function() {
    const result = link.includes('t.me/satont')
    expect(result).equal(true)
  })

  it('withSpaces = true', function() {
    const result = link.includes('t.me/satont', { withSpaces: true })
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

