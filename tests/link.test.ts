import { expect } from 'chai';
import { link } from '../src/index';

describe('Includes github.com', function() {
  it('Includes', function() {
    const result = link.includes('github.com')
    expect(result).equal(true)
  })

  it('overlaps', function() {
    const result = link.overlaps('github.com')
    expect(result.length).equal(1)
    expect(result[0]).equal('github.com')
  })
})

describe('Message "github.com, gitlab.com"', function() {
  const message = 'github.com, gitlab.com'

  it('withSpaces = false equals 2', function() {
    const result = link.length(message)
    expect(result).equal(2)
  })
})

describe('Message "https://meet.google.com/hoi-bmxc-zty"', function() {
  const message = 'https://meet.google.com/hoi-bmxc-zty'

  it('length', function() {
    const result = link.length(message)
    expect(result).equal(1)
  })

  it('overlaps', function() {
    const result = link.overlaps(message)
    expect(result.length).equal(1)
  })
})

describe('Message "Hi Mr.Satont"', function() {
  const message = 'Hi Mr.Satont'

  it('length', function() {
    const result = link.length(message)
    expect(result).equal(0)
  })

  it('overlaps', function() {
    const result = link.overlaps(message)
    expect(result.length).equal(0)
  })
})
