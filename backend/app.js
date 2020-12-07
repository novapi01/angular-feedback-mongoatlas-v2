const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const feedbackRoute = require("./routes/feedback.routes");
//mongodb+srv://admin:<password>@cluster0.jcg1t.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose
  .connect(
    "mongodb+srv://admin:adminabhishek@cluster0.jcg1t.mongodb.net/fbackA?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected to database successfully"))
  .catch((err) => console.log(err));
app.use(cors());
app.use(express.json());
app.use("/api/feedback", feedbackRoute);
const PORT = 3000;
app.listen(PORT, console.log(`Server started at port: ${PORT}`));

