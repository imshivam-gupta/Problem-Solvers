const express = require("express");
const app = express();
const mongoose = require("mongoose");

const cors = require("cors");
const dotenv = require("dotenv");

app.use(cors());
app.use(express.json());

const connectDB = require("./config/db.js");
connectDB();

const path = require("path");

const postsRouter = require("./routes/posts");
const tags = require("./routes/tags");
// const replies = require("./routes/replies");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const userRoutes = require("./routes/userRoutes.js");
app.use("/api/users", userRoutes);
const problemRoutes = require("./routes/problemRoutes.js");
app.use("/api/problems", problemRoutes);

app.use("/api/posts", postsRouter);
app.use("/api/tags", tags);
// app.use("/api/reply", replies);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
