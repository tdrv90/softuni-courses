function thePyramidOfKingDjoser(baseWidth, increment) {

    let totalStone = 0;
    let totalMarble = 0;
    let totalLapizLazuli = 0;
    let totalGold = 0;
    let totalHeight = 0;

    while (baseWidth > 2) {
        let outerMaterial = baseWidth * 4 - 4;
        let innerMaterial = baseWidth * baseWidth - outerMaterial;
        totalStone += innerMaterial;

        totalHeight++;

        if (totalHeight % 5 == 0) {
            totalLapizLazuli += outerMaterial;
        } else {
            totalMarble += outerMaterial;
        }
        baseWidth -= 2;
    }

    totalHeight++;
    totalGold = baseWidth * baseWidth;

    console.log(`Stone required: ${Math.ceil(totalStone * increment)}`)
    console.log(`Marble required: ${Math.ceil(totalMarble * increment)}`)
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapizLazuli * increment)}`)
    console.log(`Gold required: ${Math.ceil(totalGold * increment)}`)
    console.log(`Final pyramid height: ${Math.floor(totalHeight * increment)}`)
}

// thePyramidOfKingDjoser(11, 1);
thePyramidOfKingDjoser(11, 0.75);
thePyramidOfKingDjoser(12, 1);