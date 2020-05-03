function createArticle() {
	const articlesList = document.getElementById('articles');
	const title = document.getElementById('createTitle');
	const content = document.getElementById('createContent');

	if (title.value.length != 0 && content.value.length != 0) {
		let heading = document.createElement('h3');
		heading.textContent = title.value;

		let text = document.createElement('p');
		text.textContent = content.value;

		let newArticle = document.createElement('article');
		newArticle.appendChild(heading);
		newArticle.appendChild(text);

		articlesList.appendChild(newArticle);
	}

	title.value = '';
	content.value = '';
}