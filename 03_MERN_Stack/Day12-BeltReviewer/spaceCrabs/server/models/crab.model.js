const mongoose = require("mongoose");

const CrabSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Your crab needs a cool name"],
        minLength: [5, "Need a longer name (more than 5)"],
    },
    spaceShip: {
        type: String,
        required: [true, "Your spaceship needs a cool name"],
        minLength: [5, "Need a longer name (more than 5)"],
    },
    weaponOne: {
        type: String,
        default: ""
    },
    weaponTwo: {
        type: String,
        default: ""
    },
    weaponThree: {
        type: String,
        default: ""
    },

}, { timestamps: true })


const Crab = mongoose.model("Crab", CrabSchema);
module.exports = Crab;


