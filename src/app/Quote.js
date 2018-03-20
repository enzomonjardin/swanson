import React, { Component } from 'react';
import styled from 'styled-components';
import { TimelineMax } from 'gsap';

class Quote extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    if (this.props && this.props.children)
      new TimelineMax({})
        .to(this.quoteRef, 0.4, {
          y: -180,
          opacity: 0,
          onComplete: () => (this.quoteRef.innerText = this.props.children),
        })
        .to(this.quoteRef, 0.4, { y: 0, opacity: 1 });
  }

  render() {
    return <QuoteWrapper innerRef={innerRef => (this.quoteRef = innerRef)} />;
  }
}

const QuoteWrapper = styled.div`
  font-size: 28px;
  margin: 10%;
  font-family: 'Noto Serif', serif;
  font-weight: 400;
  color: lightgreen;
  -webkit-text-stroke: 1px green;
  user-select: none;
`;

export default Quote;
