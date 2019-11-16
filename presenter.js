'use strict'

module.exports = function(gameOfLifeState){
  return gameOfLifeState.map((row) => {
    return row.reduce((acc, value) => {
      return acc + (value === 0 ?  ' ' : "*")
    }, "")
  })
}