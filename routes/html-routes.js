

// Requires the path file for my HTML files

var path = require("path");

module.exports = function (app) {
  // continue workout / new workout
  app.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
 
  // get stats for our workouts
  app.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};