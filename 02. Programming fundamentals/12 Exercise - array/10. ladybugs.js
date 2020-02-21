function ladybugs(arguments) {
    let field = new Array(Number(arguments.shift()));
    let initialPositionOfLadyBugs = arguments.shift().split(' ');
    console.log(initialPositionOfLadyBugs);
    for (let i = 0; i < field.length; i++) {
        
    }

    console.log(field);
}

ladybugs([3, '0 1', '0 right 1', '2 right 1']);
// ladybugs([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
// ladybugs([5, '3', '3 left 2', '1 left -2']);

// 1st parameter - field size
// 2nd parameter - indexes of the ladybugs inside
// 3rd and more - commands to the ladybugs to change position