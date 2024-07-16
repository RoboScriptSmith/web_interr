// app.js

// Import the 'axios' module
const axios = require('axios');

// Define a URL to make a request to
const url = 'https://jsonplaceholder.typicode.com/posts/1';

// Make a GET request to the URL
axios.get(url)
    .then(response => {
        // Handle success
        console.log('Response data:', response.data);
    })
    .catch(error => {
        // Handle error
        console.error('Error fetching data:', error);
    });
