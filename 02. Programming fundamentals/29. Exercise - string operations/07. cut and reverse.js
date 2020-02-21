function cutAndReverse(str) {
    let firstPart = str.slice(0, str.length / 2);
    firstPart = firstPart.split('').reverse().join('');
    console.log(firstPart);
    
    let secondPart = str.slice((str.length / 2), str.length);
    secondPart = secondPart.split('').reverse().join('');
    console.log(secondPart)
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
console.log('***');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');