function trekkingMania(arguments) {
    let groups = Number(arguments[0]);

    let totalPeople = 0;
    let musala = 0;
    let montblanc = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (var i = 1; i <= groups; i++) {
        let people = Number(arguments[i]);
        totalPeople += people;
        if (people < 6) {
            musala += people;
        } else if (people < 13) {
            montblanc += people;
        } else if (people < 26) {
            kilimandjaro += people;
        } else if (people < 41) {
            k2 += people;
        } else if (people >= 41) {
            everest += people;
        }
    }

    musala = musala / totalPeople * 100;
    montblanc = montblanc / totalPeople * 100;
    kilimandjaro = kilimandjaro / totalPeople * 100;
    k2 = k2 / totalPeople * 100;
    everest = everest / totalPeople * 100;

    console.log(`${musala.toFixed(2)}%`);
    console.log(`${montblanc.toFixed(2)}%`);
    console.log(`${kilimandjaro.toFixed(2)}%`);
    console.log(`${k2.toFixed(2)}%`);
    console.log(`${everest.toFixed(2)}%`);
}

// trekkingMania([10, 10, 5, 1, 100, 12, 26, 17, 37, 40, 78]);
trekkingMania([5, 25, 41, 31, 250, 6]);