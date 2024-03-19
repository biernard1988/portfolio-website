require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const projectRoutes = require("./routes/projects");

//express app
const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/projects", projectRoutes);

//connect to db
mongoose
  .connect(process.env.NEXT_PUBLIC_MONGO_URI)
  .then(() => {
    //listen for requests
    app.listen(process.env.NEXT_PUBLIC_PORT, () => {
      console.log(
        "connected to db & listening on port",
        process.env.NEXT_PUBLIC_PORT
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
