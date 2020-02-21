function solve() {
    const keyword = document.querySelector("#string").value;
    const text = document.querySelector("#text").value;
    const locationPattern = /(east|north).*?([\d]{2})[^,]*?,[^,]*?([\d]{6})/gim;

    const message = text.match(`${keyword}(.+)${keyword}`)[1];

    let eastMatch;
    let northMatch;

    let result;
    while ((result = locationPattern.exec(text)) !== null) {
        if (result[1].toLowerCase() === 'east') {
            eastMatch = result;
        } else {
            northMatch = result;
        }
    }

    let northP = document.createElement("p");
    northP.innerHTML = `${northMatch[2]}.${northMatch[3]} N`;
    let eastP = document.createElement("p");
    eastP.innerHTML = `${eastMatch[2]}.${eastMatch[3]} N`;
    let msgP = document.createElement("p");
    msgP.innerHTML = `Message: ${message}`;

    document.getElementById('result').appendChild(northP);
    document.getElementById('result').appendChild(eastP);
    document.getElementById('result').appendChild(msgP);
}