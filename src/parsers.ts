import { removeSubStrings, stringContains, stringContainsAny } from './utils'

const exampleStartDelimiter = '@snapshot'
const expectedReturnEndDelimiters = ['*/', '**/', '* @snapshot']

export function snapshotLineNumbersFor(file: string) {
  return file
    .split('\n')
    .map((line, index) => ({ line, index }))
    .filter((lineAndIndex: { line: string; index: number }) =>
      stringContains(lineAndIndex.line, exampleStartDelimiter)
    )
    .map(lineAndIndex => lineAndIndex.index)
}

export function functionCallStringFor(file: string, index: number) {
  const fileLines = file.split('\n')
  let functionCallLines = []
  index += 1
  while (
    fileLines[index] &&
    !stringContainsAny(fileLines[index], expectedReturnEndDelimiters)
  ) {
    functionCallLines.push(fileLines[index])
    index += 1
  }
  return functionCallLines
    .map(line => removeSubStrings(line, ['*']).trim())
    .filter(str => str !== '')
    .join('\n')
}

export function snapshotFunctionNameFor(file: string, index: number) {
  return functionCallStringFor(file, index).split('<')[1]
}

export default {
  snapshotFunctionNameFor,
  functionCallStringFor,
  snapshotLineNumbersFor
}
