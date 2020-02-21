function listStudents() {
    const baseUrl = `https://baas.kinvey.com/appdata/kid_BydZyAS3B/students/`;

    const headers = {
        method: "GET",
        headers: {
            "Authorization": `Basic ${btoa("Sasho:sasho")}`,
            "Content-Type": "application/json",
        }
    };

    function handleError(e) {
        if (!e.ok) {
            throw new Error(e.statusText);
        }

        return e;
    }

    function fetchData(baseUrl, headers) {

        return fetch(baseUrl, headers)
            .then(handleError)
            .then((x) => x.json())
            .then((x) => x
                .sort((a, b) => a.id - b.id)
                .map(x => {
                    const studentsContainer = document.querySelector("#results > tbody");
                    const tr = document.createElement('tr');
                    const idTd = document.createElement('td');
                    const firstNameTd = document.createElement('td');
                    const lastNameTd = document.createElement('td');
                    const facultyNumberTd = document.createElement('td');
                    const gradeTd = document.createElement('td');

                    idTd.textContent = x.id;
                    firstNameTd.textContent = x.firstName;
                    lastNameTd.textContent = x.lastName;
                    facultyNumberTd.textContent = x.facultyNumber;
                    gradeTd.textContent = x.grade;

                    tr.append(idTd, firstNameTd, lastNameTd, facultyNumberTd, gradeTd);
                    studentsContainer.appendChild(tr);
                }));
    }

    fetchData(baseUrl, headers);
}


listStudents();