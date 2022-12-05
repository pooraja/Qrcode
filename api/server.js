const express = require("express");
const cors = require("cors")
const userRoute = require("./routes/UserRoutes");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());
mongoose
  .connect("mongodb+srv://admin:NHACUx9SV8GozFxu@cluster0.ehyzjyi.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoute);

app.listen(8800, () => {
    console.log("server is listerning to port 8800");
})