const phone = {
  camera: true,
  internet: "5g",
  cover: "nice",
  torch: "bright",
  pocketProtection: "mis-touch-prevention",
};

/**  what is in operator 
 1. I can iterate object by in operator 
 2. I can serach a property in object by in operator

 */
const z = cover in phone; // ❌ property should be present in string,
const x = "camera" in phone; // ✅ its giving true
const y = "songs" in phone; // its giving flase;
console.log(x, y, z);
