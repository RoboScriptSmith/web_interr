// String to be converted to a buffer
const str = "Hello, World!";

// Create a buffer from the string
const buffer = Buffer.from(str);

// Log the buffer
console.log('Buffer:', buffer);

// Convert the buffer back to a string
const stringFromBuffer = buffer.toString();
console.log('String from buffer:', stringFromBuffer);

// Access individual bytes
console.log('First byte:', buffer[0]); // ASCII value of 'H'
console.log('Second byte:', buffer[1]); // ASCII value of 'e'

// Modify the buffer
buffer[0] = 74; // Changing the first byte to 74 (which is 'J' in ASCII)
console.log('Modified buffer:', buffer);
console.log('Modified string from buffer:', buffer.toString());
