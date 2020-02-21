function sortArrayBy2Criterias(input) {
    let sortNames = (a, b) => {
        let firstCriteria = a.length - b.length;
        if (firstCriteria === 0) {
            return a.localeCompare(b);
        }
        return firstCriteria;
    }

    let sorted = input.sort(sortNames);


    console.log(sorted.join('\n'));
}

sortArrayBy2Criterias(["alpha", "beta", "gamma"]);