import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import './App.css';
import Board from './Board'

const style = {
  
  width: 700,
  height: 500,
  backgroundColor: "#444444"
}
class App extends Component {
  constructor() {
    super();
    this.state ={
      started: false
    }
  }

  render() {
    let children = null;
    if(!this.state.started) {
      children = <div style={{height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <button className='button is-primary' onClick={()=>this.setState({started: true})}>Start</button>
      </div>
    } else {
      children = <Board size={{x: style.width,y:style.height}} /> 
    }
    return (
      <section className="section">
        <h1 className='subtitle is-4 is-uppercase is-marginless' style={{textAlign: 'center'}}>Swipe Game Demo</h1>
        <h4 className='subtitle is-6' style={{textAlign: 'center'}}>Only works on browser.</h4>
        <div className='container gameArea' style={style}>
          {children}
        </div>
      </section>
    );
  }
}

export default App;
