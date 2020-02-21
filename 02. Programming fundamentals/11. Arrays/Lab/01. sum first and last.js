function firstAndLast(arguments) {
    let first = Number(arguments.shift());
    let last = Number(arguments.pop());

    return first + last;
}

console.log(firstAndLast(['20', '30', '40']))