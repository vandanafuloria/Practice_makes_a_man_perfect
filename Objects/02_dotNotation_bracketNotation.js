let subjects = {};
// it a dot notation , by dot notation we can add, access, delete change any value of key;
subjects.physics = " 👩‍⚕️ An Interesting Subject";
subjects.chemistry = "👩‍🔬 Chemicals ";
subjects.biology = "🌿 all living being";
// value is changed;
subjects.physics = "🥱 Its a boring subject";
// let try to delete this value;
delete subjects.biology;
// biology is deleted, if i access biology, it will show undefined, it means biology propery is being set as property but value is empty;

console.log(subjects.biology);
subjects.biology = "🧬 its interesing";
console.log(subjects.biology);

// i can not access value by value name in dot notation, but i can access value by value name or other varible by bracket notation

//console.log(subjects."🧬 its interesing")

// lets talk about bracket notation

subjects["🧬 its interesing"] = "its Biology";
console.log(subjects);
console.log(subjects["🧬 its interesing"]);

// by dot notaion we can directly access value which are presednt by name of property;
// multiple words property, we can add by bracket notation;
subjects["🧬 its interesing"];

// (subjects.social science) we can not do multiple words but if i use bracket notation
subjects["social sciences"];
console.log(subjects["social sciences"]); // here the value is undefined;

subjects["social sciences"] = "Its a Boring subject, I dont like it";
console.log(subjects);
let a = "hello world";
// added mulitple word property bracket notation ;

subjects[a] = "bolo kya kam hai"; // added variable as property name, varible value will save as property;
console.log(subjects);

const young = "10- 15";
const adult = "20 - 30";
const old = "50-60";

const vandana = {
  name: "vandana",
  age: 25,
  gender: "female",
};
//vandana.gender = gender3; // replace value of gender;
vandana[young] = "vandana";
console.log(vandana);
