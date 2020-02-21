function createArticle() {
	const titleInput = document.querySelector("#createTitle");
	const contentInput = document.querySelector("#createContent");
	const articlesSection = document.querySelector("#articles");

	createArticle(titleInput, contentInput);

	function createArticle(titleInput, contentInput) {
		let article = document.createElement('article');
		let title = document.createElement('h3');
		let content = document.createElement('p');

		if (titleInput.value !== '' && contentInput.value !== '') {
			title.textContent = titleInput.value;
			content.textContent = contentInput.value;

			article.appendChild(title);
			article.appendChild(content);
			articlesSection.appendChild(article);
		};

		titleInput.value = '';
		contentInput.value = '';
	}
}