import React from 'react';

function QuoteBox({ quote, author, getNewQuote, tweetQuote }) {
  return (
    <div id="quote-box">
      <div id="text">{quote}</div>
      <div id="author">{author}</div>
      <button id="new-quote" className="btn btn-primary" onClick={getNewQuote}>New Quote</button>
      <a
        id="tweet-quote"
        className="btn btn-info"
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${quote} - ${author}`)}`}
        target="_blank"
        rel="noreferrer"
      >
        Share on Twitter
      </a>
    </div>
  );
}

export default QuoteBox;
