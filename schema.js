const mongoose = require('mongoose')

const userSchema = new mongoose.userSchema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    roles: {
        type: [String],
        default: ['user'],
    },
    Profile: {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
    },
    lastLogin: {
        type: Date,
        default: null,
    },
}, {timestamps: true});

module.export = mongoose.model('User', userSchema);