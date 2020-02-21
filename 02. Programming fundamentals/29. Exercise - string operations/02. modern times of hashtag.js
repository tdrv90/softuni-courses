function modernTimesOfHashTag(text) {
    text = text.split(' ');

    for (const word of text) {
        if (word.charAt(0) === '#' && word.length > 1) {
            let newWord = word.replace('#', '');
            let hasDigits = false;

            for (let i = 0; i < newWord.length; i++) {
                if (newWord.charCodeAt(i) >= 47 && newWord.charCodeAt(i) <= 57) {
                    hasDigits = true;
                }
            }

            if (!hasDigits) {
                console.log(newWord);
            }
        }
    }
}

modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialasdMedia #so44cialMedia');