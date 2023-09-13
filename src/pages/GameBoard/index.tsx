import React from 'react'
import Content from 'components/Content';
import './styles.css';
import { useQuery } from '@tanstack/react-query';

const Rules = ({startGame}:{startGame:()=>void}):JSX.Element=>{

  return <section className='rules-game-section' aria-labelledby='rules-heading'>
    <h2 id="rules-heading">Rules of game</h2>
    <p  id="game-rules" >
      <ul aria-label='Rules of the game'>
        <li>You have to decrypt 5 words (3 with simple sustitution and 2 with vigenere cipher)</li>
        <li>You will have 5 minutes to complete the challenge</li>
        <li>You have to submit the answer for each decrypted word (once submitted it cant be changed)</li>
        <li>Correct answers for simple sustitution cipher gives you 1 point, vigenere cipher answers gives you 3 points</li>
        <li>Wrong or void answers will give you 0 points for that word</li>
        <li>Final result will be calculated and submitted once time has finished or once you have submitted all answers</li>
      </ul>
    </p>
    <button aria-label='Start gaming' onClick={startGame}>Start Game !</button>
  </section>
}

const Game = ({cancelGame}:{cancelGame: ()=>void}):JSX.Element=>{
  const [decryptedWords, setDecryptedWords] = React.useState([]);
  const [counter, setCounter] = React.useState(0);
  const timer = React.useRef(null);
  const { isLoading, error, data } = useQuery({
    queryKey: ['words'],
    queryFn: () =>
      fetch('https://random-word-api.herokuapp.com/word?lang=en&number=5').then(
        (res) => res.json(),
      ),
  });

  React.useEffect(() => {
    const delay = 1;
    timer.current = setInterval(() => setCounter((v) => v + 1), delay * 1000);
    return () => {
      clearInterval(timer.current);
    };
  }, []);

  React.useEffect(()=>{
    if(decryptedWords.length===0){
      setDecryptedWords(data);
    }
  },[data]);

  const submitAnswers = ()=>{
    clearInterval(timer.current);
    // TO-DO...
  }

  if (isLoading) return <div>Loading...</div>

  if (error) return <div>{`An error has occurred`}</div>

  return <section className='game-section' aria-labelledby='game-heading'>
    <h2 id="game-heading">Descrypt the words !</h2>
    <div>
      <div>Remaining Time: {counter}</div>
    </div>
    <section className='decrypted-words'>
      <>{ decryptedWords.map(word => <p>{word}</p>) }</>
    </section>
    <div className='buttons-container'>
      <button aria-label='Start gaming' onClick={cancelGame}>cancel Game</button>
      <button aria-label='Start gaming' onClick={submitAnswers}>finish Game !</button>
    </div>
  </section>
}

const GameBoard = ():JSX.Element => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const startGame = ()=>{
    setIsPlaying(true);
  }
  const cancelGame = ()=>{
    setIsPlaying(false);
  }

  return <Content>
    <section className='game-board-section' aria-labelledby='game-board-heading'>
      <h2 id="game-board-heading">Game Board !</h2>
      {
        !isPlaying ? (
          <Rules startGame={startGame} />
        ):(
          <Game cancelGame={cancelGame} />
        )
      }
    </section>
  </Content>;
}

export default GameBoard;