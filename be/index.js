const express = require("express");
const userRoute = require("./routes/users");
const app = express();
const PORT = 5000;

app.use(express.json());
app.use("/users", userRoute);
app.get("/", (req, res) => {
  console.log("im here");
  res.send("hello homepage124233");
});
app.listen(PORT, () => {
  console.log("server is running in port 5000");
});
