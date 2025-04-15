import express from 'express';
import mysql from 'mysql2';
import dotenv from 'dotenv';
import cors from 'cors'; // ✅ import cors
import { GoogleGenerativeAI } from '@google/generative-ai';
import geminiAnalysisRouter from './routes/geminiAnalysis.js';

dotenv.config();

const app = express();
const port = 3000;

app.use(cors()); // ✅ enable CORS for all routes
app.use(express.json()); // recommended if you're working with JSON requests

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

app.use('/api', geminiAnalysisRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
