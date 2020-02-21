function solve() {
  let input = document.querySelector("#input");
  let output = document.querySelector("#output");

  let sentences = input.textContent.split('.');
  sentences = sentences.filter(x => x !== '');

  for (let i = 0; i < sentences.length; i += 3) {
    let first = sentences[i];
    let second = sentences[i + 1];
    let third = sentences[i + 2];

    let group = [];
    if (typeof first !== 'undefined') {
      group.push(first + '.');
    }
    if (typeof second !== 'undefined') {
      group.push(second + '.');
    }
    if (typeof third !== 'undefined') {
      group.push(third + '.');
    }
    group = group.join('');

    let groupOutput = document.createElement('p');
    groupOutput.textContent = group;

    output.appendChild(groupOutput);
  }

}