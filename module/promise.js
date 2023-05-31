const {readFile} = require('fs/promises');

async function read() {
    try {
        // throw new Error("This is an error")
        const result1 = await readFile('../data/first.txt', 'utf-8')
        const result2 = await readFile('../data/second.txt', 'utf-8')
        console.log(result1)
        console.log(result2)
    }catch(error){
        console.log(error)
    }
}

read();