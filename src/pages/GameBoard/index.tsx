import { Heading } from '@aws-amplify/ui-react';

const GameBoard = ():JSX.Element => {
  const message = 'FIRST PROTECTED ROUTE!';
  return <Heading level={1}>{message}</Heading>;
}

export default GameBoard;