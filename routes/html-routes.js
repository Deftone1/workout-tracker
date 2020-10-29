
router.get("/exercises", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercises.html"));
  });

  router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });