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
    this.updateBoard = this.updateBoard.bind(this)
    this.checkBoard = this.checkBoard.bind(this)
    this.restart = this.restart.bind(this)
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

  updateBoard(tileRow, tileCol) {

    let copyState = this.state
    copyState.turns = copyState.turns + 1
    copyState.board.map((row, rowIndex) => {
      if (rowIndex === tileRow - 1) {
        row[tileCol] = !row[tileCol]
      } else if (rowIndex === tileRow + 1) {
        row[tileCol] = !row[tileCol]
      } else if (rowIndex === tileRow) {
        row.map((col, colIndex) => {
          // debugger;
          if (colIndex === tileCol || colIndex === tileCol + 1 || colIndex === tileCol - 1) {
            row[colIndex] = !col
          }
        })
      }
    })
    this.setState(copyState);
    this.checkBoard()
  }

  checkBoard() {
    this.state.board.map(row => {
      row.map(tile => {
        console.log(tile)
        if (tile === true) { return false }
      }
      )
    })
    this.setState({
      win: true
    })
    // if (this.state.win) {
    //   alert('you won')
    // }
  }

  restart() {
    this.setState({
      turns: 0,
      win: false
    })
    this.randomizeBoard()
  }

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
            restart={this.restart}
            />
          <Board
            board={this.state.board}
            update={this.updateBoard}
          />
        </div>        
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
