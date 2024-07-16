const _ = require('lodash');
const axios = require('axios');

console.log(_.join(['Hello', 'world'], ' '));

axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log('Posts fetched:', response.data);
  })
  .catch(error => {
    console.error('Error fetching posts:', error);
  });
