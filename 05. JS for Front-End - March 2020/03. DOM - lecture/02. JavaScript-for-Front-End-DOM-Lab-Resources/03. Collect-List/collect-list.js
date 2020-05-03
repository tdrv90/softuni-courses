function extractText() {
    let output = '';
    const itemsList = document.querySelectorAll("#items li");

    for (const el of itemsList) {
        output += `${el.textContent}\n`
    }

    document.getElementById('result').value = output;
}