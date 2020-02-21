function catsClassExample(input) {
    let cats = [];

    class Cat {
        constructor(catName, age) {
            this.catName = catName;
            this.age = age;
            this.meow = () => {
                console.log(`${catName}, age ${age} says Meow`);
            }
        }
    }

    for (let line of input) {
        let catData = line.split(' ');
        let name, age;

        [name, age] = [catData[0], catData[1]];
        cats.push(new Cat(name, age));
    }

    for (const eachCat of cats) {
        eachCat.meow();
    }
}

catsClassExample(['Mellow 2', 'Tom 5']);