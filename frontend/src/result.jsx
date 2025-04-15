
const result = () => {
  return (
    <>
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>Environmental Dashboard</title>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    rel="stylesheet"
  />
  <div className="container mx-auto p-4">
    <header className="text-center mb-8">
      <h1 className="text-4xl font-bold text-green-500">
        Environmental Dashboard
      </h1>
      <p className="text-lg text-gray-300">
        Monitor air and water quality indices in real-time, understand health
        impacts, and learn about preventive measures.
      </p>
    </header>
    <section>
      <div className="flex items-center mb-4">
        <i className="fas fa-sliders-h text-3xl text-blue-500 mr-2"></i>
        <h2 className="text-2xl font-bold text-blue-500">Air Quality Data</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white text-black p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold">Air Quality Index (AQI)</h3>
          <p className="text-gray-500">Distribution of air quality levels</p>
          <img
            alt="Donut chart showing distribution of air quality levels with segments for Good, Moderate, Unhealthy for Sensitive Groups, Unhealthy, Very Unhealthy, and Hazardous"
            className="mx-auto my-4"
            src="https://placehold.co/300x200?text=Donut+Chart"
          />
          <div className="flex flex-wrap justify-center text-sm">
            <div className="flex items-center mr-4">
              <span className="w-4 h-4 bg-green-500 inline-block mr-1"></span>
              Good (0-50)
            </div>
            <div className="flex items-center mr-4">
              <span className="w-4 h-4 bg-orange-500 inline-block mr-1"></span>
              Moderate (51-100)
            </div>
            <div className="flex items-center mr-4">
              <span className="w-4 h-4 bg-yellow-500 inline-block mr-1"></span>
              Unhealthy for Sensitive Groups (101-150)
            </div>
            <div className="flex items-center mr-4">
              <span className="w-4 h-4 bg-red-500 inline-block mr-1"></span>
              Unhealthy (151-200)
            </div>
            <div className="flex items-center mr-4">
              <span className="w-4 h-4 bg-purple-500 inline-block mr-1"></span>
              Very Unhealthy (201-300)
            </div>
            <div className="flex items-center">
              <span className="w-4 h-4 bg-indigo-500 inline-block mr-1"></span>
              Hazardous (301+)
            </div>
          </div>
        </div>
        <div className="bg-white text-black p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold">Pollutant Concentration</h3>
          <p className="text-gray-500">Distribution of major air pollutants</p>
          <img
            alt="Donut chart showing distribution of major air pollutants with segments for PM2.5, PM10, CO, and NO2"
            className="mx-auto my-4"
            src="https://placehold.co/300x200?text=Donut+Chart"
          />
          <div className="flex flex-wrap justify-center text-sm">
            <div className="flex items-center mr-4">
              <span className="w-4 h-4 bg-blue-500 inline-block mr-1"></span>
              PM2.5
            </div>
            <div className="flex items-center mr-4">
              <span className="w-4 h-4 bg-blue-300 inline-block mr-1"></span>
              PM10
            </div>
            <div className="flex items-center mr-4">
              <span className="w-4 h-4 bg-purple-300 inline-block mr-1"></span>
              CO
            </div>
            <div className="flex items-center">
              <span className="w-4 h-4 bg-purple-500 inline-block mr-1"></span>
              NO2
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <>
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>Water Quality Data</title>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    rel="stylesheet"
  />
  <div className="container mx-auto p-4">
    <div className="flex items-center mb-4">
      <div className="bg-teal-500 p-2 rounded-full">
        <i className="fas fa-tint text-2xl text-white"></i>
      </div>
      <h1 className="text-2xl font-bold ml-2 text-teal-400">
        Water Quality Data
      </h1>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white text-black p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold">Water Quality Index (WQI)</h2>
        <p className="text-gray-600">Distribution of water quality levels</p>
        <img
          alt="Water Quality Index Chart"
          className="my-4 mx-auto"
          src="https://placehold.co/300x300?text=WQI+Chart"
        />
        <div className="flex flex-wrap justify-center">
          <div className="w-1/2 md:w-1/4 text-center">
            <div className="text-teal-500">Excellent (90-100)</div>
            <div className="text-teal-500">(20%)</div>
          </div>
          <div className="w-1/2 md:w-1/4 text-center">
            <div className="text-teal-500">Good (70-89)</div>
            <div className="text-teal-500">(30%)</div>
          </div>
          <div className="w-1/2 md:w-1/4 text-center">
            <div className="text-orange-500">Fair (50-69)</div>
            <div className="text-orange-500">(25%)</div>
          </div>
          <div className="w-1/2 md:w-1/4 text-center">
            <div className="text-orange-500">Poor (25-49)</div>
            <div className="text-orange-500">(15%)</div>
          </div>
          <div className="w-1/2 md:w-1/4 text-center">
            <div className="text-red-500">Very Poor (0-24)</div>
            <div className="text-red-500">(10%)</div>
          </div>
        </div>
      </div>
      <div className="bg-white text-black p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold">Water Parameters</h2>
        <p className="text-gray-600">
          Distribution of key water quality parameters
        </p>
        <img
          alt="Water Parameters Chart"
          className="my-4 mx-auto"
          src="https://placehold.co/300x300?text=Water+Parameters+Chart"
        />
        <div className="flex flex-wrap justify-center">
          <div className="w-1/2 md:w-1/3 text-center">
            <div className="text-blue-500">pH (6.5-8.5)</div>
            <div className="text-blue-500">(35%)</div>
          </div>
          <div className="w-1/2 md:w-1/3 text-center">
            <div className="text-blue-500">Turbidity</div>
            <div className="text-blue-500">(25%)</div>
          </div>
          <div className="w-1/2 md:w-1/3 text-center">
            <div className="text-purple-500">TDS</div>
            <div className="text-purple-500">(40%)</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>




  <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Health Conditions</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  />
  <div className="container mx-auto p-4">
    {/* Air Related Diseases Card */}
    <div className="bg-gray-800 p-6 rounded-lg mb-8">
      <div className="flex items-center mb-4">
        <i className="fas fa-wind text-red-500 mr-2" />
        <h1 className="text-2xl font-bold">Air Related Diseases</h1>
      </div>
      <div className="flex items-center mb-4">
        <h2 className="text-xl">Respiratory Conditions</h2>
        <span className="ml-2 bg-red-600 text-white text-sm px-2 py-1 rounded">
          High Risk
        </span>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Asthma</h3>
        <p className="text-gray-400 mb-2">
          Exacerbated by exposure to particulate matter and ozone
        </p>
        <div className="flex justify-between">
          <div>
            <h4 className="text-blue-400 font-semibold">
              Artificial Precautions
            </h4>
            <ul className="list-none">
              <li className="flex items-center">
                <i className="fas fa-wind mr-2" />
                Use HEPA air purifiers
              </li>
              <li className="flex items-center">
                <i className="fas fa-pills mr-2" />
                Regular inhaler use as prescribed
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-green-400 font-semibold">
              Natural Precautions
            </h4>
            <ul className="list-none">
              <li className="flex items-center">
                <i className="fas fa-tree mr-2" />
                Spend time in green spaces
              </li>
              <li className="flex items-center">
                <i className="fas fa-leaf mr-2" />
                Maintain indoor plants for air purification
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold">COPD</h3>
        <p className="text-gray-400 mb-2">
          Chronic inflammation and airway obstruction
        </p>
        <div className="flex justify-between">
          <div>
            <h4 className="text-blue-400 font-semibold">
              Artificial Precautions
            </h4>
            <ul className="list-none">
              <li className="flex items-center">
                <i className="fas fa-stethoscope mr-2" />
                Regular medical check-ups
              </li>
              <li className="flex items-center">
                <i className="fas fa-wind mr-2" />
                Air quality monitoring systems
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-green-400 font-semibold">
              Natural Precautions
            </h4>
            <ul className="list-none">
              <li className="flex items-center">
                <i className="fas fa-smog mr-2" />
                Avoid polluted areas
              </li>
              <li className="flex items-center">
                <i className="fas fa-lungs mr-2" />
                Regular breathing exercises
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* Water Related Diseases Card */}
    <div className="bg-gray-800 p-6 rounded-lg">
      <div className="flex items-center mb-4">
        <i className="fas fa-tint text-red-500 mr-2" />
        <h1 className="text-2xl font-bold">Water Related Diseases</h1>
      </div>
      <div className="flex items-center mb-4">
        <h2 className="text-xl">Gastrointestinal Issues</h2>
        <span className="ml-2 bg-red-600 text-white text-sm px-2 py-1 rounded">
          High Risk
        </span>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Cholera</h3>
        <p className="text-gray-400 mb-2">
          Bacterial infection causing severe diarrhea
        </p>
        <div className="flex justify-between">
          <div>
            <h4 className="text-blue-400 font-semibold">
              Artificial Precautions
            </h4>
            <ul className="list-none">
              <li className="flex items-center">
                <i className="fas fa-water mr-2" />
                Water purification systems
              </li>
              <li className="flex items-center">
                <i className="fas fa-vial mr-2" />
                Regular water quality testing
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-green-400 font-semibold">
              Natural Precautions
            </h4>
            <ul className="list-none">
              <li className="flex items-center">
                <i className="fas fa-filter mr-2" />
                Natural water filtration
              </li>
              <li className="flex items-center">
                <i className="fas fa-seedling mr-2" />
                Watershed protection
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</>


</>

  )
}

export default result
