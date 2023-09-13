import './styles.css';

const ScoreTag = ({username, score}:{username:String, score:String}):JSX.Element => {
    return <div className='score-tag-container'>
        <section className='score-tag-section' aria-labelledby={`score-tag-heading-${username}`}>
            <h3 className='username-heading' id={`score-tag-heading-${username}`} >Username</h3>
            <p>{username}</p>
        </section>
        <section className='score-tag-section'  aria-labelledby={`score-tag-heading-score-${username}`}>
            <h3 className='score-heading'  id={`score-tag-heading-score-${username}`}>Score</h3>
            <p>{score}</p>
        </section>
    </div>
}

export default ScoreTag;