const express = require("express");
const router = express.Router();
const tickerRouter = require("./tickers");

router.use("/tickers", tickerRouter);

module.exports = router;
