const express = require("express");
const cors = require("cors");
const app = express();
const { ssoUser } = require("./controllers/auth.controller");
app.use(express.json());
const cookieParser = require("cookie-parser");
app.use(cors());
app.use(cookieParser());
app.use("/user", require("./routes/auth.route"));
const { env } = require("./config/index");
const PORT = env.PORT_WEB;
app.use((err, req, res, next) => {
  console.error(err); // Log the error for debugging
  res.status(500).send({
    message: "Internal Server Error",
  });
});

// ssoUser();
//start server
app.listen(PORT, () => {
  console.log(`server is running in port ${PORT} `);
});
