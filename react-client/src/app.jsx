import React from 'react'
import ReactDOM from 'react-dom'
import Display from './components/Display.jsx'
import Board from './components/Board.jsx'
import Win from './components/Win.jsx'
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

  // Radomize

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


  // Update

  updateBoard(tileRow, tileCol) {
    let copyState = this.state

    copyState.turns = copyState.turns + 1

    copyState.board.map((row, rowIndex) => {
      if (rowIndex === tileRow - 1 
        || rowIndex === tileRow + 1) 
      {
        row[tileCol] = !row[tileCol]
      } else if (rowIndex === tileRow) {
        row.map((col, colIndex) => {
          if (colIndex === tileCol 
            || colIndex === tileCol + 1 
            || colIndex === tileCol - 1) 
          {
            row[colIndex] = !col
          }
        })
      }
    })

    this.setState(copyState);
    this.checkBoard()
  }


  // Check for Wins

  checkBoard() {
    let win = true

    this.state.board.map(row => {
      row.map(tile => {
        if (tile) { win = false }
      })
    })
    
    if (win) {
      this.setState({
        win: true
      })
    }
  }


  // Restart Game

  restart() {
    this.setState({
      turns: 0,
      win: false
    })
    this.randomizeBoard()
  }

  //
  // 

  componentDidMount() {
    this.randomizeBoard()
  }

  //
  // Render App and Comps
  //

  render() {
    return (
      <div className="app-wrapper">
        <div className='bg'></div>
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
        {this.state.win ? 
        <Win 
          turns={this.state.turns}
          restart={this.restart}
        />
        : null
        }
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
