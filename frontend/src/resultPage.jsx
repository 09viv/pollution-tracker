/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A020F0'];

const DiseaseCard = ({ disease }) => {
  const [open, setOpen] = useState(false);

  return (
    <div onClick={() => setOpen(!open)} className="bg-white rounded-2xl shadow-md p-4 mb-4 cursor-pointer transition-all duration-300 hover:shadow-lg">
      <h3 className="text-xl font-semibold">{disease.name}</h3>
      {open && (
        <div className="mt-2 text-gray-700">
          <p><strong>About:</strong> {disease.description}</p>
          <p><strong>Precautions:</strong> {disease.precautions}</p>
          <p><strong>Prevention:</strong> {disease.prevention}</p>
        </div>
      )}
    </div>
  );
};

const ResultPage = () => {
  const [airData, setAirData] = useState([]);
  const [waterData, setWaterData] = useState([]);
  const [diseases, setDiseases] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/latest-sensor") // updated backend port
      .then(res => res.json())
      .then(sensorData =>
        fetch("http://localhost:5000/analyze", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(sensorData)
        })
      )
      .then(res => res.json())
      .then(data => {
        setAirData(data.air_quality);
        setWaterData(data.water_quality);
        setDiseases(data.diseases);
      })
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Pollution Health Report</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2 text-center">Air Quality Index</h2>
          <PieChart width={300} height={300}>
            <Pie data={airData} dataKey="value" cx="50%" cy="50%" outerRadius={100} label>
              {airData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2 text-center">Water Quality Index</h2>
          <PieChart width={300} height={300}>
            <Pie data={waterData} dataKey="value" cx="50%" cy="50%" outerRadius={100} label>
              {waterData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Health Risks</h2>
      <div>
        {diseases.map((disease, i) => (
          <DiseaseCard key={i} disease={disease} />
        ))}
      </div>
    </div>
  );
};

export default ResultPage;