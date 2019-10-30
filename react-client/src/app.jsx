import React from 'react'
import ReactDOM from 'react-dom'
import Display from './components/Display.jsx'
import Board from './components/Board.jsx'
import $ from 'jquery'
import Background from './images/background.jpg'
import style from './main.scss';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      board: [],
      turns: 0,
      win: false
    }

    this.randomizeBoard = this.randomizeBoard.bind(this)
  }

  //
  // Class Functions
  //

  randomizeBoard(x) {
    let randomize = (x) => {
      let results = []
      for (let i = 0; i < x; i++) {
        let arr = []
        for (let j = 0; j < x; j++) {
          arr.push(Math.random() >= 0.5)
        }
        results.push(arr)
      }
      return results;
    }

    this.setState({
      board: randomize(5)
    })
  }

  // updateBoard(row, col) {

  // }

  componentDidMount() {
    this.randomizeBoard()
  }

  //
  // Render App and Comps to index.html
  //

  render() {
    return (
      <div className="app-wrapper">
        <div className='bg'>
          <img className="background" src={Background} ></img>
        </div>
        <div className="comps-wrapper">
          <Display 
            turns={this.state.turns}
            />
          <Board
            board={this.state.board}
          />
        </div>        
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
