function lockedProfile() {
    const buttons = [...document.getElementsByTagName('button')];
    buttons.forEach(btn => btn.addEventListener('click', showHide));

    function showHide(e) {
        const button = e.target;
        const profile = button.parentNode;
        const moreInfo = profile.getElementsByTagName('div')[0];
        const lockStatus = profile.querySelector('input[type=radio]:checked').value;

        if (lockStatus === 'unlock') {
            if (button.textContent === 'Show more') {
                moreInfo.style.display = 'inline-block';
                button.textContent = 'Hide it';
            } else if (button.textContent === 'Hide it') {
                moreInfo.style.display = 'none';
                button.textContent = 'Show more';
            }
        }
    }
}