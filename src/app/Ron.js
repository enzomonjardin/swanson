import React, { Component } from 'react';
import styled from 'styled-components';
import { TweenMax } from 'gsap';

class Ron extends Component {
  constructor(props) {
    super(props);
    this.hintHidden = false;
    this.wiggle = this.wiggle.bind(this);
    this.hideHint = this.hideHint.bind(this);
  }

  wiggle() {
    if (!this.hintHidden) this.hideHint();
    let duration = 0.02;
    TweenMax.from(this.ronRef, duration, {
      rotation: -10,
      repeat: 8,
      yoyo: true,
    });
  }

  hideHint() {
    TweenMax.to(this.hintRef, 0.5, {
      y: -10,
      opacity: 0,
    });
  }

  render() {
    return (
      <RonWrapper
        onClick={this.wiggle}
        innerRef={innerRef => (this.ronRef = innerRef)}
      >
        <RonHint innerRef={innerRef => (this.hintRef = innerRef)}>
          Touch me
        </RonHint>
        <RonImage src="/assets/ron.png" {...this.props} />
      </RonWrapper>
    );
  }
}

const RonWrapper = styled.div`
  width: ${props => props.width || '7em'};
  height: ${props => props.height || 'auto'};
  position: absolute;
  right: 3em;
  top: .2em;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
`;

const RonImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const RonHint = styled.div`
  font-size: 18px;
  width: 100%;
  text-align: center;
  color: lightgreen;
  -webkit-text-stroke: 1px green;
  font-family: 'Noto Serif', serif;
`;

export default Ron;
