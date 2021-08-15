const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://alina:gdrWMxP2kx3RqcD4@cluster0.vvv8d.mongodb.net/usersDb?retryWrites=true&w=majority',{useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false}); //we connect to our database

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected")
})