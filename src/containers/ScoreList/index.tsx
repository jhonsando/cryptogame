import React from 'react';
import ScoreTag from "components/ScoreTag";
import { API } from "aws-amplify";
import { listScoreBoards } from "graphql/queries";
import './styles.css';

const ScoreList = ():JSX.Element => {
    
    const [scores, setScores] = React.useState([]);
    const fetchResults = React.useCallback(async ()=>{
         const apiData = (await API.graphql({ query: listScoreBoards,
        authMode: 'API_KEY' })) as { data: any; errors: any[] };;
        const scoresFromApi = apiData.data.listScoreBoards.items;
        setScores(scoresFromApi); 
    },[]); 
    React.useEffect(()=>{
        fetchResults();
    },[])
    return (<ol className="score-list-container">
        { scores.map( (score: { username: String; score: String; }, index: any) => 
            <li key={`${score.username}_${index}`} >
                <ScoreTag username={score.username} score={score.score} />
            </li>
        )}    
        </ol>
    );
}

export default ScoreList;