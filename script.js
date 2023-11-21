
// reverseVowelsAndReplaceL():
// 1. Replaces all 'L's (uppercase and lowercase) with '1's
// 2. calls ReverseVowelsAndREplaceO() while providing it reverseVowelsAndReplaceL's
// reversed string
function reverseVowelsAndReplaceL(inputString){
    // split input string into array of characters
    const characters = inputString.split('');

    // use filter method with isVowel() helper to make array of vowels
    const vowels = characters.filter(char => isVowel(char));

    // reverse vowels array
    vowels.reverse();
    console.log(`Reversed Vowels: ${vowels}`);

    // reverse vowels in characters array and replace 'L's with '1's
    let vowelIndex = 0;
    for(let i = 0; i < characters.length; i++){
        if(isVowel(characters[i])){ // if we are at a vowel
            characters[i] = vowels[vowelIndex]; // reverse vowels in characters array
            vowelIndex++; // increment vowel index
        }
    }

    // join characters array into result string and return
    let result = characters.join('');

    // use replace with regex to replace 'L's with '1's
    // A regular expression is a sequence of characters that forms
    // a search pattern. 
    // Syntax: /pattern/modifiers -> /L|L/g
    // *************************************************************
    // | -> modifier that finds any of the alternatives separated with |
    // g -> global modifier that specifies a global match (find all matches
    //      in string rather than stopping after finding first match)
    // /L|l/g -> find upper case L and lowercase l throughout string
    result = result.replace(/L|l/g, '1');

    // return result;

    // calls reverseVowelsAndReplaceO() while providing it result of 
    // reverseVowelsAndReplaceL()'s result
    console.log(`reverseVowelsAndReplaceL(${inputString}): ${result}`);
    return reverseVowelsAndReplaceO(result);
}

// let test3 = "Like lost lingers lots of L's";
// reverse vowels -> ieoieoo -> ooeioei -> Loko lest lingors lets if L's
// replace 'L's with '1's -> 1oko 1est 1ingors 1ets if 1's
// console.log(`test3: ${reverseVowelsAndReplaceL(test3)}`);

// reverseVowelsAndReplaceO():
// 1. Takes reverseVowelsAndReplaceL's reversed string and reverses it AGAIN
// 2. Replaces all 'O's (uppercase and lowercase) with '0's 
// 3. Calls reverseVowelsAndReplaceS() while providing it reverseVowelsAndReplaceO's
// reversed string
function reverseVowelsAndReplaceO(inputString){
    // split input string into array of characters
    const characters = inputString.split('');

    // use filter method with isVowel() helper to make array of vowels
    const vowels = characters.filter(char => isVowel(char));

    // reverse vowels array
    vowels.reverse();
    console.log(`Reversed Vowels: ${vowels}`);

    // reverse vowels and replace 'O's with '0's
    let vowelIndex = 0;
    for(let i = 0; i < characters.length; i++){
        if(isVowel(characters[i])){
            characters[i] = vowels[vowelIndex]; // reverse vowels
            vowelIndex++; // increment vowelIndex
        }
    }

    // join and return result string
    let result = characters.join('');

    // replace 'O's with '0's
    result = result.replace(/O|o/g, '0');
    // result = result.replace(/o/g, '0');

    // return result;

    // calls reverseVowelsAndReplaceS() while providing it 
    // reverseVowelsAndReplaceO()'s result
    console.log(`reverseVowelsAndReplaceO(${inputString}): ${result}`);
    return reverseVowelsAndReplaceS(result);
}

// let test2 = "Obvious on obstacle origin O's"; 
// reverse vowels -> oiouooaeoiio -> oiioeaoouoio
// -> Obviios en abstoclo urogin O's
// replace 'O's with '0's -> 0bvii0s en abst0cl0 ur0gin 0's 
// console.log(`test2: ${reverseVowelsAndReplaceO(test2)}`);

// reverseVowelsAndReplaceS():
// 1. Replace all 'S's (uppercase and lowercase) with '5's
// 2. Consoles and returns the final reversed string

function reverseVowelsAndReplaceS(inputString){
    // split input string into an array of characters
    const characters = inputString.split('');

    // use filter method with isVowel() helper to make array of vowels
    const vowels = characters.filter(char => isVowel(char));

    // reverse the vowels array
    vowels.reverse();
    console.log(`Reversed Vowels: ${vowels}`);

    // reverse vowels
    let vowelIndex = 0; // initialize vowel array index
    for(let i = 0; i < characters.length; i++){ // iterate through characters
        if(isVowel(characters[i])){ // if we are at a vowel
            characters[i] = vowels[vowelIndex]; // reverse vowel
            vowelIndex++; // increment vowel index
        }
    }    

    // join and return result string
    let result = characters.join('');

    // use replace method with regex to replace 'S's with '5's
    result = result.replace(/S|s/g, '5');

    console.log(`reverseVowelsAndReplaceS(${inputString}): ${result}`);
    return result;
}

// let test1 = "Super string solar S's";
// reverse vowels -> ueioa -> aoieu -> Sapor string selur S's
// replace S's with '5's -> 5apor 5tring 5elur 5'5
// console.log(`test1: ${reverseVowelsAndReplaceS(test1)}`);

// helper function isVowel() checks if our input character is a vowel
// returns true if the input char is a vowel, false otherwise
function isVowel(char){
    return 'aeiouAEIOU'.includes(char);
}

// testing 
let finalTest = "Lustrous Luck Oblique Origami Splendid Stupor";

// reverseVowelsAndReplaceL(finalTest):
// vowels = uouu Oiue Oiai eiuo
// reverse = ouie iaiO euiO uuou
// -> Lostruis Leck iblaqiO erugimO Splundud Stopur
// replace 'L's with '1's
// -> 1ostruis 1eck ib1aqiO erugimO Sp1undud Stopur

// reverseVowelsAndReplaceO("1ostruis 1eck ib1aqiO erugimO Splundud Stopur"):
// vowels = ouie iaiO euiO uuou
// reverse = uouu Oiue Oiai eiuo
// -> 1ustrous 1uck Oblique Origami Sp1endid Stupor
// replace 'O's with '0's
// -> 1ustr0us 1uck 0blique 0rigami Sp1endid Stup0r

// reverseVowelsAndReplaceS("1ustr0us 1uck 0b1ique 0rigami Sp1endid Stup0r")
// vowels = uuui ueia ieiu
// reverse = uiei aieu iuuu
// -> 1ustr0is 1eck 0b1iqai 0regumi Splundud Stup0r
// replace 'S's with '5's
// -> 1u5tr0i5 1eck 0b1iqai 0regumi 5plundud 5tup0r

console.log(reverseVowelsAndReplaceL(finalTest));

