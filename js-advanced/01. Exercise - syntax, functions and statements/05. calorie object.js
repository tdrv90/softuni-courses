function calorieObject(input) {
    let foodObj = {};

    for (let i = 0; i < input.length; i = i + 2) {
        foodObj[input[i]] = Number(input[i + 1]);
    }
    return foodObj;
}

console.log(calorieObject(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]));
// { Yoghurt: 48, Rise: 138, Apple: 52 }

console.log(calorieObject(['Potato', 93, 'Skyr', 63, 'Cucumber', 18, 'Milk', 42]
));
// { Potato: 93, Skyr: 63, Cucumber: 18, Milk: 42 }