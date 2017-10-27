import React, { Component } from 'react'
import Sprite from './Sprite'
import Score from './Score'
import Swipeable from 'react-swipeable'
const SPRITE_SIZE = 80;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


class Board extends Component {
  constructor() {
    super();
    this.state = {
      score: 0
    }
  }

  swiping(e, deltaX, deltaY, absX, absY, velocity) {
    console.log("You're Swiping...", e, deltaX, deltaY, absX, absY, velocity)
  }

  swiped(direction) {
    return (e, deltaX, deltaY, isFlick, velocity) => {
      console.log("You Swiped..." + direction, e, deltaX, deltaY, isFlick, velocity)
      let { sprite, score } = this.state
      if (!sprite) return
      let lastAction = false
      if (Sprite.getDirection(sprite.direction) == direction) {
        score++;
        console.log("CORRECT!!!  : " + direction)
        lastAction = true
      } else {
        console.warn("WRONG!!!  : " + direction)
        lastAction = false
      }
      this.setState({ sprite: null, score, lastAction })
      setTimeout(() => this.spawn(), 100)
    }
  }

  render() {
    const { size } = this.props
    const { sprite, score, lastAction } = this.state
    const spriteEl = sprite ? <Sprite {...sprite} size={SPRITE_SIZE} /> : null
    // onSwiping={this.swiping}
    // onSwipe={this.swiped()}
    return (
      <div>
        <Swipeable
          onSwipedLeft={this.swiped('left')}
          onSwipedRight={this.swiped('right')}
          onSwipedUp={this.swiped('top')}
          onSwipedDown={this.swiped('bottom')}
          trackMouse={true}
        >
          <div style={{ position: 'relative', width: size.x, height: size.y }}>
            {spriteEl}
          </div>
        </Swipeable>
        <Score score={score} lastAction={lastAction} />
      </div>
    );
  }

  spawn() {
    const { size } = this.props
    this.setState({
      sprite: {
        position: { x: getRandomInt(0, size.x - SPRITE_SIZE), y: getRandomInt(0, size.y - SPRITE_SIZE) },
        direction: getRandomInt(1, 4)
      }
    })
  }

  componentDidMount() {
    this.spawn();
  }
}

export default Board;