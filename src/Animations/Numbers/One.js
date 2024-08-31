export const One = (ref) => {
  let animations = [];
  animations.push(["mixamorigLeftHand", "rotation", "x", Math.PI / 2, "+"]);
  animations.push(["mixamorigLeftHand", "rotation", "z", Math.PI / 6, "+"]);
  animations.push(["mixamorigLeftHand", "rotation", "y", Math.PI / 6, "+"]);
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
  animations.push([
    "mixamorigLeftHandMiddle1",
    "rotation",
    "z",
    -Math.PI / 2,
    "-",
  ]);
  animations.push([
    "mixamorigLeftHandMiddle2",
    "rotation",
    "z",
    -Math.PI / 2,
    "-",
  ]);
  animations.push([
    "mixamorigLeftHandMiddle3",
    "rotation",
    "z",
    -Math.PI / 2,
    "-",
  ]);
  animations.push([
    "mixamorigLeftHandRing1",
    "rotation",
    "z",
    -Math.PI / 2,
    "-",
  ]);
  animations.push([
    "mixamorigLeftHandRing2",
    "rotation",
    "z",
    -Math.PI / 2,
    "-",
  ]);
  animations.push([
    "mixamorigLeftHandRing3",
    "rotation",
    "z",
    -Math.PI / 2,
    "-",
  ]);
  animations.push([
    "mixamorigLeftHandPinky1",
    "rotation",
    "z",
    -Math.PI / 2,
    "-",
  ]);
  animations.push([
    "mixamorigLeftHandPinky2",
    "rotation",
    "z",
    -Math.PI / 2,
    "-",
  ]);
  animations.push([
    "mixamorigLeftHandPinky3",
    "rotation",
    "z",
    -Math.PI / 2,
    "-",
  ]);

  // Reset to initial state
  ref.animations.push(animations);

  animations = [];

  animations.push(["mixamorigLeftHand", "rotation", "x", 0, "-"]);
  animations.push(["mixamorigLeftHand", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigLeftHand", "rotation", "y", 0, "-"]);
  animations.push(["mixamorigLeftHandThumb1", "rotation", "y", 0, "-"]);
  animations.push(["mixamorigLeftHandThumb2", "rotation", "y", 0, "-"]);
  animations.push(["mixamorigLeftHandThumb3", "rotation", "y", 0, "-"]);
  animations.push(["mixamorigLeftHandMiddle1", "rotation", "z", 0, "+"]);
  animations.push(["mixamorigLeftHandMiddle2", "rotation", "z", 0, "+"]);
  animations.push(["mixamorigLeftHandMiddle3", "rotation", "z", 0, "+"]);
  animations.push(["mixamorigLeftHandRing1", "rotation", "z", 0, "+"]);

  animations.push(["mixamorigLeftHandRing2", "rotation", "z", 0, "+"]);
  animations.push(["mixamorigLeftHandRing3", "rotation", "z", 0, "+"]);
  animations.push(["mixamorigLeftHandPinky1", "rotation", "z", 0, "+"]);
  animations.push(["mixamorigLeftHandPinky2", "rotation", "z", 0, "+"]);
  animations.push(["mixamorigLeftHandPinky3", "rotation", "z", 0, "+"]);

  ref.animations.push(animations);

  if (ref.pending === false) {
    ref.pending = true;
    ref.animate();
  }
};
