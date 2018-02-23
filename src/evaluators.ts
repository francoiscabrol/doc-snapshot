import { functionCallStringFor } from './parsers'
import * as Babel from 'babel-core'

export function exampleFunctionReturnValueFor(
  modulePath: string,
  file: string,
  index: number
) {
  const functionCallString = functionCallStringFor(file, index)
  const name = 'Title'
  const jsCode =
    Babel.transform(
      `import React from 'react'; import ${name} from '${modulePath}'; ${functionCallString}`,
      {
        plugins: ['transform-react-jsx'],
        presets: ['es2015']
      }
    ).code || ''
  try {
    return eval(jsCode)
  } catch (error) {
    console.warn(error)
    throw new Error(`Failed to eval function return value: ${jsCode}`)
  }
}
