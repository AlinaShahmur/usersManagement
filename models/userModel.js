const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: String,
    completed: Boolean
})


const PostSchema = new mongoose.Schema({
    title: String,
    body: String
})

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    street: String,
    city: String,
    zipcode: Number,
    tasks: [TaskSchema],
    posts: [PostSchema]
})


module.exports = mongoose.model('users',UserSchema);