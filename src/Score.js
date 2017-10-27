import React, { Component } from 'react'
import { fadeOut, tada } from 'react-animations';
import Radium, { StyleRoot } from 'radium'

const styles = {
  fadeOut: {
    animation: 'x 0.5s',
    animationName: Radium.keyframes(fadeOut, 'fadeOut')
  },
  tada: {
    animation: 'x 0.5s',
    animationName: Radium.keyframes(tada, 'tada')
  }
}


class Score extends Component {
  render() {
    const { lastAction, score } = this.props;
    const correctClass = lastAction ? 'is-success' : 'is-danger'
    const lastActionEl = lastAction != undefined ?
      <span style={styles.tada} className={"tag is-medium is-uppercase " + correctClass}>{lastAction ? 'correct' : 'wrong'}</span>
      : null
  
    return <section className='scoreArea' style={{ margin: 20, padding: 20, backgroundColor: '#EEEEEE' }}>
      <StyleRoot>
        <nav className="level is-marginless">
          <div className="level-left">
            <div className="level-item has-text-centered">
              <div>
                <p style={styles.tada} className="subtitle is-3">{score}</p>
                <p className="subtitle is-5 is-uppercase">Score</p>
              </div>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item has-text-centered">
              <div>
                {lastActionEl}
              </div>
            </div>
          </div>
        </nav>
      </StyleRoot>
    </section>
  }

  componentDidUpdate() {

  }
}

export default Score