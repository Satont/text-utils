import { expect } from 'chai';
import { includesOneOf } from '../src/index';

describe('includesOneOf', function() {
  it('includesOneOf("this is test message", ["test"]) equals true', function() {
    const result = includesOneOf('this is test message', ['test'])
    expect(result).equal(true)
  })

  it('includesOneOf("this is test message", ["hello"]) equals false', function() {
    const result = includesOneOf('this is test message', ['hello'])
    expect(result).equal(false)
  })
})

