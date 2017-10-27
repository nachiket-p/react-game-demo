import React, { Component } from 'react'
import logo from './arrow.svg'
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium'

export const DIRECTIONS = { 1: 'top', 2: 'left', 3: 'right', 4: 'bottom' }
export const DIRECTIONS_ROTATION = { 1: -90, 2: 180, 3: 0, 4: 90 }

const styles = {
  fadeIn: {
    animation: 'x 0.5s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
}

/* CONSIDERING RECT SPRITES */
class Sprite extends Component {
  static getDirection(direction) {
    return DIRECTIONS[direction]
  }

  render() {
    const { position, direction, size } = this.props
    const rotation = DIRECTIONS_ROTATION[direction];
    console.log('DIRECTION ' + DIRECTIONS[direction] + ', ROT', rotation)
    return (
      <div style={{ position: 'absolute', top: position.y, left: position.x }}>
        <StyleRoot>
          <div style={styles.fadeIn}>
            <img style={{
              height: size,
              WebkitTransform: `rotate(${rotation}deg)`,
              transform: `rotate(${rotation}deg)`,
            }} src={logo} className="sprite" alt="logo" />
          </div>
        </StyleRoot>
      </div>
    )
  }
}

export default Sprite