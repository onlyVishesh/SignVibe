import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-input-slider";
import "../App.css";

import * as alphabets from "../Animations/alphabets";
import { defaultPose } from "../Animations/defaultPose";
import * as hindi from "../Animations/hindi";
import * as numbers from "../Animations/numbers";
import * as words from "../Animations/words";
import xbot from "../Models/xbot/xbot.glb";
import xbotPic from "../Models/xbot/xbot.png";
import ybot from "../Models/ybot/ybot.glb";
import ybotPic from "../Models/ybot/ybot.png";

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function Convert() {
  const [text, setText] = useState("");
  const [bot, setBot] = useState(ybot);
  const [speed, setSpeed] = useState(0.2);
  const [pause, setPause] = useState(800);
  const [isEnglish, setIsEnglish] = useState(true);
  const [modelLoaded, setModelLoaded] = useState(false);

  const componentRef = useRef({});
  const { current: ref } = componentRef;

  const textFromAudio = useRef();
  const textFromInput = useRef();

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

  const hindiLetter = {
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
    अः: "A:",

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

    ज्ञ: "Gya",
    त्र: "Tra",
    श्र: "Shra",
  };

  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  useEffect(() => {
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

    ref.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      logarithmicDepthBuffer: true,
    });

    ref.camera = new THREE.PerspectiveCamera(
      30,
      (window.innerWidth * 0.6) / (window.innerHeight * 0.7),
      0.1,
      1000
    );

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
      ref.renderer.setSize(width, height);
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
  }, [ref, bot]);

  ref.animate = () => {
    if (ref.animations.length === 0) {
      ref.pending = false;
      return;
    }
    requestAnimationFrame(ref.animate);
    if (ref.animations[0].length) {
      if (!ref.flag) {
        if (ref.animations[0][0] === "add-text") {
          setText(text + ref.animations[0][1]);
          ref.animations.shift();
        } else {
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

  const stopAllAnimations = () => {
    ref.animations = [];
    ref.flag = false;
  };

  const sign = (inputRef) => {
    stopAllAnimations();
    var str = inputRef.current.value.toUpperCase();
    var strWords = str.split(" ");
    setText("");

    for (let word of strWords) {
      if (words[word]) {
        ref.animations.push(["add-text", word + " "]);
        words[word](ref);
      } else {
        for (const [index, ch] of word.split("").entries()) {
          let animationKey = ch;

          if (index === word.length - 1)
            ref.animations.push(["add-text", ch + " "]);
          else ref.animations.push(["add-text", ch]);

          if (numbers[numToWord[animationKey]]) {
            numbers[numToWord[animationKey]](ref);
          } else if (alphabets[ch]) {
            alphabets[ch](ref);
          } else if (!isEnglish && hindi[hindiLetter[ch]]) {
            hindi[hindiLetter[ch]](ref);
          }
        }
      }
    }
    ref.animate();
  };

  const startListening = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: isEnglish ? "en-US" : "hi-IN",
    });
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
  };

  return (
    <div className="max-w-full mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-6">
        Convert Speech/Text to Sign Language
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
        {/* Left Column - Controls */}
        <div className="md:col-span-1 lg:col-span-3 bg-white rounded-xl shadow-lg p-3 h-fit">
          {/* Language Selector */}
          <div className="flex gap-2 mb-6">
            <button
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-200 text-center ${
                isEnglish
                  ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 "
              }`}
              onClick={() => setIsEnglish(true)}
            >
              English
            </button>
            <button
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-200 text-center ${
                !isEnglish
                  ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 center"
              }`}
              onClick={() => setIsEnglish(false)}
            >
              Hindi
            </button>
          </div>

          {/* Speech Recognition Controls */}
          <div className="mb-2">
            <div className="flex justify-between items-center mb-3">
              <label className="block text-gray-700 font-medium">
                Speech Recognition:
              </label>
              <span
                className={`${
                  listening
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                } text-xs font-semibold px-2.5 py-0.5 rounded-full`}
              >
                {listening ? "Active" : "Inactive"}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 mb-4">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg shadow transition-colors duration-200 flex items-center justify-center"
                onClick={startListening}
              >
                <i className="fa fa-microphone mr-1"></i> Start
              </button>
              <button
                className="bg-red-600 hover:bg-red-700 text-white py-2 px-3 rounded-lg shadow transition-colors duration-200 flex items-center justify-center"
                onClick={stopListening}
              >
                <i className="fa fa-microphone-slash mr-1"></i> Stop
              </button>
              <button
                className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-3 rounded-lg shadow transition-colors duration-200 flex items-center justify-center"
                onClick={() => {
                  resetTranscript();
                  textFromAudio.current.value = "";
                  textFromInput.current.value = "";
                  setText("");
                  stopAllAnimations();
                }}
              >
                <i className="fa fa-trash mr-1"></i> Clear
              </button>
            </div>
          </div>

          {/* Speech Input */}
          <div className="mb-2">
            <label className="block text-gray-700 font-medium mb-2">
              Speech Input
            </label>
            <textarea
              rows="3"
              ref={textFromAudio}
              value={transcript}
              placeholder="Speech detected will appear here..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              readOnly
            />
            <button
              onClick={() => sign(textFromAudio)}
              className="w-full mt-2 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white py-2.5 px-4 rounded-lg shadow-md transition-all duration-200 font-medium transform hover:-translate-y-0.5"
            >
              <i className="fa fa-play-circle mr-2"></i> Start Animation
            </button>
          </div>

          {/* Text Input */}
          <div className="mb-2">
            <label className="block text-gray-700 font-medium mb-2">
              Text Input
            </label>
            <textarea
              rows="3"
              ref={textFromInput}
              placeholder="Type text to convert..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            />
            <button
              onClick={() => sign(textFromInput)}
              className="w-full mt-2 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white py-2.5 px-4 rounded-lg shadow-md transition-all duration-200 font-medium transform hover:-translate-y-0.5"
            >
              <i className="fa fa-play-circle mr-2"></i> Start Animation
            </button>
          </div>

          {/* Processed Text */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Processed Text
            </label>
            <textarea
              rows="3"
              value={text}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
              readOnly
            />
          </div>
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

export default Convert;
