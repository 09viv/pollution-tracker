import { useState } from "react";
import axios from "axios";

export default function PollutionTracker() {
  const [loading, setLoading] = useState(false);
  const [diseases, setDiseases] = useState([]);

  const handleTrackPollution = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:3000/api/analyze-health-impact");
      const responseText = res.data?.data || "";

      const jsonMatch = responseText.match(/```json\n([\s\S]*?)\n```/);
      const parsed = JSON.parse(jsonMatch ? jsonMatch[1] : responseText);

      setDiseases(parsed.diseases || []);
    } catch (err) {
      console.error("Error fetching health data:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <button
          onClick={handleTrackPollution}
          className="mb-6 px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg"
        >
          {loading ? "Loading..." : "Track Pollution"}
        </button>

        {/* AIR RELATED CARD */}
        {diseases.some((d) => d.name.toLowerCase().includes("respiratory") || d.name.toLowerCase().includes("asthma") || d.name.toLowerCase().includes("cardio")) && (
          <div className="bg-gray-800 p-6 rounded-lg mb-8">
            <div className="flex items-center mb-4">
              <i className="fas fa-wind text-red-500 mr-2" />
              <h1 className="text-2xl font-bold">Air Related Diseases</h1>
            </div>

            {diseases
              .filter((d) =>
                d.name.toLowerCase().includes("respiratory") ||
                d.name.toLowerCase().includes("asthma") ||
                d.name.toLowerCase().includes("cardio")
              )
              .map((disease, idx) => (
                <div key={idx} className="mb-6">
                  <h3 className="text-lg font-semibold">{disease.name}</h3>
                  <p className="text-gray-400 mb-2">{disease.description}</p>
                  <div className="flex justify-between flex-wrap gap-6">
                    <div>
                      <h4 className="text-blue-400 font-semibold">Artificial Precautions</h4>
                      <ul className="list-none">
                        {disease.artificial_precautions.map((item, i) => (
                          <li className="flex items-center" key={i}>
                            <i className="fas fa-tools mr-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-green-400 font-semibold">Natural Precautions</h4>
                      <ul className="list-none">
                        {disease.natural_precautions.map((item, i) => (
                          <li className="flex items-center" key={i}>
                            <i className="fas fa-leaf mr-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}

        {/* WATER RELATED CARD */}
        {diseases.some((d) => d.name.toLowerCase().includes("gastro") || d.name.toLowerCase().includes("cholera")) && (
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <i className="fas fa-tint text-red-500 mr-2" />
              <h1 className="text-2xl font-bold">Water Related Diseases</h1>
            </div>

            {diseases
              .filter((d) =>
                d.name.toLowerCase().includes("gastro") ||
                d.name.toLowerCase().includes("cholera")
              )
              .map((disease, idx) => (
                <div key={idx} className="mb-6">
                  <h3 className="text-lg font-semibold">{disease.name}</h3>
                  <p className="text-gray-400 mb-2">{disease.description}</p>
                  <div className="flex justify-between flex-wrap gap-6">
                    <div>
                      <h4 className="text-blue-400 font-semibold">Artificial Precautions</h4>
                      <ul className="list-none">
                        {disease.artificial_precautions.map((item, i) => (
                          <li className="flex items-center" key={i}>
                            <i className="fas fa-vial mr-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-green-400 font-semibold">Natural Precautions</h4>
                      <ul className="list-none">
                        {disease.natural_precautions.map((item, i) => (
                          <li className="flex items-center" key={i}>
                            <i className="fas fa-seedling mr-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
}
