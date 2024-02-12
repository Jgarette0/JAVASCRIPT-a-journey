const refrigerator = {
  milk: 1,
  eggs: 12,
};

for (const food in refrigerator) {
  console.log(food, refrigerator[food]);
}
