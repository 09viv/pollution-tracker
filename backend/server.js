import express from 'express';
import mysql from 'mysql2';
import dotenv from 'dotenv';
const { GoogleGenerativeAI } = require('@google/generative-ai');

dotenv.config()
const app = express();
const port = 3000;

// MySQL connection
const db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL DB');
});

const genAI = new GoogleGenerativeAI("GOOGLE_API_KEY"); // 🔐

app.post('/api/generate-tips', async (req, res) => {
    const [airData] = await db.promise().query(`SELECT * FROM air_quality ORDER BY recorded_at DESC LIMIT 5`);
    const [waterData] = await db.promise().query(`SELECT * FROM water_quality ORDER BY recorded_at DESC LIMIT 5`);


  const prompt = `
You are an environmental safety assistant. Based on the following air and water quality readings, suggest prevention and safety tips:

Air Quality:
AQI: ${airData.aqi}, PM2.5: ${airData.pm25}, PM10: ${airData.pm10}, CO: ${airData.co}, NO2: ${airData.no2}

Water Quality:
WQI: ${waterData.wqi}}

Provide tips in bullet points for general public awareness.
  `;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.json({ tips: text });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to generate tips." });
  }
});


// Get all air quality records
app.get('/api/air-quality', (req, res) => {
  const sql = `
    SELECT aq.id, aq.location_id, aq.recorded_at, aq.aqi, aq.pm25, aq.pm10, aq.co, aq.no2
    FROM air_quality aq
    ORDER BY aq.recorded_at DESC
  `;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Get all water quality records
app.get('/api/water-quality', (req, res) => {
  const sql = `
    SELECT wq.id, wq.location_id, wq.recorded_at, wq.wqi
    FROM water_quality wq
    ORDER BY wq.recorded_at DESC
  `;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});