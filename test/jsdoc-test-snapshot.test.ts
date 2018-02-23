import jsdoctest from '../src/jsdoc-test-snapshot'

const modulePath = 'test/support/example_modules/string.ts'

describe('jsdoctest/2', () => {
  it('should works', () => {
    jsdoctest(modulePath)
  })
})
