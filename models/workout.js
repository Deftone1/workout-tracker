

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Enter an exercise type"
        },
        name: {
          type: String,
          trim: true,
          required: "Enter an exercise name"
        },
        duration: {
          type: Number,
          required: "Enter an exercise duration in minutes"
        },
        weight: {
          type: Number
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        },
        distance: {
          type: Number
        }
      }
    ]
  },
  {
    toJSON: {
      // include any virtual properties when data is requested
      virtuals: true
    }
  }
);

// adds a dynamically-created property to schema
workoutSchema.virtual("totalDuration").get(function() {
  // "reduce" array of exercises down to just the sum of their durations
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;


// const mongoose = require("mongoose");

// const workoutSchema = new mongoose.Schema({

//     day: {
//         type: Date,
//         default: Date.now,
//     },
//     exercises: [

//         {
//             type: {
//                 type: String,
//                 required: "Enter an exercise type",
//                 trim: true
//             },
//             name: {
//                 type: String,
//                 required: "Name the exercise",
//                 trim: true
//             },

//             duration: {
//                 type: Number,
//                 required: "Please enter more than one minute!",
//                 min: 1
//             },

//             distance: {
//                 type: Number

//             },

//             weight: {
//                 type: Number,

//             },

//             reps: {
//                 type: Number,
//             },

//             sets: {
//                 type: Number,
//             }
//         },
//     ]


// },
//     {
//         toJSON: { virtual: true }
//     }
// );

// workoutSchema.virtual("totalDuration").get(function () {
//     return this.exercises.reduce((total, exercise) => {
//         return total + exercise.duration;
//     }, 0);
// })

// const Workout = mongoose.model("Workout", workoutSchema);

// module.exports = Workout;
