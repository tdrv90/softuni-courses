function getArticleGenerator(articles) {
    const content = document.querySelector('#content');
    const addArticle = () => {
        if (articles.length > 0) {
            const newArticle = document.createElement('article');
            newArticle.textContent = articles.shift();
            content.appendChild(newArticle);
        }
    }

    return addArticle;
}