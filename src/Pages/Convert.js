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

  const componentRef = useRef({});
  const { current: ref } = componentRef;

  let textFromAudio = React.createRef();
  let textFromInput = React.createRef();

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
    ref.scene.background = new THREE.Color(0xdddddd);

    const spotLight = new THREE.SpotLight(0xffffff, 2);
    spotLight.position.set(0, 5, 5);
    ref.scene.add(spotLight);

    ref.renderer = new THREE.WebGLRenderer({ antialias: true });
    ref.camera = new THREE.PerspectiveCamera(
      30,
      (window.innerWidth * 0.57) / (window.innerHeight - 70),
      0.1,
      1000
    );

    const resizeRenderer = () => {
      const width = window.innerWidth;
      const height = window.innerHeight - 70;

      if (width < 767) {
        ref.camera.aspect = width / height;
        ref.camera.position.z = 3;
      } else {
        ref.camera.aspect = (width * 0.57) / height;
        ref.camera.position.z = 1.6;
      }

      ref.camera.updateProjectionMatrix();
      ref.renderer.setSize(width < 767 ? width : width * 0.57, height);
    };

    resizeRenderer();

    window.addEventListener("resize", resizeRenderer);
    document.getElementById("canvas").innerHTML = "";
    document.getElementById("canvas").appendChild(ref.renderer.domElement);

    ref.camera.position.z = 1.6;
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
      },
      (xhr) => {
        console.log(xhr);
      }
    );

    return () => {
      window.removeEventListener("resize", resizeRenderer);
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
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <div className="flex gap-5 justify-evenly mt-3">
            <button
              className={`${
                isEnglish
                  ? "bg-blue-600 text-white "
                  : "border-2 border-blue-600"
              } rounded-md btn-style w-33`}
              onClick={() => {
                setIsEnglish(true);
              }}
            >
              English
            </button>
            <button
              className={`${
                !isEnglish
                  ? "bg-blue-600 text-white "
                  : "border-2 border-blue-600"
              } rounded-md  btn-style w-33`}
              onClick={() => {
                setIsEnglish(false);
              }}
            >
              Hindi
            </button>
          </div>
          <label className="label-style">
            Speech Recognition: {listening ? "on" : "off"}
          </label>
          <div className="space-between">
            <button
              className="btn btn-primary btn-style w-33"
              onClick={startListening}
            >
              Mic On <i className="fa fa-microphone" />
            </button>
            <button
              className="btn btn-primary btn-style w-33"
              onClick={stopListening}
            >
              Mic Off <i className="fa fa-microphone-slash" />
            </button>
            <button
              className="btn btn-primary btn-style w-33"
              onClick={() => {
                resetTranscript();
                textFromAudio.current.value = "";
                textFromInput.current.value = "";
                setText("");
              }}
            >
              Clear
            </button>
          </div>
          <textarea
            rows={3}
            ref={textFromAudio}
            value={transcript}
            placeholder="Speech input ..."
            className="w-100 input-style"
          />
          <button
            onClick={() => {
              sign(textFromAudio);
            }}
            className="btn btn-primary w-100 btn-style btn-start"
          >
            Start Animations
          </button>
          <label className="label-style">Text Input</label>
          <textarea
            rows={3}
            ref={textFromInput}
            placeholder="Text input ..."
            className="w-100 input-style"
          />
          <button
            onClick={() => {
              sign(textFromInput);
            }}
            className="btn btn-primary w-100 btn-style btn-start"
          >
            Start Animations
          </button>
          <label className="label-style">Processed Text</label>
          <textarea
            rows={3}
            value={text}
            className="w-100 input-style"
            readOnly
          />
        </div>
        <div className="col-md-7">
          <div id="canvas" />
        </div>
        <div className="col-md-2">
          <p className="bot-label">Select Avatar</p>
          <img
            src={xbotPic}
            className="bot-image col-md-11"
            onClick={() => {
              setBot(xbot);
            }}
            alt="Avatar 1: XBOT"
          />
          <img
            src={ybotPic}
            className="bot-image col-md-11"
            onClick={() => {
              setBot(ybot);
            }}
            alt="Avatar 2: YBOT"
          />
          <p className="label-style">
            Animation Speed: {Math.round(speed * 100) / 100}
          </p>
          <Slider
            axis="x"
            xmin={0.05}
            xmax={0.5}
            xstep={0.01}
            x={speed}
            onChange={({ x }) => setSpeed(x)}
            className="w-100"
          />
          <p className="label-style">Pause time: {pause} ms</p>
          <Slider
            axis="x"
            xmin={0}
            xmax={2000}
            xstep={100}
            x={pause}
            onChange={({ x }) => setPause(x)}
            className="w-100"
          />
        </div>
      </div>
    </div>
  );
}

export default Convert;
