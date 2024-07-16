const buf5 = Buffer.from('Hello, Node.js!');
console.log(buf5.toString('utf8', 0, 5));  
console.log(buf5[0]);  
