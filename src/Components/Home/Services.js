import React from "react";
import { Link } from "react-router-dom";
import imgApp from "../../Assets/App.png";
import imgConvert from "../../Assets/convert.png";
import imgLearnSign from "../../Assets/learn-sign.jpg";

function Services() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/SignVibe.apk";
    link.download = "SignVibe.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="services"
      className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
            Our Services
          </h2>

          <div className="h-1 w-24 bg-blue-500 mx-auto my-8"></div>

          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            A comprehensive and aesthetic Indian Sign Language toolkit. A
            minimalist yet informative interface. Wide range of features
            containing different functionalities that are necessary to work with
            ISL. What else do you need anyway! We have everything wrapped up
            here!
            <br className="hidden md:block" />
            Dive into our diverse services and let us know about your
            experience!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* App Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col h-full transform hover:-translate-y-2">
            <div className="relative">
              <img
                className="w-full h-56 object-cover"
                src={imgApp}
                alt="Mobile App"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Download Our App
              </h3>
              <p className="text-gray-600">
                Get the full experience of Indian Sign Language right on your
                Android device! Download our app now and start exploring
                features like video creation, sign language learning, and much
                more. Your journey to mastering ISL starts here!
              </p>
            </div>

            <div className="px-6 pb-6">
              <button
                onClick={handleDownload}
                className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-center"
              >
                DOWNLOAD NOW
              </button>
            </div>
          </div>

          {/* Convert Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col h-full transform hover:-translate-y-2">
            <div className="relative">
              <img
                className="w-full h-56 object-cover"
                src={imgConvert}
                alt="Convert to ISL"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Convert To ISL
              </h3>
              <p className="text-gray-600">
                Want to convert audio or text into Indian Sign Language? Then,
                you are in the right place! Provide your audio by speaking into
                your mic or type the text that you want to convert into ISL and
                within a few clicks watch the magic happen!
              </p>
            </div>

            <div className="px-6 pb-6">
              <Link
                to="/convert"
                className="block w-full py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-center"
              >
                EXPLORE NOW
              </Link>
            </div>
          </div>

          {/* Learn ISL Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col h-full transform hover:-translate-y-2">
            <div className="relative">
              <img
                className="w-full h-56 object-cover"
                src={imgLearnSign}
                alt="Learn ISL"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Learn ISL
              </h3>
              <p className="text-gray-600">
                Curious about Indian Sign Language? Then, learn ISL from us!
                Select a sign from the list, watch it as many times as you want
                and learn ISL. Learning something is always a good thing, you
                know!
              </p>
            </div>

            <div className="px-6 pb-6">
              <Link
                to="/learn-sign"
                className="block w-full py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-center"
              >
                EXPLORE NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
