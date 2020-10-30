const Workout = require("../models/workout.js");

module.exports = function (app) {
    app.post("/api/workouts", function (req, res) {
        var workout = new Workout(req.body)

        workout.save(err => {
            if (err) return res.status(500).send(err);
            return res.status(200).send(workout);
        })
    })

    app.get("/api/workouts", function (req, res) {
        console.log("Test")

        Workout.find({}).then(function (data, err) {
            if (err) throw err
            res.json(data)
        })
    })

    // app.get("/api/workouts/:id", function (req, res) {

    //     .FINDONE GOES HERE
    // })




    app.put("/api/workouts/", function (req, res) {
        var query = req.body
        Workout.update({}, { sort: { name: 1 } }).then(function (data, err) {

            console.log(data)
            res.json(data)
            if (err) throw err

        })
    })

}

