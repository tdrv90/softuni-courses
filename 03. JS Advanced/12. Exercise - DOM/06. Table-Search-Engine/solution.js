function solve() {
   const data = Array.from(document.querySelectorAll('tbody > tr'));
   const searchButton = document.querySelector('#searchBtn');
   const searchField = document.querySelector('#searchField');

   searchButton.addEventListener('click', function () {
      let searchedPhrase = new RegExp(searchField.value, 'gi');

      data.map(e => {
         e.classList.remove('select');
         if (e.innerHTML.match(searchedPhrase) != null) {
            e.className = 'select';
         }
      });
      searchField.value = '';
   })
}