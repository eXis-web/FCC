import React, { Component } from 'react';
import QuoteBox from './QuoteBox';

class QuoteMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: 'Quote will appear here',
      author: 'Author will appear here'
    };
  }

  componentDidMount() {
    this.getNewQuote();
  }

  getNewQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      if (!response.ok) {
        throw new Error('Failed to fetch quote');
      }
      const quoteData = await response.json();

      this.setState({
        quote: quoteData.content,
        author: quoteData.author,
      });
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  }

  tweetQuote = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${this.state.quote} - ${this.state.author}`)}`;
    window.open(tweetUrl);
  }

  render() {
    return (
      <div className="container text-center">
        <div className="jumbotron">
          <QuoteBox
            quote={this.state.quote}
            author={this.state.author}
            getNewQuote={this.getNewQuote}
            tweetQuote={this.tweetQuote}
          />
        </div>
        <div className="mt-4">by eXis</div>
      </div>
    );
  }
}

export default QuoteMachine;
