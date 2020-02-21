function solve() {
    const infoSpan = document.getElementsByClassName('info')[0];
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');

    let currentId = 'depot';
    let currentName;

    function depart() {
        fetch(`https://judgetests.firebaseio.com/schedule/${currentId}.json`)
            .then(res => res.json())
            .then(departSuccess)
            .catch(err => {
                infoSpan.textContent = `Something went wrong!`
            });
    }

    function arrive() {
        infoSpan.textContent = `Arriving at ${currentName}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    function departSuccess(data) {
        let { name, next } = data;
        currentId = next;
        currentName = name;

        departBtn.disabled = true;
        arriveBtn.disabled = false;
        infoSpan.textContent = `Next stop ${currentName}`;
    }



    return {
        depart,
        arrive
    };
}

let result = solve();