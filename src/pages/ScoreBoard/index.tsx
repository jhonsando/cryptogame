import React from 'react';
import ScoreTag from 'components/ScoreTag';
import Content from 'components/Content';
import ScoreList from 'containers/ScoreList';

import { API } from 'aws-amplify';
import { getScoreBoard } from 'graphql/queries';
import "./styles.css";
import { useAuthenticator } from '@aws-amplify/ui-react';

const ScoreBoard = ():JSX.Element => {
  const [userScore, setUserScore] = React.useState(null);
  const { user } = useAuthenticator((context) => [context.user,]);

  const fetchUserScore = React.useCallback(async ()=>{
    const apiData = (await API.graphql({ query: getScoreBoard, 
      variables: { id: "testuser" }, authMode: 'API_KEY' })) as { data: any; errors: any[] };
      const userScoreFromApi = apiData.data.getScoreBoard;
      setUserScore(userScoreFromApi)
  },[]);

  React.useEffect(()=>{
    fetchUserScore();
  },[])

  return <Content>
    <section className='score-board-container' aria-labelledby="score-heading">
      <h2 id="score-heading" role='heading'>Score Board !</h2>
      <section className='score-section' aria-labelledby="user-score-heading">
        <h2 id="user-score-heading" className="score-heading">Your Score</h2>
        <ScoreTag username={!!userScore ? userScore.username: user.username} score={!!userScore ? userScore.score: "0"} />
      </section>
      <section className='score-section' aria-labelledby="list-score-heading">
        <h2 id="list-score-heading" className="score-heading">Most higher Scores!</h2>
        <ScoreList />
      </section>
    </section>
  </Content>
}

export default ScoreBoard;