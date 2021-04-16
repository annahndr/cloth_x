import {model, Schema} from "mongoose";
import {ObjectId} from "bson";

const UserSchema: Schema = new Schema({
    id: ObjectId,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    created: Date,
    activationStatus: Boolean
});

export default model("User", UserSchema);

