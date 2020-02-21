let solution = (function () {
    return {
        add: (vect1, vect2) => {
            return [vect1[0] + vect2[0], vect1[1] + vect2[1]];
        },
        multiply: (vect1, scalar) => {
            return [vect1[0] * scalar, vect1[1] * scalar];
        },
        length: (vect1) => {
            return Math.sqrt(Math.pow(vect1[0], 2) + Math.pow(vect1[1], 2));
        },
        dot: (vect1, vect2) => {
            return vect1[0] * vect2[0] + vect1[1] * vect2[1];
        },
        cross: (vect1, vect2) => {
            return vect1[0] * vect2[1] - vect1[1] * vect2[0];
        }
    }
}());


console.log(solution.add([1, 1], [1, 0])); // [2, 1]
console.log(solution.multiply([3.5, -2], 2)); // [7, -4]
console.log(solution.length([3, -4])); // 5
console.log(solution.dot([1, 0], [0, -1])); // 0
console.log(solution.cross([3, 7], [1, 0])); // -7