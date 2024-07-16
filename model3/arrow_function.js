// Declare the function using arrow function syntax
const greetUser = (name) => {
    console.log(`Hello, ${name}! Welcome to Node.js.`);
}

// Call the function
greetUser('aditya');
greetUser('rahul');

// Exporting the function for use in other modules
module.exports = greetUser;
