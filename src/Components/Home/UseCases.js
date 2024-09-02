import React from "react";
import { Link } from "react-router-dom";
import imgApp from "../../Assets/App.png";
import imgLearn from "../../Assets/Learn.jpg";
import imgDoctor from "../../Assets/Doctor.jpg";
import imgInterview from "../../Assets/Interview.jpg";
import imgPlatform from "../../Assets/Platform.jpg";

function UseCases() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/SignVibe.apk";
    link.download = "SignVibe.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section id="UseCases" className="bg-gray-100 py-2">
      <div className="container ">
        <div className="row mt-5">
          <div
            className="col-md-12 d-flex justify-content-center align-items-center"
            style={{ flexDirection: "column" }}
          >
            <div className="text-orange-600 text-center text-4xl md:text-5xl">
              Use Cases
            </div>
            <div className="col-lg-4 divider my-4" />
            <div className="text-center mb-4 text-lg md:text-xl">
              How we can help you
            </div>
          </div>
        </div>
        <div className="card-deck">
          <div className="flex flex-wrap flex-col md:flex-row gap-10 justify-center items-center">
            <div className="col-lg-4 mt-5">
              <div className="card col-lg-12 h-100 d-flex flex-column justify-content-between card-background">
                <img
                  className="card-img-top"
                  src={imgPlatform}
                  alt="Videos Clipart"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">
                    Public Services Assistance
                  </h5>
                  <p className="card-text">
                    Deaf individuals can use our app to access government
                    services independently, with real-time translation ensuring
                    clear communication. This empowers them to engage
                    confidently with public institutions, promoting inclusion
                    and autonomy.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-5">
              <div className="card col-lg-12 h-100 d-flex flex-column justify-content-between card-background">
                <img
                  className="card-img-top"
                  src={imgDoctor}
                  alt="Videos Clipart"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">
                    Healthcare Communication
                  </h5>
                  <p className="card-text">
                    Our app bridges the communication gap between deaf patients
                    and healthcare providers, translating spoken language into
                    ISL and vice versa, enhancing the quality of care.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-5">
              <div className="card col-lg-12 h-100 d-flex flex-column justify-content-between card-background">
                <img
                  className="card-img-top"
                  src={imgLearn}
                  alt="Videos Clipart"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">
                    Workplace Integration
                  </h5>
                  <p className="card-text">
                    In a diverse workplace, our app ensures seamless interaction
                    between deaf employees and their colleagues, promoting an
                    inclusive and collaborative environment.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-5">
              <div className="card col-lg-12 h-100 d-flex flex-column justify-content-between card-background">
                <img
                  className="card-img-top"
                  src={imgInterview}
                  alt="Videos Clipart"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">
                    Educational Accessibility
                  </h5>
                  <p className="card-text">
                    Deaf students can use our app to translate spoken lessons
                    into Indian Sign Language (ISL) in real-time, ensuring they
                    receive the same educational experience as their peers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UseCases;
