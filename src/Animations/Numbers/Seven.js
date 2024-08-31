export const Seven = (ref) => {
  let animations = [];
  animations.push([
    "mixamorigLeftHandIndex1",
    "rotation",
    "z",
    -Math.PI / 3.5,
    "-",
  ]);
  animations.push([
    "mixamorigLeftHandIndex2",
    "rotation",
    "z",
    -Math.PI / 3.5,
    "-",
  ]);
  animations.push([
    "mixamorigLeftHandIndex3",
    "rotation",
    "z",
    -Math.PI / 3.5,
    "-",
  ]);
  animations.push([
    "mixamorigLeftHandMiddle1",
    "rotation",
    "z",
    -Math.PI / 1.5,
    "-",
  ]);
  animations.push([
    "mixamorigLeftHandMiddle2",
    "rotation",
    "z",
    -Math.PI / 1.5,
    "-",
  ]);
  animations.push([
    "mixamorigLeftHandMiddle3",
    "rotation",
    "z",
    -Math.PI / 1.5,
    "-",
  ]);
  animations.push([
    "mixamorigLeftHandRing1",
    "rotation",
    "z",
    -Math.PI / 1.6,
    "-",
  ]);
  animations.push([
    "mixamorigLeftHandRing2",
    "rotation",
    "z",
    -Math.PI / 1.6,
    "-",
  ]);
  animations.push([
    "mixamorigLeftHandRing3",
    "rotation",
    "z",
    -Math.PI / 1.6,
    "-",
  ]);
  animations.push([
    "mixamorigLeftHandPinky1",
    "rotation",
    "z",
    -Math.PI / 1.8,
    "-",
  ]);
  animations.push([
    "mixamorigLeftHandPinky2",
    "rotation",
    "z",
    -Math.PI / 1.8,
    "-",
  ]);
  animations.push([
    "mixamorigLeftHandPinky3",
    "rotation",
    "z",
    -Math.PI / 1.8,
    "-",
  ]);
  animations.push([
    "mixamorigLeftHandThumb1",
    "rotation",
    "y",
    Math.PI / 4,
    "+",
  ]);
  animations.push([
    "mixamorigLeftHandThumb2",
    "rotation",
    "y",
    Math.PI / 6,
    "+",
  ]);
  animations.push([
    "mixamorigLeftHandThumb3",
    "rotation",
    "y",
    Math.PI / 6,
    "+",
  ]);

  animations.push(["mixamorigLeftHand", "rotation", "y", -Math.PI / 6, "-"]);

  animations.push([
    "mixamorigLeftForeArm",
    "rotation",
    "z",
    +Math.PI / 24,
    "+",
  ]);

  animations.push(["mixamorigLeftArm", "rotation", "x", -Math.PI / 6.5, "-"]);


  ref.animations.push(animations);

  animations = [];

  animations.push(["mixamorigLeftHandIndex1", "rotation", "z", 0, "+"]);
  animations.push(["mixamorigLeftHandIndex2", "rotation", "z", 0, "+"]);
  animations.push(["mixamorigLeftHandIndex3", "rotation", "z", 0, "+"]);
  animations.push(["mixamorigLeftHandMiddle1", "rotation", "z", 0, "+"]);
  animations.push(["mixamorigLeftHandMiddle2", "rotation", "z", 0, "+"]);
  animations.push(["mixamorigLeftHandMiddle3", "rotation", "z", 0, "+"]);
  animations.push(["mixamorigLeftHandRing1", "rotation", "z", 0, "+"]);
  animations.push(["mixamorigLeftHandRing2", "rotation", "z", 0, "+"]);
  animations.push(["mixamorigLeftHandRing3", "rotation", "z", 0, "+"]);
  animations.push(["mixamorigLeftHandPinky1", "rotation", "z", 0, "+"]);
  animations.push(["mixamorigLeftHandPinky2", "rotation", "z", 0, "+"]);
  animations.push(["mixamorigLeftHandPinky3", "rotation", "z", 0, "+"]);
  animations.push(["mixamorigLeftHandThumb1", "rotation", "x", 0, "+"]);
  animations.push(["mixamorigLeftHandThumb1", "rotation", "y", 0, "-"]);
  animations.push(["mixamorigLeftHandThumb2", "rotation", "y", 0, "-"]);
  animations.push(["mixamorigLeftHandThumb3", "rotation", "y", 0, "-"]);

  animations.push(["mixamorigLeftHand", "rotation", "y", 0, "+"]);

  animations.push(["mixamorigLeftForeArm", "rotation", "z", 0, "-"]);

  animations.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);



  ref.animations.push(animations);

  if (ref.pending === false) {
    ref.pending = true;
    ref.animate();
  }
};
