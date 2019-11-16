'use strict'

const tap = require('tap')

const stream = require('stream')

tap.test('view', (t) => {

  const stdoutMock = new stream.Duplex()

  stdoutMock.on('data', (chunk) => {
    
  })



  const bashView = bashView(stdoutMock) 

  const presenterData = [
    "         **",
    "         **",
    "         **",
    "         **",
    "         **",
  ]

  bashView.render(presenterData)


  

  t.end()
})