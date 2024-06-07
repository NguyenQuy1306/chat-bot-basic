const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/user", require("./routes/auth.route"));
const { env } = require("./config/index");
const PORT = env.PORT_WEB;
app.use((err, req, res, next) => {
  console.error(err); // Log the error for debugging
  res.status(500).send({
    message: "Internal Server Error",
  });
});

//start server
app.listen(PORT, () => {
  console.log(`server is running in port ${PORT} `);
});
