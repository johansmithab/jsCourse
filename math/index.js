function add (x, y) {
    return x + y;
}

function multiply (x, y) {
    return x * y;
}

// module.exports = { // This is when using require to import modules.
//     add,
//     multiply
// }

export default { // This is for ESmodules.
    add,
    multiply
}