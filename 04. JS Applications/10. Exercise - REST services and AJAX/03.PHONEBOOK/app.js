function attachEvents() {
    const phonebookContainer = document.getElementById('phonebook');
    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');

    function loadPhonebook() {
        fetch(`https://phonebook-nakov.firebaseio.com/phonebook.json`)
            .then(res => res.json())
            .then(data => {
                phonebookContainer.innerHTML = '';
                Object.entries(data)
                    .forEach(([elId, phonebookData]) => {
                        const { phone, person } = phonebookData;
                        const li = document.createElement('li');
                        li.textContent = `${person}: ${phone}`;
                        let deleteBtn = document.createElement('button');
                        deleteBtn.textContent = 'Delete';
                        deleteBtn.setAttribute("data-target", elId);
                        deleteBtn.addEventListener('click', deleteContact);
                        li.appendChild(deleteBtn);
                        phonebookContainer.appendChild(li);
                    })
            })
            .catch(err => {
                console.log(err);
            })
    }

    function createContact() {
        const person = personInput.value;
        const phone = phoneInput.value;

        const headers = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ person, phone })
        }

        fetch(`https://phonebook-nakov.firebaseio.com/phonebook.json`, headers)
            .then(() => {
                phonebookContainer.innerHTML = '';
                personInput.value = '';
                phoneInput.value = '';

                loadPhonebook();
            })
            .catch(err => {
                console.log(err)
            });
    }

    function deleteContact(e) {
        const contactId = this.getAttribute('data-target');
        const headers = {
            method: 'DELETE'
        }
        fetch(`https://phonebook-nakov.firebaseio.com/phonebook/${contactId}.json`, headers)
            .then(() => {
                phonebookContainer.innerHTML = '';
                loadPhonebook();
            })
            .catch(err => {
                console.log(err);
            });
    }

    return {
        loadPhonebook,
        createContact,
        deleteContact
    }
}

let result = attachEvents();