const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    comment:String,
    rating:{
        type:Number,
        min:1,
        max:10
    },
    createdAt: {
        type:Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("Review", reviewSchema);