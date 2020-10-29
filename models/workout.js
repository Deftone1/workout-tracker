const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
    
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: [

        {
            type: {
                type: String,
                required: "Enter an exercise type",
                trim: true
            },
            name: {
                type: String,
                required: "Name the exercise",
                trim: true
            },

            duration: {
                type: Number,
                required: "Please enter more than one minute!",
                min: 1
            },

            distance: {
                type: Number

            },

            weight: {
                type: Number,

            },

            reps: {
                type: Number,
            },

            sets: {
                type: Number,
            }
        },
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
