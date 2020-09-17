const mongoose = require("mongoose");

const WidgetSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "You need to have a title here!"],
        minLength: [6, "Need a longer title"],
        maxLength: [50, "Title too long"]
    }

}, { timestamps: true })


const Widget = mongoose.model("Widget", WidgetSchema);
module.exports = Widget;


