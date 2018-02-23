import jsdoctest from '../src/jsdoc-test-snapshot'

const modulePath = 'test/support/example_modules/string.ts'

describe('build', () => {
  it('should work', () => {
    jsdoctest(modulePath)
  })
})
