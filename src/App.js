import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [quoteInfo, setQuoteInfo] = useState({})

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    fetch("https://quotes-api-self.vercel.app/quote")
    .then((response) => {return response.json()})
    .then((data) => {
      setQuoteInfo({
        text: data.quote,
        author: data.author
      });
    });
  }

  return (
  
    <div className="App pt-5 text-center">
      <div id="quote-box">
        <p id="text">{quoteInfo.text}</p>
        <p id="author">{quoteInfo.author}</p>
        <button id="new-quote" onClick={getQuote} className='btn btn-primary'>New Quote</button>
        <a id="tweet-quote" href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + quoteInfo.text} target='_blank'>Tweet</a>
      </div>
    </div>
  );
}

export default App;
