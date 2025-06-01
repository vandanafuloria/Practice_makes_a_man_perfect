// Both are empty objects, can declare this way

let user = {};
let shubham = new Object();

let shopping_mall = {
  // its a nested object,

  category: {
    electric: true,
    grocery: true,
    clothing: false,
  },
  Price: {
    high: "Branded",
    low: "affordable",
    medium: "quality",
  },
};
shopping_mall.category.books = true; // books is added to the shopping mall object category;
shopping_mall.Price.cheap = "low quality"; // its added to the shopping mall - price- cheap;
shopping_mall.gadgets = ""; // empty value of key gadgets;
shopping_mall.gadgets = {
  phone: { samsumg: 10000, vivo: 6000, oppo: 9000, realme: 15000 },
  laptops: {
    macbook: 80000,
    hp: 75000,
    dell: 50000,
    acer: 96000,
  },
};
// this statement throw error, because i can not access directly phone, i can access child through parent object,
phone.life = 5000;

// add key and value in object

console.log(shopping_mall);
