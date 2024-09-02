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
    <section id="services" className="bg-gray-100 py-2">
      <div className="container ">
        <div className="row mt-5">
          <div
            className="col-md-12 d-flex justify-content-center align-items-center"
            style={{ flexDirection: "column" }}
          >
            <div className="text-orange-600 text-center text-4xl md:text-5xl">
              Our Services
            </div>
            <div className="col-lg-4 divider my-4" />
            <div className="text-center mb-4 text-lg md:text-xl">
              A comprehensive and aesthetic Indian Sign Language toolkit. A
              minimalist yet informative interface. Wide range of features
              containing different functionalities that are necessary to work
              with ISL. What else do you need anyway! We have everything wrapped
              up here! <br /> Dive into our diverse services and let us know
              about your experience!
            </div>
          </div>
        </div>
        <div className="card-deck">
          <div className="row">
            <div className="col-lg-4 mt-5">
              <div className="card col-lg-12 h-100 d-flex flex-column justify-content-between card-background">
                <img
                  className="card-img-top"
                  src={imgApp}
                  alt="Videos Clipart"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Download Our App</h5>
                  <p className="card-text">
                    Get the full experience of Indian Sign Language right on
                    your Android device! Download our app now and start
                    exploring features like video creation, sign language
                    learning, and much more. Your journey to mastering ISL
                    starts here!
                  </p>
                </div>
                <div className="card-footer p-0 m-0" style={{ border: "none" }}>
                  <button
                    to="/all-videos"
                    className="btn btn-info w-100 p-3"
                    style={{ fontSize: "large" }}
                    onClick={handleDownload}
                  >
                    DOWNLOAD NOW!
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-5">
              <div className="card col-lg-12 h-100 d-flex flex-column justify-content-between card-background">
                <img
                  className="card-img-top "
                  src={imgConvert}
                  alt="Convert Clipart"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Convert To ISL</h5>
                  <p className="card-text">
                    Want to convert audio or text into Indian Sign Language?
                    Then, you are in the right place! Provide your audio by
                    speaking into your mic or type the text that you want to
                    convert into ISL and within a few clicks watch the magic
                    happen!
                  </p>
                </div>
                <div className="card-footer p-0 m-0" style={{ border: "none" }}>
                  <Link
                    to="/convert"
                    className="btn btn-info w-100 p-3"
                    style={{ fontSize: "large" }}
                  >
                    EXPLORE NOW!
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-5">
              <div className="card col-lg-12 h-100 d-flex flex-column justify-content-between card-background">
                <img
                  className="card-img-top"
                  src={imgLearnSign}
                  alt="Learn Sign Clipart"
                />
                <hr className="m-0"></hr>
                <div className="card-body">
                  <h5 className="card-title text-center">Learn ISL</h5>
                  <p className="card-text">
                    Curious about Indian Sign Language? Then, learn ISL from us!
                    Select a sign from the list, watch it as many times as you
                    want and learn ISL. Learning something is always a good
                    thing, you know!
                  </p>
                </div>
                <div className="card-footer p-0 m-0" style={{ border: "none" }}>
                  <Link
                    to="/learn-sign"
                    className="btn btn-info w-100 p-3"
                    style={{ fontSize: "large" }}
                  >
                    EXPLORE NOW!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
