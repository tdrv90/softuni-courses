function addOrRemoveFromArray(arguments) {
    let newArr = [];

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] === "add") {
            newArr.push(i + 1);
        } else if (arguments[i] === "remove") {
            newArr.pop();
        }
    }

    if (newArr.length === 0) {
        console.log(`Empty`);
    } else {
        console.log(newArr.join(" "));
    }
}

addOrRemoveFromArray(['remove', 'remove', 'remove']);
addOrRemoveFromArray(['add', 'add', 'add', 'add']);
addOrRemoveFromArray(['add', 'add', 'remove', 'add', 'add']);