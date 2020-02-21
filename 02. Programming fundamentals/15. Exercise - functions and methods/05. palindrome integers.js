function palindrome(arr) {

    arr.forEach(elem => {
        if (elem.toString().split('').reverse().join('') === elem.toString()) {
            console.log(true);
        } else {
            console.log(false);
        }
    })
}

// palindrome([123, 323, 421, 121]);


function palindromeIntegers(arr) {
    for (let i = 0; i < arr.length; i++) {
        let initialStr = String(arr[i]);
        let reversedStr = initialStr.split("").reverse().join("");

        let isPalindrome = false;;
        if (initialStr === reversedStr) {
            isPalindrome = true;
        }

        if (isPalindrome) {
            console.log("true");
        } else {
            console.log("false");
        }
    }
}

palindromeIntegers([123, 323, 421, 121]);