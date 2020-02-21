function usernames(input) {
    let catalogue = [];

    input.forEach(name => {
        if (!catalogue.includes(name)) {
            catalogue.push(name);
        }
    });

    let sortedCatalogue = catalogue.sort((a, b) => a.length - b.length || a.localeCompare(b));

    sortedCatalogue.forEach(x => {
        console.log(x);
    })
}

usernames(['Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston']);
// Aizen
// Ariel
// Billy
// Lilly
// Ashton
// Keyden
// Braston
// Kutcher

// usernames(['Denise',
//     'Ignatius',
//     'Iris',
//     'Isacc',
//     'Indie',
//     'Dean',
//     'Donatello',
//     'Enfuego',
//     'Benjamin',
//     'Biser',
//     'Bounty',
//     'Renard',
//     'Rot']);

// Rot
// Dean
// Iris
// Biser
// Indie
// Isacc
// Bounty
// Denise
// Renard
// Enfuego
// Benjamin
// Ignatius
// Donatello