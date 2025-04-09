import React from "react";
import imgDoctor from "../../Assets/Doctor.jpg";
import imgInterview from "../../Assets/Interview.jpg";
import imgLearn from "../../Assets/Learn.jpg";
import imgPlatform from "../../Assets/Platform.jpg";

function UseCases() {
  return (
    <section id="UseCases" className="py-16 sm:py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
            Use Cases
          </h2>

          <div className="h-1 w-24 bg-blue-500 mx-auto my-8"></div>

          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            How we can help you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {/* Public Services Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
            <div className="h-48 overflow-hidden">
              <img
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                src={imgPlatform}
                alt="Public Services"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Public Services Assistance
              </h3>
              <div className="h-0.5 w-12 bg-blue-500 mb-4"></div>
              <p className="text-gray-600">
                Deaf individuals can use our app to access government services
                independently, with real-time translation ensuring clear
                communication. This empowers them to engage confidently with
                public institutions, promoting inclusion and autonomy.
              </p>
            </div>
          </div>

          {/* Healthcare Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
            <div className="h-48 overflow-hidden">
              <img
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                src={imgDoctor}
                alt="Healthcare"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Healthcare Communication
              </h3>
              <div className="h-0.5 w-12 bg-blue-500 mb-4"></div>
              <p className="text-gray-600">
                Our app bridges the communication gap between deaf patients and
                healthcare providers, translating spoken language into ISL and
                vice versa, enhancing the quality of care.
              </p>
            </div>
          </div>

          {/* Workplace Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
            <div className="h-48 overflow-hidden">
              <img
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                src={imgLearn}
                alt="Workplace Integration"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Workplace Integration
              </h3>
              <div className="h-0.5 w-12 bg-blue-500 mb-4"></div>
              <p className="text-gray-600">
                In a diverse workplace, our app ensures seamless interaction
                between deaf employees and their colleagues, promoting an
                inclusive and collaborative environment.
              </p>
            </div>
          </div>

          {/* Education Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
            <div className="h-48 overflow-hidden">
              <img
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                src={imgInterview}
                alt="Educational Accessibility"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Educational Accessibility
              </h3>
              <div className="h-0.5 w-12 bg-blue-500 mb-4"></div>
              <p className="text-gray-600">
                Deaf students can use our app to translate spoken lessons into
                Indian Sign Language (ISL) in real-time, ensuring they receive
                the same educational experience as their peers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UseCases;
