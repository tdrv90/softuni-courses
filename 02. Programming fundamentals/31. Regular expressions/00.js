let number = new RegExp('\d{4}', 'gi');;
let pattern = /\d+/g;

let text = "Lorem ipsum 1432 432 43234 2311111  ...";

let result = text.match(pattern);

console.log(result);

