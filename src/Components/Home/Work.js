import React from "react";
import working from "../../Assets/working.gif";

const Work = () => {
  return (
    <section id="working">
      <div className="container">
        <div className="row my-5">
          <div
            className="col-md-12 d-flex justify-content-center align-items-center"
            style={{ flexDirection: "column" }}
          >
            <div className="text-orange-600 text-center text-4xl md:text-5xl ">
              How does it work
            </div>
            <div className="col-lg-4 divider my-4" />
            <div className="text-center mb-4 text-lg md:text-xl">
              Complex technology in simple words
            </div>
            <img
              src={working}
              alt=""
              className="-my-10 md:-my-32 -z-10 -scale-x-100"
            />
            <div className="flex space-x-3 sm:gap-8 md:gap-16">
              <div className="text-center divide-y-2 space-y-2 divide-orange-600">
                <h4 className="text-xl md:text-2xl font-semibold">Speaker</h4>
                <p className="text-md md:text-lg pt-2">
                  Converts speech into text <br />
                  using NLP techniques.
                </p>
              </div>

              <div className="text-center divide-y-2 space-y-2 divide-orange-600">
                <h4 className="text-xl md:text-2xl font-semibold">HandVanni</h4>
                <p className="text-md md:text-lg pt-2">
                  Transcribes speech to text <br />
                  and ISL to text in real-time.
                </p>
              </div>

              <div className="text-center divide-y-2 space-y-2 divide-orange-600">
                <h4 className="text-xl md:text-2xl font-semibold">
                  ISL Signer
                </h4>
                <p className="text-md md:text-lg pt-2">
                  Converts text into ISL <br />
                  using a 3D avatar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
