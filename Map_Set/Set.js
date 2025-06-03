/** SET : its set only values without any keys, in this every value is unique
 * 
 * 
 * new Set([iterable]) – creates the set, with optional iterable (e.g. array) of values for initialization.
set.add(value) – adds a value (does nothing if value exists), returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.
 */

const set = new Set([["hello"], ["Hello"], ["helo"]]);

const set1 = new Set(); // its a type of object itself

const one = { 1: "one" };
const two = { 2: "two" };
const three = { 3: "three" };

set1.add(one);
set1.add(two);
set1.add(three);
console.log(set1);

console.log(set1.size);

for (let el of set1.keys()) {
  // its a object of objects, thats why it iteratable
  console.log(el);
}
