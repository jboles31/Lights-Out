import React from 'react'

const Board = ( props ) => {

  const generateBoard = (board) => {
    let tileContainer = [];
    let result = []
    let count = 0

    board.map(row => {
      count += 1
      result = []
      row.map((boolean, index) => {
        boolean ? 
          result.push(<div className='lit-tile' key={`${row}x${index}`} onClick={() => props.update()}></div>)
        :
          result.push(<div className='unlit-tile' key={`${row}x${index}`} onClick={() => props.update()}></div>)  
      })
      tileContainer.push(<div className='row' key={`row${count}`}>{result}</div>);
    })
    return (<div className='board'>{tileContainer}</div>)
  }

  // const buttonGen = () => {
  //   let buttonContainer = [];

  //   let result = [];
  //   props.movies.map(movie => {
  //      result.push(<button className={movie} key={movie} onClick={() => props.search({movie}) }>{movie}</button>);
  //   })
  //   buttonContainer.push(<div>{result}</div>);
  //   return buttonContainer
  // }
  
  return (
    <div className='board-display'>
        {generateBoard(props.board)}
    </div>
  )
}

export default Board