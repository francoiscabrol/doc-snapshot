
WORK IN PROGRESS

Inspired by the library https://github.com/MainShayne233/jsdoc-test

This library will allow you to write your the snapshot tests like:
```
/**
 * A beautiful Title
 * @snapshot
 * <Title>MyTitle</Title>
 * 
 * @snapshot
 * <Title background="blue">My blue Title</Title>
 */
 const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  background-color: ${props => props.background}
  color: palevioletred;
`;
 ```