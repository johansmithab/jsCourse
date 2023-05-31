// const {writeFile} = require('fs/promises')

// const createBigFile = async () => {
//     await writeFile('../data/bigFile.txt', 'Hello World'.repeat(100))
// }

// createBigFile();

const {createReadStream} = require('fs')

const stream = createReadStream('../data/bigFile.txt', {
    encoding: 'utf-8',
})

stream.on('data', (chunk) => {
    console.log(chunk)
})

stream.on('end', () => {
    console.log('Ya terminé')
})

stream.on('error', (error) => {
    console.log(error)
})