const Workout = require("../models/workout.js");

module.exports = function (app) {
    
    app.get("/api/workouts", (req, res) => {
        Workout.find({})
            .then(workout => {
                res.json(workout);
            })
            .catch(error => {
                res.json(error);
            });
    });

    


    // CREATES a new workout
    app.post("/api/workouts", (req, res) => {
        try {
            const response = Workout.create({ type: "workout" })
            res.json(response);
        }
        catch (error) {
            console.log("Something went wrong!", error)
        }

    })



    //ADDS a new exercise to a workout, using the API (ID specific)
    app.put("/api/workouts/:id", ({ body, params }, res) => {
        const workoutId = params.id;
        var savedWorkouts = [];

      // GETS saved exercises
        Workout.find({ _id: workoutId })
            .then(dbWorkout => {
                savedWorkouts = dbWorkout[0].exercises;
                res.json(dbWorkout[0].exercises);
                let allWorkouts = [...savedWorkouts, body]
                updateWorkout(allWorkouts)
            })
            .catch(error => {
                res.json(error);
            });

            // UPDATES workout by user input (ID)
        function updateWorkout(exercises) {
            Workout.findByIdAndUpdate(workoutId, { exercises: exercises }, function (error, doc) {
                if (error) {
                    console.log(error)
                }

            })
        }

    })

    app.get("/api/workouts/range", (req, res) => {
        Workout.find({})
            .then(workout => {
                res.json(workout);
            })
            .catch(err => {
                res.json(error);
            });
    });
};



