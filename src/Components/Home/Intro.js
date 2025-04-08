import React from "react";
import CountUp from "react-countup";

function Intro() {
  return (
    <section
      id="intro"
      className="bg-gradient-to-b from-gray-100 to-white py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 pb-2">
            The challenge is huge
          </h2>

          <div className="h-1 w-24 bg-blue-500 mx-auto my-2"></div>

          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-16">
            How to improve communication between deaf and hearing people?
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <CountUp
                start={0}
                end={466000000}
                duration={3}
                className="text-4xl md:text-5xl font-bold text-blue-600"
                suffix="+"
                enableScrollSpy
                useIndianSeparators
              />
              <div className="h-0.5 w-16 bg-blue-500 mx-auto my-4"></div>
              <p className="text-gray-600 mt-2">
                Number of people with hearing loss in the world
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <CountUp
                start={0}
                end={63000000}
                duration={3}
                className="text-4xl md:text-5xl font-bold text-blue-600"
                suffix="+"
                enableScrollSpy
                useIndianSeparators
              />
              <div className="h-0.5 w-16 bg-blue-500 mx-auto my-4"></div>
              <p className="text-gray-600 mt-2">
                Number of people with hearing loss in India
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <CountUp
                start={0}
                end={1260000}
                duration={3}
                className="text-4xl md:text-5xl font-bold text-blue-600"
                suffix="+"
                enableScrollSpy
                useIndianSeparators
              />
              <div className="h-0.5 w-16 bg-blue-500 mx-auto my-4"></div>
              <p className="text-gray-600 mt-2">
                Indian Sign Language speakers in India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
