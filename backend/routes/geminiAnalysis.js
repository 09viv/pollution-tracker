import express from 'express';
import axios from 'axios';
import db from '../config/db.js'; // if you have db.js exporting the MySQL connection
const router = express.Router();
import dotenv from 'dotenv';
 dotenv.config();

const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;
router.get('/analyze-health-impact', async (req, res) => {
  try {
    // Step 1: Fetch air and water quality data
    const [airResults] = await db.query(`
      SELECT location_id, recorded_at, aqi, pm25, pm10, co, no2
      FROM air_quality
      ORDER BY recorded_at DESC
      
    `);

    const [waterResults] = await db.query(`
      SELECT location_id, recorded_at, wqi
      FROM water_quality
      ORDER BY recorded_at DESC
      
    `);

    // Step 2: Create a prompt
    const prompt = `
      Given the following air and water quality data, list:
      1. Diseases that could arise from these values.
      2. For each disease, list two categories of precautions: 
         - Artificial (e.g. purifiers, medication)
         - Natural (e.g. lifestyle changes, environment)

      Air Quality:
      ${JSON.stringify(airResults, null, 2)}

      Water Quality:
      ${JSON.stringify(waterResults, null, 2)}

      Format:
      {
        "diseases": [
          {
            "name": "",
            "description": "",
            "artificial_precautions": [],
            "natural_precautions": []
          }
        ]
      }
    `;

    // Step 3: Send to Gemini API
    const response = await axios.post(GEMINI_API_URL, {
      contents: [{
        parts: [{ text: prompt }]
      }]
    });

    const geminiResponse = response.data.candidates?.[0]?.content?.parts?.[0]?.text;

    // Step 4: Return parsed JSON to frontend
    res.json({ data: geminiResponse });

  } catch (error) {
    console.error('Gemini Analysis Error:', error);
    res.status(500).json({ error: error.message });
  }
});

export default router;

