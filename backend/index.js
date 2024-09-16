const express = require("express");
const { PrismaClient } = require("@prisma/client");
const axios = require("axios");
const cors = require("cors"); // Import cors middleware
require("dotenv").config();

const app = express();
const prisma = new PrismaClient();
const port = 3000;
app.use(cors());

app.get("/", async (req, res) => {
  res.send("hey");
});
// Fetch top 10 tickers from WazirX API and store them in PostgreSQL
app.get("/fetch-tickers", async (req, res) => {
  try {
    // Fetch data from WazirX API
    const response = await axios.get("https://api.wazirx.com/api/v2/tickers");
    const tickers = Object.values(response.data).slice(0, 10);

    // Store tickers in the database using insert
    for (const ticker of tickers) {
      const { name, last, buy, sell, volume, base_unit } = ticker;

      // Check if the ticker already exists
      const existingTicker = await prisma.ticker.findUnique({
        where: { name },
      });

      if (!existingTicker) {
        // Insert new ticker into the database
        await prisma.ticker.create({
          data: {
            name,
            last: parseFloat(last),
            buy: parseFloat(buy),
            sell: parseFloat(sell),
            volume: parseFloat(volume),
            baseUnit: base_unit,
          },
        });
      } else {
        console.log(`Ticker ${name} already exists, skipping insert.`);
      }
    }

    res.status(200).send("Tickers fetched and inserted successfully.");
  } catch (error) {
    console.error("Error fetching or inserting data:", error);
    res.status(500).send("Server error");
  }
});

// Get tickers from the PostgreSQL database
app.get("/tickers", async (req, res) => {
  try {
    const tickers = await prisma.ticker.findMany();
    res.status(200).json(tickers);
  } catch (error) {
    console.error("Error fetching tickers:", error);
    res.status(500).send("Server error");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
