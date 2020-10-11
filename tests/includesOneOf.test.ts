import { expect } from 'chai';
import { includesOneOf } from '../src/index';

describe('includesOneOf("this is test message", ["test"]) should equals true', function() {
  it('withSpaces = false', function() {
    const result = includesOneOf('this is test message', ['test'])
    expect(result).equal(true)
  })
})
