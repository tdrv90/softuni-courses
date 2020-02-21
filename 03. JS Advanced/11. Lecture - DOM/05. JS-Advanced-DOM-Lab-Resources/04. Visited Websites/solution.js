function solve() {
  const links = document.getElementsByTagName('span');
  console.log(links);

  Array.from(links).map(x => x.addEventListener('click', function (e) {
    const selection = e.target.value;

    console.log(selection);
  }))
}