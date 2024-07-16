// greetings.js

// A function to greet a user by name
function greetUser(name) {
    console.log(`Hello, ${name}! Welcome to Node.js.`);
}

// A function to say goodbye to a user by name
function sayGoodbye(name) {
    console.log(`Goodbye, ${name}! See you next time.`);
}

// Export the functions
module.exports = {
    greetUser,
    sayGoodbye
};

