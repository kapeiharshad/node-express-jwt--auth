const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const { requireAuth } = require("./middelwares/AuthMiddelware");

const app = express();

// middleware
app.use(express.static("public"));
app.use(cookieParser());
app.use(express.json()); // this is a alternate of bodyparser

// view engine
app.set("view engine", "ejs");

// database connection
const dbURI =
  "mongodb+srv://harshad:harshad@cluster0.mddby.mongodb.net/node-auth?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));

// routes
app.get("/", (req, res) => res.render("home"));
app.get("/smoothies", requireAuth, (req, res) => res.render("smoothies"));
app.use(authRoutes);
