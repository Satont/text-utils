import { expect } from 'chai';
import { caps } from '../src/index';

describe('With string length 10', function() {
  it('QwErTyAsDf (10) equals 50', function() {
    const result = caps.percentageOf('QwErTyAsDf')
    expect(result).equal(50)
  })
})

describe('With string length 11', function() {
  it('QwErTyAsDfF (11) equals 55', function() {
    const result = caps.percentageOf('QwErTyAsDfF')
    expect(result).equal(55)
  })
})

describe('Check isCapsed with not passed percentageOf value', function() {
  it('QwErTyAsDf (10) equals true', function() {
    const result = caps.isCapsed('QwErTyAsDf')
    expect(result).equal(true)
  })

  it('qwertyasds (10) equals false', function() {
    const result = caps.isCapsed('qwertyasds')
    expect(result).equal(false)
  })
})

describe('Check isCapsed with passed percentageOf value', function() {
  it('QwErTyAsDf (10) with percentageOf 50 equals true', function() {
    const result = caps.isCapsed('QwErTyAsDf', { percentage: 50 })
    expect(result).equal(true)
  })

  it('QwErTyAsDs (10) with percentageOf 60 equals false', function() {
    const result = caps.isCapsed('QwErTyAsDs', { percentage: 60 })
    expect(result).equal(false)
  })

  it('qwertyasdt (10) with percentageOf 10 equals false', function() {
    const result = caps.isCapsed('qwertyasdt', { percentage: 10 })
    expect(result).equal(false)
  })

  it('Qwertyast (10) with percentageOf 10 equals true', function() {
    const result = caps.isCapsed('Qwertyasdt', { percentage: 10 })
    expect(result).equal(true)
  })
})

describe('Test for lwjerri', function() {
  const result = caps.isCapsed('t e s t . c o m', { percentage: 50 })
  expect(result).equal(false)
})
