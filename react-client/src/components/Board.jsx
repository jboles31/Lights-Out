import React from 'react'

const Board = ( props ) => {

  const generateBoard = (board) => {
    let tileContainer = [];
    let result = []
    let standard = ((100/board.length) - ((100/board.length)/10))/100 + '%'

    board.map((row, rowIndex) => {
      result = []
      row.map((boolean, colIndex) => {
        boolean ? 
          result.push(<div 
            className='lit-tile' 
            key={`${rowIndex}x${colIndex}`} 
            onClick={() => props.update(rowIndex, colIndex)}
            // width={standard}
          ></div>)
        :
          result.push(<div 
            className='unlit-tile' 
            key={`${rowIndex}x${colIndex}`} 
            onClick={() => props.update(rowIndex, colIndex)}
            // width={(standard/100) + '%'}
          ></div>)  
      })
      tileContainer.push(<div 
        className='row' 
        key={`row${rowIndex}`}
        // height={standard}
        >{result}
      </div>);
    })

    return (<div className='board'>{tileContainer}</div>)
  }
  
  return (
    <div className='board-display'>
        {generateBoard(props.board)}
    </div>
  )
}

export default Board