import {IUser} from "../models/UserModel" 

const lizzie: IUser = {
        "firstName": "Lizzie",
        "lastName": "Bennett",
        "email": "lb@email.com",
        "password": "qwerty",
        "created": Date.now(),
        "verified": true
};

lizzie.save();






// use clothxDB;
// db.dropDatabase();

// db.users.insertMany([
//     {
//         "firstName": "Lizzie",
//         "lastName": "Bennett",
//         "email": "lb@email.com",
//         "password": "qwerty",
//         "created": Date.now(),
//         "verified": True
//     },
//     {
//         "firstName": "Charlotte",
//         "lastName": "Lucas",
//         "email": "CL@email.com",
//         "password": "123456",
//         "created": Date.now(),
//         "verified": False
//     }
// ])