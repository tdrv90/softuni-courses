function employeesObj(input) {
    let employees = {};

    getEmployees(input);
    printEmployees(employees);

    function getEmployees(input) {
        input.forEach(name => {
            let length = name.length;

            employees[name] = length;
        });

        return employees;
    }

    function printEmployees(employees) {
        employees = Object.entries(employees);

        for (const [emp, num] of employees) {
            console.log(`Name: ${emp} -- Personal Number: ${num}`);
        }
    }
}

employeesObj([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);