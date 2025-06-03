/** map has key of any type
 * 1. can store string , number , boolean as key;
 *
 * 
 * 
 * new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the element (the key/value pair) by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count.
 *



map.keys() – returns an iterable for keys,
map.values() – returns an iterable for values,
map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.
 */
const user = new Map(); // creates the map
user.set("Name", "vandana");
user.set(25, "age");
user.set(true, "female");

//************************************** */
const y = user.get("Name");
const z = user.has(25); // return true false
user.delete(true); // deleted
user.clear(); // whole map is empty;
const x = user.size; // no need to call it,

const vandana = new Map([
  ["human", true],
  ["man", false],
  ["woman", true],
]);

/************************************************ */
for (let el of vandana.keys()) {
  // keys only
  // if its iteratable
  // "Keys"
  console.log(el);
}
for (let el of vandana.values()) {
  // value only
  // if its iteratable
  // "Keys"
  console.log(el);
}
for (let el of vandana.entries()) {
  // key, values
  // if its iteratable
  // "Keys"
  console.log(el);
}
