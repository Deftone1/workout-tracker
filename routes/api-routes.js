
const Workout = require("../models/workout.js");

app.post("/submit", ({ body }, res) => {
    // table name ".create"
    
    const book = body;
  
    // If we want the object to have a boolean value of false,
    // we have to do it here, because the ajax post will convert it
    // to a string instead of a boolean
    book.read = false;
  });
  
  // Find all books marked as read
  app.get("/api/workouts", (req, res) => {
      // collection name.find()
      Workout.find({}, (err, data) => {
          if (err) {
            console.log(err);
          } else {
            res.json(data);
          }
        });
      });
  
  
  
  // Mark a book as having been read
  app.put("/api/workouts/:id", (req, res) => {
    // find by id and update
  });
  
  // Mark a book as having been not read
  app.put("/markunread/:id", (req, res) => {
    // Remember: when searching by an id, the id needs to be passed in
    // as (mongojs.ObjectId(IdYouWantToFind))
  });