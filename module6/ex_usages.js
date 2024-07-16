// Creating a buffer from a string
const buf = Buffer.from('Hello, World!');

// Logging the buffer and its content
console.log(buf);
console.log(buf.toString());  // Outputs: Hello, World!

// Allocating a buffer of 10 bytes
const buf2 = Buffer.alloc(10);
console.log(buf2);

// Writing data to the buffer
buf2.write('1234567890');
console.log(buf2.toString());
