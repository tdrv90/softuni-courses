function addOrRemove(input) {
    let numbers = [];

    let num = 1;

    input.forEach(cmd => {
        if (cmd === 'add') {
            numbers.push(num);
            num++;
        } else if (cmd === "remove") {
            numbers.pop();
            num++;
        }
    });

    if (numbers.length === 0) {
        console.log(`Empty`);
    } else {
        numbers.forEach(n => {
            console.log(n);
        });
    }
}

addOrRemove(
    ['add',
        'add',
        'add',
        'add']
);
// 1
// 2
// 3
// 4

addOrRemove(
    ['add',
        'add',
        'remove',
        'add',
        'add']
)
// 1
// 4
// 5

addOrRemove(['remove',
    'remove',
    'remove'])
// Empty