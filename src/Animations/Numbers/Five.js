export const Five = (ref) => {
  let animations = [];
  animations.push(["mixamorigLeftHand", "rotation", "x", Math.PI /4 , "+"]);
  animations.push(["mixamorigLeftHand", "rotation", "z", Math.PI / 6, "+"]);
  animations.push(["mixamorigLeftHand", "rotation", "y", Math.PI / 12, "+"]);


  // Reset to initial state
  ref.animations.push(animations);

  animations = [];

  animations.push(["mixamorigLeftHand", "rotation", "x", 0, "-"]);
  animations.push(["mixamorigLeftHand", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigLeftHand", "rotation", "y", 0, "-"]);


  ref.animations.push(animations);

  if (ref.pending === false) {
    ref.pending = true;
    ref.animate();
  }
};
