import React from 'react'

const Display = ( props ) => {
  
  return (
    <div className='display'>
      <div className='turn-display'>
        <div className='turn-title'>Turns:</div>
        <div className='turn-number'>{props.turns}</div>
      </div>
    </div>
  )
}

export default Display