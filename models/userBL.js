const User = require('../models/userModel')

exports.getAllUsers = () => {
    return new Promise((resolve, reject) => {
        User.find({}, (err,data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

exports.getUser = (id) => {
    return new Promise((resolve, reject) => {
        User.findById(id, (err,data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

exports.addUser = (obj) => {
    return new Promise((resolve, reject) => {
        let user = new User({
            name: obj.name,
            email: obj.email,
            street: obj.street,
            city: obj.city,
            zipcode: obj.zipcode,
            tasks: obj.tasks,
            posts: obj.posts
        })
        console.log(user)
        user.save((err) => {
            if (err) {
                reject(err)
            } else {
                resolve("created")
            }
        })
    })
} 

exports.updateUser = (id, obj) => {
    return new Promise((resolve,reject) => {
        User.findByIdAndUpdate(id, {
            name: obj.name,
            email: obj.email,
            street: obj.street,
            city: obj.city,
            zipcode: obj.zipcode,
            tasks: obj.tasks,
            posts: obj.posts
        }, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve("updated")
            }
        })
    })
}

exports.deleteUser = (id) => {
    return new Promise((resolve, reject) => {
        User.findByIdAndDelete(id, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve("deleted")
            }
        })
    })
}

