'use strict'

const tap = require('tap')

const presenter = require('./presenter')

tap.test('presenter', (t) => {
  
  const gameOfLifeState = [
    [0,0,0,0,0,0,0,0,0,1,1],
    [0,0,0,0,0,0,0,0,0,1,1],
    [0,0,0,0,0,0,0,0,0,1,1],
    [0,0,0,0,0,0,0,0,0,1,1],
    [0,0,0,0,0,0,0,0,0,1,1],
  ]

  const expected = [
    "         **",
    "         **",
    "         **",
    "         **",
    "         **",
  ]

  const actual = presenter(gameOfLifeState)

  t.strictSame(actual, expected)
  t.end()
})