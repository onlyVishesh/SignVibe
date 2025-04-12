import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-input-slider";
import "../App.css";

import xbot from "../Models/xbot/xbot.glb";
import xbotPic from "../Models/xbot/xbot.png";
import ybot from "../Models/ybot/ybot.glb";
import ybotPic from "../Models/ybot/ybot.png";

import * as alphabets from "../Animations/alphabets";
import { defaultPose } from "../Animations/defaultPose";
import * as hindi from "../Animations/hindi";
import * as numbers from "../Animations/numbers";
import * as words from "../Animations/words";

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function LearnSign() {
  const [bot, setBot] = useState(ybot);
  const [speed, setSpeed] = useState(0.2);
  const [pause, setPause] = useState(800);
  const [isEnglish, setIsEnglish] = useState(true);
  const [activeTab, setActiveTab] = useState(
    isEnglish ? "alphabets" : "vowels"
  );
  const [modelLoaded, setModelLoaded] = useState(false);

  const componentRef = useRef({});
  const { current: ref } = componentRef;

  const numToWord = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    10: "Ten",
  };

  const hindiNumbers = {
    0: "०",
    1: "१",
    2: "२",
    3: "३",
    4: "४",
    5: "५",
    6: "६",
    7: "७",
    8: "८",
    9: "९",
  };

  const hindiLetters = {
    // Hindi vowels and their representations
    अ: "A",
    आ: "Aa",
    इ: "I",
    ई: "Ii",
    उ: "U",
    ऊ: "Uu",
    ऋ: "Ri",
    ॠ: "Rr",
    ए: "E",
    ऐ: "Ai",
    ओ: "O",
    औ: "Au",
    अं: "Am",
    अः: "Ah",

    // Additional vowel characters
    "ा": "Aa",
    "ि": "I",
    "ी": "Ii",
    "ु": "U",
    "ू": "Uu",
    "ृ": "R",
    "ॄ": "Rr",
    "ै": "Ai",
    "ो": "O",
    "ौ": "Au",
    ऍ: "E",
    ऎ: "E",
    "े": "E",
    ऒ: "O",
    ऑ: "O",
    "ॉ": "O",
    "ॊ": "O",
    "्": "Halant",

    // Hindi consonants and their representations
    क: "Ka",
    ख: "Kha",
    ग: "Ga",
    घ: "Gha",
    ङ: "Nga",
    च: "Cha",
    छ: "Chha",
    ज: "Ja",
    झ: "Jha",
    ञ: "Nya",
    ट: "Ṭa",
    ठ: "Ṭha",
    ड: "Ḍa",
    ढ: "Ḍha",
    ण: "Ṇa",
    त: "Ta",
    थ: "Tha",
    द: "Da",
    ध: "Dha",
    न: "Na",
    प: "Pa",
    फ: "Pha",
    ब: "Ba",
    भ: "Bha",
    म: "Ma",
    य: "Ya",
    र: "Ra",
    ल: "La",
    व: "Va",
    श: "Sha",
    ष: "Ṣa",
    स: "Sa",
    ह: "Ha",

    // Combined consonant forms
    ज्ञ: "Gya",
    त्र: "Tra",
    श्र: "Shra",
  };

  const vowelsList = [
    "अ", // a
    "आ", // aa
    "इ", // i
    "ई", // ii
    "उ", // u
    "ऊ", // uu
    "ऋ", // ri
    "ए", // e
    "ऐ", // ai
    "ओ", // o
    "औ", // au
    "अं", // an
    "अः", //ah
    "ा",
    "ि",
    "ी",
    "ु",
    "ू",
    "ृ",
    "ॄ",
    "ै",
    "ो",
    "ौ",

    "े",
    "ॉ",
    "ॊ",
    "्",
  ];

  const hindiConsonantsList = [
    "क", // ka
    "ख", // kha
    "ग", // ga
    "घ", // gha
    "ङ", // nga
    "च", // cha
    "छ", // chha
    "ज", // ja
    "झ", // jha
    "ञ", // nya
    "ट", // ṭa
    "ठ", // ṭha
    "ड", // ḍa
    "ढ", // ḍha
    "ण", // ṇa
    "त", // ta
    "थ", // tha
    "द", // da
    "ध", // dha
    "न", // na
    "प", // pa
    "फ", // pha
    "ब", // ba
    "भ", // bha
    "म", // ma
    "य", // ya
    "र", // ra
    "ल", // la
    "व", // va
    "श", // sha
    "ष", // ṣa
    "स", // sa
    "ह", // ha
    "क्ष", // kṣa
    "ज्ञ", // gya
  ];

  useEffect(() => {
    // Update active tab when language changes
    if (isEnglish) {
      setActiveTab("alphabets");
    } else {
      setActiveTab("vowels");
    }

    ref.flag = false;
    ref.pending = false;

    ref.animations = [];
    ref.characters = [];

    ref.scene = new THREE.Scene();
    ref.scene.background = new THREE.Color(0xf3f4f6);

    // Add ambient light for better overall illumination
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    ref.scene.add(ambientLight);

    // Improved lighting setup
    const spotLight = new THREE.SpotLight(0xffffff, 1.5);
    spotLight.position.set(0, 5, 5);
    spotLight.castShadow = true;
    ref.scene.add(spotLight);

    // Additional fill light from the other side
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
    fillLight.position.set(-5, 3, -5);
    ref.scene.add(fillLight);

    ref.camera = new THREE.PerspectiveCamera(
      30,
      (window.innerWidth * 0.6) / (window.innerHeight * 0.7),
      0.1,
      1000
    );

    ref.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      logarithmicDepthBuffer: true,
    });

    const calculateDimensions = () => {
      const width = window.innerWidth;
      const containerHeight = window.innerHeight - 100;
      let canvasWidth, canvasHeight;

      if (width < 768) {
        // Mobile view
        canvasWidth = width - 40;
        canvasHeight = containerHeight * 0.5;
        ref.camera.position.z = 3;
      } else {
        // Desktop view
        canvasWidth = width * 0.6 - 40;
        canvasHeight = containerHeight * 0.7;
        ref.camera.position.z = 1.6;
      }

      return { width: canvasWidth, height: canvasHeight };
    };

    const resizeRenderer = () => {
      const { width, height } = calculateDimensions();
      ref.camera.aspect = width / height;
      ref.camera.updateProjectionMatrix();
      ref.renderer?.setSize(width, height);
    };

    resizeRenderer();

    window.addEventListener("resize", resizeRenderer);
    document.getElementById("canvas").innerHTML = "";
    document.getElementById("canvas").appendChild(ref.renderer.domElement);

    ref.camera.position.y = 1.4;

    let loader = new GLTFLoader();
    loader.load(
      bot,
      (gltf) => {
        gltf.scene.traverse((child) => {
          if (child.type === "SkinnedMesh") {
            child.frustumCulled = false;
          }
        });
        ref.avatar = gltf.scene;
        ref.scene.add(ref.avatar);
        defaultPose(ref);
        setModelLoaded(true);

        // Start animation loop
        const animate = () => {
          requestAnimationFrame(animate);
          ref.renderer.render(ref.scene, ref.camera);
        };
        animate();
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      (error) => {
        console.error("An error happened", error);
      }
    );
    return () => {
      window.removeEventListener("resize", resizeRenderer);
      if (ref.renderer) {
        ref.renderer.dispose();
      }
    };
  }, [ref, bot, isEnglish]);

  ref.animate = () => {
    if (ref.animations.length === 0) {
      ref.pending = false;
      return;
    }
    requestAnimationFrame(ref.animate);
    if (ref.animations[0].length) {
      if (!ref.flag) {
        for (let i = 0; i < ref.animations[0].length; ) {
          let [boneName, action, axis, limit, sign] = ref.animations[0][i];
          if (
            sign === "+" &&
            ref.avatar.getObjectByName(boneName)[action][axis] < limit
          ) {
            ref.avatar.getObjectByName(boneName)[action][axis] += speed;
            ref.avatar.getObjectByName(boneName)[action][axis] = Math.min(
              ref.avatar.getObjectByName(boneName)[action][axis],
              limit
            );
            i++;
          } else if (
            sign === "-" &&
            ref.avatar.getObjectByName(boneName)[action][axis] > limit
          ) {
            ref.avatar.getObjectByName(boneName)[action][axis] -= speed;
            ref.avatar.getObjectByName(boneName)[action][axis] = Math.max(
              ref.avatar.getObjectByName(boneName)[action][axis],
              limit
            );
            i++;
          } else {
            ref.animations[0].splice(i, 1);
          }
        }
      }
    } else {
      ref.flag = true;
      setTimeout(() => {
        ref.flag = false;
      }, pause);
      ref.animations.shift();
    }
    ref.renderer.render(ref.scene, ref.camera);
  };

  // Button components for different sign categories
  const alphaButtons = Array.from({ length: 26 }, (_, i) => (
    <button
      key={`alpha-${i}`}
      className="w-12 h-12 m-1 bg-white hover:bg-blue-50 text-blue-600 font-semibold rounded-lg shadow transition-all duration-200 hover:shadow-md transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-center"
      onClick={() => {
        if (ref.animations.length === 0) {
          alphabets[String.fromCharCode(i + 65)](ref);
          ref.animate();
        }
      }}
    >
      {String.fromCharCode(i + 65)}
    </button>
  ));

  const numButtons = Array.from({ length: 10 }, (_, i) => (
    <button
      key={`num-${i}`}
      className="w-12 h-12 m-1 bg-white hover:bg-blue-50 text-blue-600 font-semibold rounded-lg shadow transition-all duration-200 hover:shadow-md transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-center"
      onClick={() => {
        if (ref.animations.length === 0) {
          numbers[numToWord[String.fromCharCode(i + 48)]](ref);
          ref.animate();
        }
      }}
    >
      {String.fromCharCode(i + 48)}
    </button>
  ));

  const wordButtons = words.wordList.map((word, i) => (
    <button
      key={`word-${i}`}
      className="px-3 py-2 m-1 bg-white hover:bg-blue-50 text-blue-600 font-medium rounded-lg shadow transition-all duration-200 hover:shadow-md transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
      onClick={() => {
        if (ref.animations.length === 0) {
          words[word](ref);
          ref.animate();
        }
      }}
    >
      {word}
    </button>
  ));

  const vowelButtons = vowelsList.map((vowel, i) => (
    <button
      key={`vowel-${i}`}
      className="w-12 h-12 m-1 bg-white hover:bg-blue-50 text-blue-600 font-semibold rounded-lg shadow transition-all duration-200 hover:shadow-md transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-center"
      onClick={() => {
        if (ref.animations.length === 0) {
          hindi[hindiLetters[vowel]](ref);
          ref.animate();
        }
      }}
    >
      {vowel}
    </button>
  ));

  const hindiConsonantButtons = hindiConsonantsList.map((consonant, i) => (
    <button
      key={`consonant-${i}`}
      className="w-12 h-12 m-1 bg-white hover:bg-blue-50 text-blue-600 font-semibold rounded-lg shadow transition-all duration-200 hover:shadow-md transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-center"
      onClick={() => {
        if (ref.animations.length === 0) {
          hindi[hindiLetters[consonant]](ref);
          ref.animate();
        }
      }}
    >
      {consonant}
    </button>
  ));

  const hindiNumButtons = Array.from({ length: 10 }, (_, i) => (
    <button
      key={`hindi-num-${i}`}
      className="w-12 h-12 m-1 bg-white hover:bg-blue-50 text-blue-600 font-semibold rounded-lg shadow transition-all duration-200 hover:shadow-md transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-center"
      onClick={() => {
        if (ref.animations.length === 0) {
          numbers[numToWord[String.fromCharCode(i + 48)]](ref);
          ref.animate();
        }
      }}
    >
      {hindiNumbers[String.fromCharCode(i + 48)]}
    </button>
  ));

  return (
    <div className="max-w-full mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-6">
        Learn Sign Language
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
        {/* Left Column - Controls */}
        <div
          className="md:col-span-1 lg:col-span-3 bg-white rounded-xl shadow-lg p-3 overflow-auto h-fit"
          style={{ maxHeight: "calc(100vh - 120px)" }}
        >
          {/* Language Selector */}
          <div className="flex gap-2 mb-6">
            <button
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-200 text-center ${
                isEnglish
                  ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setIsEnglish(true)}
            >
              English
            </button>
            <button
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-200 text-center ${
                !isEnglish
                  ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setIsEnglish(false)}
            >
              Hindi
            </button>
          </div>

          {isEnglish ? (
            <div>
              {/* Tabs for English Categories */}
              <div className="flex border-b border-gray-200 mb-4 overflow-x-auto justify-center">
                <button
                  className={`py-2 px-4 font-medium text-sm transition-colors duration-200 ${
                    activeTab === "alphabets"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                  onClick={() => setActiveTab("alphabets")}
                >
                  Alphabets
                </button>
                <button
                  className={`py-2 px-4 font-medium text-sm transition-colors duration-200 ${
                    activeTab === "numbers"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                  onClick={() => setActiveTab("numbers")}
                >
                  Numbers
                </button>
                <button
                  className={`py-2 px-4 font-medium text-sm transition-colors duration-200 ${
                    activeTab === "words"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                  onClick={() => setActiveTab("words")}
                >
                  Words
                </button>
              </div>

              {/* Display content based on selected tab */}
              {activeTab === "alphabets" && (
                <div>
                  <h2 className="text-lg font-bold text-gray-700 mb-3 text-center">
                    Alphabets
                  </h2>
                  <div className="flex flex-wrap justify-center">
                    {alphaButtons}
                  </div>
                </div>
              )}

              {activeTab === "numbers" && (
                <div>
                  <h2 className="text-lg font-bold text-gray-700 mb-3 text-center">
                    Numbers
                  </h2>
                  <div className="flex flex-wrap justify-center">
                    {numButtons}
                  </div>
                </div>
              )}

              {activeTab === "words" && (
                <div>
                  <h2 className="text-lg font-bold text-gray-700 mb-3 text-center">
                    Common Words & Phrases
                  </h2>
                  <div className="flex flex-wrap justify-center">
                    {wordButtons}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div>
              {/* Tabs for Hindi Categories */}
              <div className="flex border-b border-gray-200 mb-4 overflow-x-auto justify-center">
                <button
                  className={`py-2 px-4 font-medium text-sm transition-colors duration-200 ${
                    activeTab === "vowels"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                  onClick={() => setActiveTab("vowels")}
                >
                  Vowels
                </button>
                <button
                  className={`py-2 px-4 font-medium text-sm transition-colors duration-200 ${
                    activeTab === "consonants"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                  onClick={() => setActiveTab("consonants")}
                >
                  Consonants
                </button>
                <button
                  className={`py-2 px-4 font-medium text-sm transition-colors duration-200 ${
                    activeTab === "hindiNumbers"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                  onClick={() => setActiveTab("hindiNumbers")}
                >
                  Numbers
                </button>
              </div>

              {/* Display content based on selected tab */}
              {activeTab === "vowels" && (
                <div>
                  <h2 className="text-lg font-bold text-gray-700 mb-3 text-center">
                    Hindi Vowels
                  </h2>
                  <div className="flex flex-wrap justify-center">
                    {vowelButtons}
                  </div>
                </div>
              )}

              {activeTab === "consonants" && (
                <div>
                  <h2 className="text-lg font-bold text-gray-700 mb-3 text-center">
                    Hindi Consonants
                  </h2>
                  <div className="flex flex-wrap justify-center">
                    {hindiConsonantButtons}
                  </div>
                </div>
              )}

              {activeTab === "hindiNumbers" && (
                <div>
                  <h2 className="text-lg font-bold text-gray-700 mb-3 text-center">
                    Hindi Numbers
                  </h2>
                  <div className="flex flex-wrap justify-center">
                    {hindiNumButtons}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Middle Column - Canvas */}
        <div className="md:col-span-2 lg:col-span-6 relative">
          <div className="bg-gradient-to-b from-blue-50 to-indigo-50 rounded-xl shadow-lg overflow-hidden h-full flex items-center justify-center">
            {!modelLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-80 z-10">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-2"></div>
                  <p className="text-gray-700">Loading 3D model...</p>
                </div>
              </div>
            )}
            <div id="canvas" className="w-full h-full" />
          </div>
        </div>

        {/* Right Column - Avatar & Settings */}
        <div className="md:col-span-1 lg:col-span-3 bg-white rounded-xl shadow-lg p-5 h-fit">
          <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
            Avatar & Settings
          </h2>

          {/* Avatar Selection */}
          <div className="mb-6">
            <p className="text-gray-700 font-medium mb-3 text-center">
              Select Avatar
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div
                className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  bot === xbot
                    ? "border-blue-500 shadow-md ring-2 ring-blue-300"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setBot(xbot)}
              >
                <img src={xbotPic} className="w-full" alt="Avatar 1: XBOT" />
                <div
                  className={`text-center py-1 text-sm font-medium ${
                    bot === xbot
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  XBOT
                </div>
              </div>
              <div
                className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  bot === ybot
                    ? "border-blue-500 shadow-md ring-2 ring-blue-300"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setBot(ybot)}
              >
                <img src={ybotPic} className="w-full" alt="Avatar 2: YBOT" />
                <div
                  className={`text-center py-1 text-sm font-medium ${
                    bot === ybot
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  YBOT
                </div>
              </div>
            </div>
          </div>

          {/* Animation Speed */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-700 font-medium">Animation Speed</p>
              <span className="text-blue-600 font-semibold">
                {Math.round(speed * 100) / 100}
              </span>
            </div>
            <Slider
              axis="x"
              xmin={0.05}
              xmax={0.5}
              xstep={0.01}
              x={speed}
              onChange={({ x }) => setSpeed(x)}
              styles={{
                track: {
                  width: "100%",
                  height: "6px",
                  backgroundColor: "#E5E7EB",
                  borderRadius: "3px",
                },
                active: {
                  backgroundColor: "#3B82F6",
                  backgroundImage: "linear-gradient(90deg, #3B82F6, #4F46E5)",
                },
                thumb: {
                  width: "18px",
                  height: "18px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "50%",
                  border: "2px solid #3B82F6",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
                },
              }}
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Slower</span>
              <span>Faster</span>
            </div>
          </div>

          {/* Pause Time */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-700 font-medium">Pause Time</p>
              <span className="text-blue-600 font-semibold">{pause} ms</span>
            </div>
            <Slider
              axis="x"
              xmin={0}
              xmax={2000}
              xstep={100}
              x={pause}
              onChange={({ x }) => setPause(x)}
              styles={{
                track: {
                  width: "100%",
                  height: "6px",
                  backgroundColor: "#E5E7EB",
                  borderRadius: "3px",
                },
                active: {
                  backgroundColor: "#3B82F6",
                  backgroundImage: "linear-gradient(90deg, #3B82F6, #4F46E5)",
                },
                thumb: {
                  width: "18px",
                  height: "18px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "50%",
                  border: "2px solid #3B82F6",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
                },
              }}
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>No pause</span>
              <span>Longer pause</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearnSign;
