import React from "react";
import CountUp from "react-countup";

function Intro() {
  return (
    <section id="intro" className="bg-gray-100 py-2">
      <div className="container">
        <div className="row my-5">
          <div
            className="col-md-12 d-flex justify-content-center align-items-center"
            style={{ flexDirection: "column" }}
          >
            <div className="text-orange-600 text-center text-4xl md:text-5xl ">
              The challenge is huge
            </div>
            <div className="col-lg-4 divider my-4" />
            <div className="text-center mb-4 text-lg md:text-xl pb-4">
              How to improve communication between deaf and hearing people?
            </div>

            <div className="flex gap-5 flex-col  lg:flex-row ">
              <div className="text-center divide-y-2 space-y-2 divide-orange-600">
                <CountUp
                  start={0}
                  end={466000000}
                  duration={5}
                  className="text-3xl md:text-5xl"
                  suffix="+"
                  enableScrollSpy
                  useIndianSeparators
                />
                <div className="text-md md:text-lg pt-2">
                  Number of people with hearing loss in the world
                </div>
              </div>
              <div className="text-center divide-y-2 space-y-2 divide-orange-600">
                <CountUp
                  start={0}
                  end={63000000}
                  duration={5}
                  className="text-3xl md:text-5xl"
                  suffix="+"
                  enableScrollSpy
                  useIndianSeparators
                />
                <div className="text-md md:text-lg pt-2">
                  Number of people with hearing loss in the world
                </div>
              </div>
              <div className="text-center divide-y-2 space-y-2 divide-orange-600 ">
                <CountUp
                  start={0}
                  end={1260000}
                  duration={5}
                  className="text-3xl md:text-5xl"
                  suffix="+"
                  enableScrollSpy
                  useIndianSeparators
                />
                <div className="text-md md:text-lg pt-2">
                  Indian Sign Language speakers in the India
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
