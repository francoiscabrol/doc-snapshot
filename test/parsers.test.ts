import fs from 'fs'
import parsers from '../src/parsers'

const stringModulePath = 'test/support/example_modules/string.ts'
const stringModuleFile = fs.readFileSync(stringModulePath, 'utf8')

describe('parsers', () => {
  describe('snapshotLineNumbersFor/1', () => {
    it('returns a list of line numbers that have @snapshot in them', () => {
      const snapshotLineNumbersFor = parsers.snapshotLineNumbersFor(
        stringModuleFile
      )
      expect(snapshotLineNumbersFor).toEqual([5, 8])
    })
  })

  describe('functionCallStringFor/2', () => {
    it('should return the string version of the snapshot function call 1', () => {
      expect(parsers.functionCallStringFor(stringModuleFile, 5)).toEqual(
        '<Title>MyTitle</Title>'
      )
    })
    it('should return the string version of the snapshot function call 2', () => {
      expect(parsers.functionCallStringFor(stringModuleFile, 8)).toEqual(
        '<Title background="blue">My blue Title</Title>'
      )
    })
  })
})
