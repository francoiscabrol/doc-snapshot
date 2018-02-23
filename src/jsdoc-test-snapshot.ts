// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
import { exampleFunctionReturnValueFor } from './evaluators'
import { snapshotLineNumbersFor, snapshotFunctionNameFor } from './parsers'
// import react from 'react';
// import { shallow } from 'enzyme';
// import Enzyme from 'enzyme';
// import toJson from 'enzyme-to-json';
// import Adapter from 'enzyme-adapter-react-16';
// Enzyme.configure({ adapter: new Adapter() });
import fs from 'fs'
import path from 'path'

// Enzyme.configure({ adapter: new Adapter() });

export default function(
  filePath: string,
  options: {
    testingFunction?: (componentName: String, Component: Object) => {}
  } = {}
) {
  const fullPath = path.join(process.cwd(), filePath)
  const testingFunction = options.testingFunction || defaultTestingFunction
  const file = fs.readFileSync(filePath, 'utf8')
  snapshotLineNumbersFor(file).map(lineNumber => {
    const componentName = snapshotFunctionNameFor(file, lineNumber)
    const Component = exampleFunctionReturnValueFor(fullPath, file, lineNumber)
    testingFunction(componentName, Component)
  })
}

function defaultTestingFunction(componentName: String, Component: Object) {
  // it(`${componentName} should match its snapshot`, () => {
  //   console.log('COMPONENT', Component);
  //   const tree = shallow(Component);
  //   expect(toJson(tree)).toMatchSnapshot();
  // })
}
