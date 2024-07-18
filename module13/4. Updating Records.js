const User = mongoose.model('User', new mongoose.Schema({
    name: String,
    age: Number
}));

// Update a record
User.updateOne({ name: 'Alice' }, { $set: { age: 30 } }, (err, res) => {
    if (err) throw err;
    console.log('Record updated:', res);
});
