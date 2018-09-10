let vowel_by_loop = function(inputStr){
    let vowel_count = 0;
    for (let c of inputStr.toLowerCase()){
        if("aeiou".split('').includes(c)){
            vowel_count++;
        }
    }
    return vowel_count;
}

let vowel_by_rexp = function(inputStr){
    let matches = inputStr.match(/[aeiou]/gi);
    return matches ? matches.length : 0
}
export default {vowel_by_loop, vowel_by_rexp}