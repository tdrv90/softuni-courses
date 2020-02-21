function toggle(e) {
    const infoParagraph = e.parentNode.getElementsByTagName('p')[0];
    infoParagraph.style.display = infoParagraph.style.display === 'none'
        ? 'inline'
        : 'none';
}

(() => {
    renderMonkeyTemplate();

    async function renderMonkeyTemplate() {

        const source = await fetch('http://127.0.0.1:5501/templates/all-monkeys.hbs')
            .then(res => res.text());

        const template = Handlebars.compile(source);
        const context = { monkeys: window.monkeys };
        const monkeysHtml = template(context);

        document.querySelector("body > section > div").innerHTML = monkeysHtml;
    }
})()