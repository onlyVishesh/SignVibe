export const Zero = (ref) => {
  let animations = [];

  // Thumb rotations to form a circle with the index finger
  animations.push([
    "mixamorigLeftHandThumb1",
    "rotation",
    "z",
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
    "mixamorigLeftHandIndex1",
    "rotation",
    "z",
    -Math.PI / 4,
    "-",
  ]);
  animations.push([
    "mixamorigLeftHandIndex2",
    "rotation",
    "z",
    -Math.PI / 4,
    "-",
  ]);
  animations.push([
    "mixamorigLeftHandIndex3",
    "rotation",
    "z",
    -Math.PI / 4,
    "-",
  ]);

  // Middle, Ring, and Pinky fingers extended or slightly curled
  animations.push(["mixamorigLeftHandMiddle1", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigLeftHandMiddle2", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigLeftHandMiddle3", "rotation", "z", 0, "-"]);

  animations.push(["mixamorigLeftHandRing1", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigLeftHandRing2", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigLeftHandRing3", "rotation", "z", 0, "-"]);

  animations.push(["mixamorigLeftHandPinky1", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigLeftHandPinky2", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigLeftHandPinky3", "rotation", "z", 0, "-"]);

  // Hand rotation for overall orientation
  animations.push(["mixamorigLeftHand", "rotation", "x", Math.PI / 6, "+"]);
  animations.push(["mixamorigLeftHand", "rotation", "y", 0, "-"]);
  animations.push(["mixamorigLeftHand", "rotation", "z", 0, "-"]);

  // Forearm and arm rotations
  animations.push([
    "mixamorigLeftForeArm",
    "rotation",
    "x",
    -Math.PI / 12,
    "-",
  ]);
  animations.push(["mixamorigLeftForeArm", "rotation", "z", Math.PI / 24, "+"]);

  animations.push(["mixamorigLeftArm", "rotation", "x", Math.PI / 18, "+"]);
  animations.push(["mixamorigLeftArm", "rotation", "y", 0, "-"]);

  // Add the animations to the reference
  ref.animations.push(animations);

  // Reset animations after the pose is set
  animations = [];

  // Reset Thumb rotations
  animations.push(["mixamorigLeftHandThumb1", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigLeftHandThumb2", "rotation", "y", 0, "-"]);
  animations.push(["mixamorigLeftHandThumb3", "rotation", "y", 0, "-"]);

  // Reset Index Finger rotations
  animations.push(["mixamorigLeftHandIndex1", "rotation", "z", 0, "+"]);
  animations.push(["mixamorigLeftHandIndex2", "rotation", "z", 0, "+"]);
  animations.push(["mixamorigLeftHandIndex3", "rotation", "z", 0, "+"]);

  // Reset Middle, Ring, and Pinky fingers
  animations.push(["mixamorigLeftHandMiddle1", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigLeftHandMiddle2", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigLeftHandMiddle3", "rotation", "z", 0, "-"]);

  animations.push(["mixamorigLeftHandRing1", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigLeftHandRing2", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigLeftHandRing3", "rotation", "z", 0, "-"]);

  animations.push(["mixamorigLeftHandPinky1", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigLeftHandPinky2", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigLeftHandPinky3", "rotation", "z", 0, "-"]);

  // Reset Hand rotation
  animations.push(["mixamorigLeftHand", "rotation", "x", 0, "-"]);
  animations.push(["mixamorigLeftHand", "rotation", "y", 0, "+"]);
  animations.push(["mixamorigLeftHand", "rotation", "z", 0, "+"]);

  // Reset Forearm and arm rotations
  animations.push(["mixamorigLeftForeArm", "rotation", "x", 0, "+"]);
  animations.push(["mixamorigLeftForeArm", "rotation", "z", 0, "-"]);

  animations.push(["mixamorigLeftArm", "rotation", "x", 0, "-"]);
  animations.push(["mixamorigLeftArm", "rotation", "y", 0, "+"]);

  // Add the reset animations to the reference
  ref.animations.push(animations);

  // Trigger the animation if not already pending
  if (ref.pending === false) {
    ref.pending = true;
    ref.animate();
  }
};
