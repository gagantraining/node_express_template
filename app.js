const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();




const indexRouter = require("./routes/index");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// all routes to the server should come with /api and redirects to /
app.use(cors());
app.use("/", indexRouter(app));

try {
  mongoose.connect(
    "mongodb://localhost:27017/testDB?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true}
  );
  const connection = mongoose.connection;
  connection.once("open", function () {
    console.log("MongoDB database connection established successfully");
  });
} catch (err) {
  console.log("Mongoose Connect error " + err);
}

const http = require("http");
const PORT = 3001;

//listen for request on port 3000, and as a callback function have the port listened on logged
app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});