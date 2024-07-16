// Array of bytes
const byteArray = [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33];

// Create a buffer from the array of bytes
const buffer = Buffer.from(byteArray);

// Log the buffer
console.log('Buffer:', buffer);



// Access individual bytes
console.log('First byte:', buffer[0]);
console.log('Second byte:', buffer[1]);

// Modify the buffer
buffer[0] = 74; // Changing the first byte to 74 (which is 'J' in ASCII)
console.log('Modified buffer:', buffer);
