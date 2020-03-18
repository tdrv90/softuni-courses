function setValues(arr) {
    let arrLength = Number(arr.shift());
    let output = Array(arrLength).fill(0);

    arr.forEach(line => {
        let [index, number] = line.split(' - ');
        output[Number(index)] = Number(number);
    });

    return output.join('\n');
}

console.log(setValues(['3', '0 - 5', '1 - 6', '2 - 7']));