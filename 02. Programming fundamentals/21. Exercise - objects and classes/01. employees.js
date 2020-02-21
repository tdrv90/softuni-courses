function employeesList(input) {
    let employees = [];

    for (const em of input) {
        let name = em;
        let id = em.length;

        let newEmployee = {
            name: name,
            id: id
        };

        employees.push(newEmployee);
    }

    for (const each of employees) {
        console.log(`Name: ${each['name']} -- Personal Number: ${each['id']}`)
    }
}

employeesList([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);