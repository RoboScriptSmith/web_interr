const User = mongoose.model('User', new mongoose.Schema({
    name: String,
    age: Number
}));

// Delete a record
User.deleteOne({ name: 'Alice' }, (err) => {
    if (err) throw err;
    console.log('Record deleted');
});
