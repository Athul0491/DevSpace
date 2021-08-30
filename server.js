import express from "express";
import { connect } from "mongoose";
import { urlencoded, json } from "body-parser";
import passport, { initialize } from "passport";

import users from "./routes/api/users";
import profile from "./routes/api/profile";
import posts from "./routes/api/posts";

const app = express();

// Body parser middleware
app.use(urlencoded({ extended: false }));
app.use(json());
// DB config
import { mongoURI as db } from "./config/keys";

// Connect to MongoDB
connect(db)
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

// Passport middleware
app.use(initialize());

// Passport config
// Passport config
require("./config/passport").default(passport);
// Use routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));
