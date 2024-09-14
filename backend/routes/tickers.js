const express = require("express");
const router = express.Router();
const Ticker = require("../db/db");
const axios = require("axios");

router.get("/fetch", async (req, res) => {
  try {
    const { data } = await axios.get("https://api.wazirx.com/api/v2/tickers");
    const top10results = Object.values(data).slice(0, 10);

    await Ticker.deleteMany({});

    top10results.forEach(async (ticker) => {
      const newTicker = new Ticker({
        name: ticker.name,
        last: ticker.last,
        buy: ticker.buy,
        sell: ticker.sell,
        volume: ticker.volume,
        base_unit: ticker.base_unit,
      });
      await newTicker.save();
    });

    res.send("Data stored successfully");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get("/get-tickers", async (req, res) => {
  try {
    const tickers = await Ticker.find({});
    res.json(tickers);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
module.exports = router;
