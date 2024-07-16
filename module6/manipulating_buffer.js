const buf7 = Buffer.from('Hello, World!');
buf7[0] = 0x68;  // Changing 'H' to 'h'
console.log(buf7.toString());
