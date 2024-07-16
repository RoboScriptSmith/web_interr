// Declare the function
function greetUser(name) {
    console.log(`Hello, ${name}! Welcome to Node.js.`);
}

// Call the function
greetUser('ashok');
greetUser('aditya');

// Exporting the function for use in other modules
module.exports = greetUser;
