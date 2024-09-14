const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const mainRouter = require("./routes/main");

app.use(cors());

app.use(express.json());

app.use("/api/v1", mainRouter);

app.listen(port, () => {
  console.log("listening on port 3000");
});
