const User = mongoose.model('User', new mongoose.Schema({
    name: String,
    age: Number
}));

// Find all users
User.find({}, (err, users) => {
    if (err) throw err;
    console.log('Users:', users);
});
