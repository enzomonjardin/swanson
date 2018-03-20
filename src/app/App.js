import React, { Component } from 'react';
import styled from 'styled-components';
import Ron from './Ron';
import Quote from './Quote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: 'Loading...',
    };
    this.loadQuote = this.loadQuote.bind(this);
  }

  componentWillMount() {
    this.loadQuote();
  }

  loadQuote() {
    this.setState({ quote: null });
    fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
      .then(response => response.json())
      .then(jsonResponse => this.setState({ quote: jsonResponse[0] }));
  }

  render() {
    return (
      <Wrapper>
        <Content>
          <Ron onClick={this.loadQuote} />
          <Quote>{this.state.quote}</Quote>
        </Content>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #423324;
  background-image: url('/assets/bg-1.png'), url('/assets/bg-2.png');
  background-repeat: repeat-x, repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default App;
