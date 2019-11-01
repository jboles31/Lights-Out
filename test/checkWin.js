const expect = require('chai').expect

let checkBoard =(board = []) => {
  let win = true

  if (!board.length) { return false }

  board.map(row => {
    row.map(tile => {
      if (tile) { win = false }
    })
  })
  
  if (win) {
    return true
  } else {
    return false
  }
}

let win = [[false, false, false, false, false],[false, false, false, false, false],[false, false, false, false, false],[false, false, false, false, false],[false, false, false, false, false],]

let noWin = [[false, true, false, false, true],[false, true, true, true, false],[true, true, true, false, false],[true, true, false, true, true],[false, false, false, true, false]]


describe('#checkWin', () => {

  context('without arguments', () => {
    it('should return false', () => {
      expect(checkBoard()).to.equal(false)
    })
  })

  context('with finished board', () => {
    it('should return true', () => {
      expect(checkBoard(win)).to.equal(true)
    })
  })

  context('with unfinished board', () => {
    it('should return true', () => {
      expect(checkBoard(noWin)).to.equal(false)
    })
  })
})