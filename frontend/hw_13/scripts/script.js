const prices = [
  { name: "cola", prise: 12 },
  { name: "bread", prise: 13 },
  { name: "whisky", prise: 12 },
  { name: "sweet", prise: 100 },
  { name: "sonyPlaystation", prise: 10000 },
];

const hasExpensiveItem = prices.some((elem) => {
  return elem.prise > 50;
});
console.log(hasExpensiveItem);
