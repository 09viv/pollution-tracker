import { useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery';
import 'slick-carousel';
import noUiSlider from 'nouislider';
import 'nouislider/distribute/nouislider.css';
import Map from "./map";


const Hero = () => {
    useEffect(() => {
        // Initialize Slick slider
        if (!$('.wildlife-slider').hasClass('slick-initialized')) {
          $('.wildlife-slider').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 3000,
            fade: true,
            cssEase: 'linear',
          });
        }
      
        // Initialize noUiSlider if it hasn't been initialized yet
        const dateSlider = document.getElementById('date-slider');
        if (dateSlider && !dateSlider.noUiSlider) {
          noUiSlider.create(dateSlider, {
            start: [new Date().getTime()],
            range: {
              min: new Date('2023-01-01').getTime(),
              max: new Date('2023-12-31').getTime(),
            },
            format: {
              to: (value) => {
                const date = new Date(value);
                return isNaN(date.getTime()) ? '' : date.toISOString().split('T')[0];
              },
              from: (value) => new Date(value).getTime(),
            },
          });
      
          dateSlider.noUiSlider.on('update', (values, handle) => {
            const dateInput = document.getElementById('date');
            if (dateInput) {
              dateInput.value = values[handle];
            }
          });
        }
      }, []);
      

  return (
    <div className="bg-neutral-900 text-white">
      {/* <header className="flex justify-between items-center p-6 ">
        <h1 className="text-2xl font-bold text-yellow-500">WildLife Tracker</h1>

        <nav>
          <ul className="flex space-x-6">
            {['Home', 'Wildlife Map', 'Protection Guide', 'Community', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-yellow-500">{item}</a>
              </li>
            ))}
          </ul>
        </nav>
        
      </header> */}

      <main className="flex flex-col lg:flex-row items-center justify-between p-12">
        <div className="text-center lg:text-left lg:w-1/2">
          <h2 className="text-5xl font-bold mb-4">Air & Water Quality Intelligence </h2>
          <p className="mb-6">Stay effortlessly informed about the air you breathe and the water you use.</p>
          <div className="flex justify-center lg:justify-start space-x-4">
          <div className="space-x-4">
              <a href="#hero" className="bg-[#FFB302] text-neutral-900 px-8 py-4 rounded-full font-bold inline-block hover:bg-[#FFB302]/90 transition-colors">Get Started</a>
              {/* <a href="#learn-more" className="border-2 border-[#FFB302] px-8 py-4 rounded-full font-bold inline-block hover:bg-[#FFB302]/10 transition-colors">Watch Demo</a> */}
            </div>
            {/* <button className="border border-yellow-500 text-yellow-500 px-6 py-2 rounded-full font-semibold">Learn More</button> */}
          </div>
        </div>

        <div className="wildlife-slider lg:w-1/3 mt-8 lg:mt-0">
          {[
            "SPCo9VuKrWjdkTTA2QSZ1VNwE-GvqH7MKFuFgXkEXLE",
            "Vy9pC9Qhr2KO8-KeMj9ZwQ0izUiJzuCskJYiKowVQwA",
            "xzZRuhErxaiTcWv2rQVQ5D2n7_2UqOSnigWuoQzqsYY",
            "_Am6logJrHW1dnYG5ImYbaOYsJ1uiqbQUcSkHxDuIpg",
            "8zAEZL6XqxzGhK2SxWgXePLrJbmHPk1i6jmcbkNKWqo",
            "fsQwN7qpM5LXvABFRx1BYdTtXBmPcrakdJ3NyzQuMUg"
          ].map((img, index) => (
            <div key={index}>
              <img
                src={`https://storage.googleapis.com/a1aa/image/${img}.jpg`}
                alt={`Wildlife image ${index + 1}`}
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </main>

     
      <section id="hero" className="bg-neutral-900 text-white py-20">
     
      <div className="pt-20 border-t border-neutral-800"/>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate__animated animate__fadeInUp">
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-[#FFB302]">Inform</span> & Protect Your Community
            </h1>
            <p className="text-xl mb-8">
              Track air and water quality, receive real-time alerts, and contribute to conservation efforts. Join our community of Pollution Trackers and make a difference.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              <div className="bg-neutral-800 p-6 rounded-lg">
                <div className="text-[#FFB302] text-4xl mb-2">500+</div>
                <div className="text-gray-300">Cities Tracked</div>
              </div>
              <div className="bg-neutral-800 p-6 rounded-lg">
                <div className="text-[#FFB302] text-4xl mb-2">10K+</div>
                <div className="text-gray-300">Active Users</div>
              </div>
            </div>

            {/* <div className="space-x-4">
              <a href="#get-started" className="bg-[#FFB302] text-neutral-900 px-8 py-4 rounded-full font-bold inline-block hover:bg-[#FFB302]/90 transition-colors">Get Started</a>
              <a href="#learn-more" className="border-2 border-[#FFB302] px-8 py-4 rounded-full font-bold inline-block hover:bg-[#FFB302]/10 transition-colors">Watch Demo</a>
            </div> */}
          </div>

          <div className="lg:pl-12 animate__animated animate__fadeInRight">
            <div className="bg-neutral-800 rounded-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFB302]/10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">Quick Pollution Search</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block mb-2 text-sm">Your Location</label>
                    <div className="flex gap-4">
                      <input type="text" placeholder="Enter city or region" className="flex-1 px-4 py-3 rounded-lg bg-neutral-700 focus:ring-2 focus:ring-[#FFB302] outline-none" />
                      <button type="button" className="bg-neutral-700 p-3 rounded-lg">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 text-sm">Date</label>
                      <input type="date" className="w-full px-4 py-3 rounded-lg bg-neutral-700 focus:ring-2 focus:ring-[#FFB302] outline-none" />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm">Disease</label>
                      <select className="w-full px-4 py-3 rounded-lg bg-neutral-700 focus:ring-2 focus:ring-[#FFB302] outline-none">
                        <option>None</option>
                        <option>Asthma</option>
                        <option>Bronchitis</option>
                        <option>Lung Cancer</option>
                        <option>Cholera</option>
                        <option>Typhoid Fever</option>
                      </select>
                    </div>
                  </div>
                  
                  <button className="w-full bg-[#FFB302] text-neutral-900 py-4 rounded-full font-bold hover:bg-[#FFB302]/90 transition-colors">
                    Track Pollution
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="wildlife-map" className="bg-neutral-900 py-20 text-white">
    <div className="pt-20 border-t border-neutral-800"/>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="animate__animated animate__fadeInLeft">
              <h2 className="text-3xl font-bold mb-6">Devices installation Map</h2>
              <p className="text-neutral-300 mb-6">Explore real-time installation, migration patterns, and protected areas in your region.</p>
              
              <div className="bg-neutral-700 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Map Filters</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-2">Activity Type</label>
                    <select className="w-full bg-neutral-600 rounded-lg px-4 py-2 border border-neutral-500">
                      <option>All Activity</option>
                      <option>Plantation</option>
                      <option>Device installation</option>
                      <option></option>
                    </select>
                  </div>
                  
                  {/* <div>
                    <label className="block text-sm mb-2">Species</label>
                    <select className="w-full bg-neutral-600 rounded-lg px-4 py-2 border border-neutral-500">
                      <option>All Species</option>
                      <option>Mammals</option>
                      <option>Birds</option>
                      <option>Reptiles</option>
                    </select>
                  </div> */}

                  <div>
                    <label className="block text-sm mb-2">Time Period</label>
                    <select className="w-full bg-neutral-600 rounded-lg px-4 py-2 border border-neutral-500">
                      <option>Real-time</option>
                      <option>Past 24 Hours</option>
                      <option>Past Week</option>
                      <option>Past Month</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="space-x-4">
              <a href="#hero" className="bg-[#FFB302] text-neutral-900 px-8 py-4 rounded-full font-bold inline-block hover:bg-[#FFB302]/90 transition-colors">Apply</a>
              {/* <a href="#learn-more" className="border-2 border-[#FFB302] px-8 py-4 rounded-full font-bold inline-block hover:bg-[#FFB302]/10 transition-colors">Watch Demo</a> */}
            </div>
            
            </div>
          </div>

          <div className="lg:col-span-2 animate__animated animate__fadeInRight">
            <div className="bg-neutral-700 rounded-xl  relative">
              <div id="map" className="absolute inset-0 rounded-xl">
                 < Map/>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section id="alerts" className="py-20 bg-neutral-900 text-white">
  <div className="container mx-auto px-6">
  <div className="pt-20 border-t border-neutral-800"/>

    <div className="text-center mb-16 animate__animated animate__fadeIn">
      <h2 className="text-4xl font-bold mb-4">Pollution Protection Alerts</h2>
      <p className="text-neutral-300 max-w-2xl mx-auto">
        Stay effortlessly informed about the air you breathe and the water you use.
      </p>
    </div>
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Current Alerts Panel */}
      <div className="lg:col-span-2 animate__animated animate__fadeInLeft">
        <div className="bg-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-6 flex items-center">
            <svg
              className="w-6 h-6 mr-2 text-[#FFB302]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            Active Alerts
          </h3>
          <div className="space-y-4" id="active-alerts">
            <div className="bg-neutral-800 p-4 rounded-lg border-l-4 border-red-500">
              <div className="flex justify-between items-start">
                <h4 className="font-semibold">Unhealthy for Sensitive Groups</h4>
                <span className="text-sm text-neutral-400">10 mins ago</span>
              </div>
              <p className="text-neutral-300 mt-2">
              People with respiratory or heart conditions may experience health effects.
               It's advised to limit outdoor activities and avoid strenuous exercises..
              </p>
            </div>
            <div className="bg-neutral-800 p-4 rounded-lg border-l-4 border-yellow-500">
              <div className="flex justify-between items-start">
                <h4 className="font-semibold">Unsafe Water Quality</h4>
                <span className="text-sm text-neutral-400">1 hour ago</span>
              </div>
              <p className="text-neutral-300 mt-2">
              The water's pH level is outside the safe range, making it unsafe for consumption or use. 
              Avoid drinking or coming into contact with the water.s.
              </p>
            </div>
            <div className="bg-neutral-800 p-4 rounded-lg border-l-4 border-blue-500">
              <div className="flex justify-between items-start">
                <h4 className="font-semibold">Water Quality: High Turbidity</h4>
                <span className="text-sm text-neutral-400">2 hours ago</span>
              </div>
              <p className="text-neutral-300 mt-2">
              The water is too cloudy and may contain harmful particles. 
              It's not safe for consumption or direct contact. Do not swim, and avoid using it for cooking or drinking.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Alert Settings Panel */}
      <div className="animate__animated animate__fadeInRight">
        <div className="bg-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-6">Alert Preferences</h3>
          <form className="space-y-6">
            <div>
              <label className="block mb-2 text-sm">Notification Range</label>
              <select className="w-full bg-neutral-800 rounded-lg px-4 py-2 border border-neutral-600">
                <option>5 km radius</option>
                <option>10 km radius</option>
                <option>25 km radius</option>
                <option>50 km radius</option>
              </select>
            </div>
            <div className="space-y-3">
              <label className="block mb-2 text-sm">Alert Types</label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="form-checkbox text-[#FFB302]"
                  defaultChecked=""
                />
                <span>Air quality</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="form-checkbox text-[#FFB302]"
                  defaultChecked=""
                />
                <span>Water quality</span>
              </label>
              {/* <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="form-checkbox text-[#FFB302]"
                  defaultChecked=""
                />
                <span>Migration Patterns</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="form-checkbox text-[#FFB302]"
                />
                <span>Community Reports</span>
              </label> */}
            </div>
            <div>
              <label className="block mb-2 text-sm">Notification Method</label>
              <div className="space-y-3">
                {/* <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="form-checkbox text-[#FFB302]"
                    defaultChecked=""
                  />
                  <span>Push Notifications</span>
                </label> */}
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="form-checkbox text-[#FFB302]"
                    defaultChecked=""
                  />
                  <span>Call Alerts</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="form-checkbox text-[#FFB302]"
                  />
                  <span>SMS Alerts</span>
                </label>
              </div>
            </div>
            <button className="w-full bg-[#FFB302] text-neutral-900 py-3 rounded-lg font-medium hover:bg-[#FFB302]/90 transition-colors">
              Update Preferences
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>







<>
  <section id="features" className="py-20 bg-neutral-900 text-white">
  <div className="pt-20 border-t border-neutral-800"/>

    <div className="container mx-auto px-6">
      <div className="text-center mb-16 animate__animated animate__fadeIn">
        <h2 className="text-4xl font-bold mb-4 text-white">Key Features</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Discover how our platform helps to protect from pollution and enhance your
          outdoor experience
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="bg-neutral-800 rounded-xl p-6 hover:shadow-lg transition-shadow animate__animated animate__fadeInUp">
          <div className="bg-yellow-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-yellow-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3 text-white">
            Real-Time Mapping
          </h3>
          <p className="text-gray-400 mb-4">
            Interactive heatmaps showing pollution activity patterns and movement
            in your area.
          </p>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Installations tracking
            </li>
            <li className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Seasonal activity patterns
            </li>
          </ul>
        </div>
        {/* Feature 2 */}
        <div
          className="bg-neutral-800 rounded-xl p-6 hover:shadow-lg transition-shadow animate__animated animate__fadeInUp"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="bg-yellow-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-yellow-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3 text-white">Smart Alerts</h3>
          <p className="text-gray-400 mb-4">
            Receive instant notifications about alerts and protected
            zones.
          </p>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Air pollution alerts
            </li>
            <li className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Water pollution alerts
            </li>
          </ul>
        </div>
        {/* Feature 3 */}
        <div
          className="bg-neutral-800 rounded-xl p-6 hover:shadow-lg transition-shadow animate__animated animate__fadeInUp"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="bg-yellow-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-yellow-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3 text-white">
            Community Reporting
          </h3>
          <p className="text-gray-400 mb-4">
            Contribute to environment conservation by using our application and collecting data for the precautions.
          </p>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Disease information
            </li>
            <li className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              GPS location tracking
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-16 text-center">
        <a
          href="#get-started"
          className="inline-block bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-yellow-400 transition-colors"
        >
          Start Exploring Now
        </a>
      </div>
    </div>
  </section>
</>










<section id="protection-guide" className="py-20 bg-neutral-900 text-white ">
  <div className="container mx-auto px-6">

  <div className="pt-20 border-t border-neutral-800"/>

    <div className="text-center mb-16 animate__animated animate__fadeIn">

      <h2 className="text-4xl font-bold mb-4 text-white">
        Protection Guide
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Learn how to protect and preserve yourself and environment in your area with our
        comprehensive guidelines
      </p>
    </div>
    <div className="grid lg:grid-cols-2 gap-12">
      <div className="animate__animated animate__fadeInLeft">
        <div className="bg-neutral-800 rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Essential Protection Guidelines
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500 rounded-full p-2 mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-white">
                  Wear a Mask
                  </h4>
                  <p className="text-gray-400">
                  If you must go outside during high pollution levels,
                   wear a high-efficiency particulate air (HEPA) mask or N95 mask to filter harmful particles from the air.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500 rounded-full p-2 mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-white">
                  Stay Indoors During Poor Air Quality
                  </h4>
                  <p className="text-gray-400">
                  When air quality is unhealthy, limit outdoor activities to avoid inhaling pollutants.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500 rounded-full p-2 mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-white">
                  Use Water Filtration Systems
                  </h4>
                  <p className="text-gray-400">
                  Install water filters or purifiers at home to ensure safe drinking water, 
                  especially in areas with known water contamination issues.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="animate__animated animate__fadeInRight">
        <div className="bg-neutral-800 rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Seasonal Protection Tips
            </h3>
            <div className="space-y-6">
              <div className="group cursor-pointer">
                <div className="flex items-center justify-between p-4 bg-neutral-900 rounded-lg hover:bg-yellow-500/100 transition-colors">
                  <h4 className="font-semibold text-white">
                    Spring Season
                  </h4>
                  <svg
                    className="w-5 h-5 transform group-hover:rotate-180 transition-transform text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <div className="hidden group-hover:block p-4">
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Keep windows closed and use air purifiers to reduce pollen and pollution.</li>
                    <li>Ensure water safety by filtering or boiling due to possible contamination.</li>
                    <li>Limit outdoor exposure during high allergen and pollution levels.</li>
                  </ul>
                </div>
              </div>
              <div className="group cursor-pointer">
                <div className="flex items-center justify-between p-4 bg-neutral-900 rounded-lg hover:bg-yellow-500/100 transition-colors">
                  <h4 className="font-semibold text-white">
                    Summer Season
                  </h4>
                  <svg
                    className="w-5 h-5 transform group-hover:rotate-180 transition-transform text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <div className="hidden group-hover:block p-4">
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Limit outdoor activities during peak heat and pollution; wear a mask if necessary.</li>
                  <li>Avoid swimming in contaminated water bodies and rely on purified drinking water.</li>
                  <li>Stay hydrated with safe, filtered water to avoid waterborne diseases.</li>

                  </ul>
                </div>
              </div>
              <div className="group cursor-pointer">
                <div className="flex items-center justify-between p-4 bg-neutral-900 rounded-lg hover:bg-yellow-500/100 transition-colors">
                  <h4 className="font-semibold text-white">
                    Winter Season
                  </h4>
                  <svg
                    className="w-5 h-5 transform group-hover:rotate-180 transition-transform text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <div className="hidden group-hover:block p-4">
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Keep indoor air clean using air purifiers and seal windows to prevent pollution infiltration.</li>
                  <li>Insulate water pipes to avoid contamination and freezing.</li>
                  <li>Drink filtered water to avoid any waterborne health risks.</li>

                  </ul>
                </div>
              </div>
              <div className="group cursor-pointer">
                <div className="flex items-center justify-between p-4 bg-neutral-900 rounded-lg hover:bg-yellow-500/100 transition-colors">
                  <h4 className="font-semibold text-white">
                    Fall Season
                  </h4>
                  <svg
                    className="w-5 h-5 transform group-hover:rotate-180 transition-transform text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <div className="hidden group-hover:block p-4">
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Monitor air quality and limit outdoor activities during high particulate matter levels.</li>
                  <li>Clean rainwater collection systems and filter water after rainfall.</li>
                  <li>Boil or filter water to ensure safety after heavy rain or storms.</li>


                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-12 text-center">
      <a
        href="#download-guide"
        className="inline-block bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-yellow-500/90 transition-colors"
      >
        Download Complete Guide
      </a>
    </div>
  </div>
</section>














{/* 
<footer id="footer" className="relative pt-2 pb-10 overflow-hidden rotating-border">
  <div className="">
    <div className="pt-8 border-t border-neutral-800">
    <div className="container mx-auto px-6">
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-[#FFB302]">Wildlife Tracker</h3>
        <p className="text-neutral-400">
          Protecting wildlife through technology and community engagement.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="text-neutral-400 hover:text-[#FFB302]">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a href="#" className="text-neutral-400 hover:text-[#FFB302]">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
          <a href="#" className="text-neutral-400 hover:text-[#FFB302]">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z" />
            </svg>
          </a>
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
        <ul className="space-y-4">
          <li>
            <a href="/" className="text-neutral-400 hover:text-[#FFB302]">
              Home
            </a>
          </li>
          <li>
            <a
              href="/wildlife-map"
              className="text-neutral-400 hover:text-[#FFB302]"
            >
              Wildlife Map
            </a>
          </li>
          <li>
            <a
              href="/protection-guide"
              className="text-neutral-400 hover:text-[#FFB302]"
            >
              Protection Guide
            </a>
          </li>
          <li>
            <a
              href="/community"
              className="text-neutral-400 hover:text-[#FFB302]"
            >
              Community
            </a>
          </li>
          <li>
            <a href="/about" className="text-neutral-400 hover:text-[#FFB302]">
              About
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-neutral-400 hover:text-[#FFB302]"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-6">Resources</h4>
        <ul className="space-y-4">
          <li>
            <a
              href="/privacy"
              className="text-neutral-400 hover:text-[#FFB302]"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms" className="text-neutral-400 hover:text-[#FFB302]">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="/faq" className="text-neutral-400 hover:text-[#FFB302]">
              FAQ
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-neutral-400 hover:text-[#FFB302]"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
        <p className="text-neutral-400 mb-4">
          Stay updated with latest wildlife activities and protection
          guidelines.
        </p>
        <form className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:ring-2 focus:ring-[#FFB302] focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#FFB302] text-neutral-900 py-2 rounded-lg font-medium hover:bg-[#FFB302]/90 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
    <div className="border-t border-neutral-800 pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-neutral-400 text-sm">
          © 2024 Wildlife Tracker. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-neutral-400 hover:text-[#FFB302] text-sm">
            Terms of Service
          </a>
          <a href="#" className="text-neutral-400 hover:text-[#FFB302] text-sm">
            Privacy Policy
          </a>
          <a href="#" className="text-neutral-400 hover:text-[#FFB302] text-sm">
            Cookie Policy
          </a>
        </div>
      </div>
    </div>
  </div>    </div>
  </div>

 
</footer> */}

    </div>
  );
};

export default Hero;
