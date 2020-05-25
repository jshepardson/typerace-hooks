import React, {useState} from 'react';

const App = () => {
  const SNIPPETS = [
    'Bears, beets, battlestar galactica',
    "What's Forrest Gump's password? 1Forrest1",
    'Where do programmers like to hangout? The Foo Bar'
  ];
  const INITIAL_GAME_STATE = { victory: false, startTime: null, endTime: null}
  const [snippet, setSnippet] = useState('');
  const [userText, setUserText] = useState('');
  const [gameState, setGamestate] = useState(INITIAL_GAME_STATE);
  const updateUserText = event => {
    setUserText(event.target.value);

    if (event.target.value === snippet) {
      setGamestate({
        ...gameState,
        victory: true,
        endTime: new Date().getTime() - gameState.startTime
      });
    }
    console.log('current userText', userText);
    }
  
    const chooseSnippet = snippetIndex => () => {
      console.log('setSnippet', snippetIndex);
      setSnippet(SNIPPETS[snippetIndex]);
    setGamestate({...gameState, startTime: new Date().getTime() });
    };

    return (
    <div>
      <h2>Type Race</h2>
      <hr />
      <h3>Snippet</h3>
      {snippet}
    <h4>{gameState.victory ? `Done! 🎉 Time: ${gameState.endTime}ms` : null}</h4>
      <input value={userText} onChange={updateUserText} />
      <hr />
      {
        SNIPPETS.map((SNIPPET, index) => (
          <button onClick={chooseSnippet(index)} key={index}>
            {SNIPPET.substr(0,10)}...
          </button>
        ))
      }
    </div>
  )
}

export default App;
