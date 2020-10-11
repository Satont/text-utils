import { expect } from 'chai';
import { caps } from '../src/index';

describe('With string length 10', function() {
  it('QwErTyAsDf (10) equals 50', function() {
    const result = caps.percentage('QwErTyAsDf')
    expect(result).equal(50)
  })
})

describe('With string length 11', function() {
  it('QwErTyAsDfF (11) equals 55', function() {
    const result = caps.percentage('QwErTyAsDfF')
    expect(result).equal(55)
  })
})

describe('Check capsed with not passed percentage value', function() {
  it('QwErTyAsDf (10) equals true', function() {
    const result = caps.capsed('QwErTyAsDf')
    expect(result).equal(true)
  })

  it('qwertyasds (10) equals false', function() {
    const result = caps.capsed('qwertyasds')
    expect(result).equal(false)
  })
})

describe('Check capsed with passed percentage value', function() {
  it('QwErTyAsDf (10) with percentage 50 equals true', function() {
    const result = caps.capsed('QwErTyAsDf', { percentage: 50 })
    expect(result).equal(true)
  })

  it('QwErTyAsDs (10) with percentage 60 equals false', function() {
    const result = caps.capsed('QwErTyAsDs', { percentage: 60 })
    expect(result).equal(false)
  })

  it('qwertyasdt (10) with percentage 10 equals false', function() {
    const result = caps.capsed('qwertyasdt', { percentage: 10 })
    expect(result).equal(false)
  })

  it('Qwertyast (10) with percentage 10 equals true', function() {
    const result = caps.capsed('Qwertyasdt', { percentage: 10 })
    expect(result).equal(true)
  })
})