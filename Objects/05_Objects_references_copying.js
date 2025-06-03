const a = "hello";
let b = a;
b = "hello world";

console.log(a, b);

// Note : A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.
//  When an object variable is copied, the reference is copied, but the object itself is not duplicated.

/** it normal primitive data types , value copy as whole, but in objects it copy its reference only ;
 * so if we copy object and manipulate new copy, then original copy also change;
 */

const human = { body: true, hands: 2, ear: 2, mouth: 1, brain: 1, heart: 1 };

// console.log(human);
const vandana = human;

// console.log(vandana); // exact copy

vandana.age = 25; // maniputating copy;
human.eyes = 2; // both changed

//

// COMPARISION BY REFERENCE

vandana == human ? console.log(true) : console.log(false); // answer true
vandana == human.ear ? console.log(true) : console.log(false); // false

let x = {};
let y = {}; // two independent objects

// alert(x == y); // false

// Note : An important side effect of storing objects as references is that an object declared as const can be modified.
// An important side effect of storing objects as references is that an object declared as const can be modified.
// because reference is same and not changing the refence thats why const is supported here;
const man = {}; // copy of human,
for (let el in human) {
  man[el] = human[el]; // can copy by filling value and properties one by one;
}
console.log(man);
man.nails = "fingers";
console.log(man); // only man manipulated here, not human
console.log(human);

const woman = {};
// Object.assign(woman, ...man); // ❌ can not if man is a single object;
// Object.assign(woman, man);

console.log("this is woman", woman);

woman.hairs = "long";

console.log(woman);
Object.assign(woman, man, human); // single send Object.assign(dest, src1, src2, src3) , if not iteratable
// if iteratable like array or object with in object, then spread opterator will use;
console.log(woman);
