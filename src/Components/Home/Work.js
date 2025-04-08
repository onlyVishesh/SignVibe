import React from "react";
import working from "../../Assets/working.gif";

const Work = () => {
  return (
    <section id="working" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
            How does it work
          </h2>

          <div className="h-1 w-24 bg-blue-500 mx-auto my-8"></div>

          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Complex technology in simple words
          </p>
        </div>

        <div className="relative">
          <img
            src={working}
            alt="Working process animation"
            className="w-full object-cover -my-10 md:-my-14 -z-10 -scale-x-100 mx-auto max-w-4xl h-96 "
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-50 rounded-xl p-6 shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                Speaker
              </h3>
              <div className="h-0.5 w-24 bg-blue-500 mb-4"></div>
              <p className="text-gray-600">
                Converts speech into text
                <br />
                using NLP techniques.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <h3 className="text-xl md:text-2xl font-bold text-blue-900">
                SignVibe
              </h3>
              <div className="h-0.5 w-24 bg-blue-500 mb-4"></div>
              <p className="text-blue-800">
                Transcribes speech to text
                <br />
                and ISL to text in real-time.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                ISL Signer
              </h3>
              <div className="h-0.5 w-24 bg-blue-500 mb-4"></div>
              <p className="text-gray-600">
                Converts text into ISL
                <br />
                using a 3D avatar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
