import mongoose from "mongoose";
import {ObjectId} from "bson";

const User = mongoose.model('User', {
    id: {type: ObjectId, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    created: {type: Date, required: true},
    verified: {type: Boolean, required: true}
});

module.export = mongoose.model('User', User);

// ^^The first argument is the singular name of the collection your model is for. Mongoose automatically looks for the plural, lowercased version of your model name.