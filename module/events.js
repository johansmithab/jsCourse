const EvenEmitter = require('events');

const customEmitter = new EvenEmitter()

customEmitter.on('response', (data) => {
    console.log("received")
    console.log(data)
})

customEmitter.emit('response', "hello world")
customEmitter.emit('response', {name: "Johan"})
customEmitter.emit('response', [1, 2, 3])