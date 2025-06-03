function iterateObject(obj) {
  for (let el in obj) {
    // console.log(el); // it will log property only, not value;
    console.log(obj[el]); // it print propery with value;
  }
}

const user = {
  name: "vandana",
  surName: "fuloria",
  profession: "software developer",
  city: "dehradun",
  45: "three",
  1: "one", // Note : there are two keys present, in objects key must be unique, if same key present then last one will overwrite the first value.
  2: "two",
  1: 2, // first only number
  5: 10,
  "+9": "nine",
};
iterateObject(user);

console.log(user); // it print full object with all property and values;

// Note: when its a number in propterty , so it log as sorted numbers , but if numbers are with + , -, value it will treat them as string not number,
// but if numbers  or string of number which can directly convert to number wihtout any further changes , present in sorted order;
