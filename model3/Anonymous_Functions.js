// Higher-order function that takes another function as an argument
function processUserInput(callback) {
    const name = 'Aditya';
    callback(name);
}

// Using an anonymous function as the callback
processUserInput(function(name) {
    console.log(`Hello, ${name}! This is an anonymous function.`);
});
