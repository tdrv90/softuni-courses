function personInfo(firstName, lastName, age) {
    let person = {
        firstName,
        lastName,
        age
    };

    let entries = Object.entries(person);

    for (let [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }
}

personInfo("Peter", "Pan", "20");