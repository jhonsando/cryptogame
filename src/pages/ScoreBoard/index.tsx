import { Heading } from '@aws-amplify/ui-react';

const ScoreBoard = ():JSX.Element => {
  const message = 'FIRST PROTECTED ROUTE!';
  return <Heading level={1}>{message}</Heading>;
}

export default ScoreBoard;