function loadingBar(num) {
    let partInPercent = num / 10;
    let percentBar = '%';
    let partInDots = 10 - partInPercent;
    let dotsBar = '.';
    percentBar = percentBar.repeat(partInPercent);
    dotsBar = dotsBar.repeat(partInDots);

    if (num != 100) {
        console.log(`${num}% [${percentBar}${dotsBar}]`);
        console.log(`Still loading...`);
    } else {
        console.log(`100% Complete!`);
        console.log(`[%%%%%%%%%%]`);
    }
}

loadingBar(30);
loadingBar(50);
loadingBar(100);