function countVowel(string) {
    let count = 0;
    for (const char of string) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++;
        }
    }
    return count;
}

let vowel = countVowel('sbsisakldfldfkdkflaaieundkie');
console.log(vowel);