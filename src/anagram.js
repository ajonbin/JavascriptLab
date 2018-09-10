let anagram_by_reduce = function(inputStr1, inputStr2) {
    let char_counts_1 = char_counts(inputStr1);
    let char_counts_2 = char_counts(inputStr2);

    if(Object.keys(char_counts_1).length !== Object.keys(char_counts_2).length){
        return false;
    }
    for( let k in char_counts_1){
        if(char_counts_1[k] != char_counts_2[k]){
            return false;
        }
    }
    return true;
}

function char_counts(inputStr){

    return inputStr.replace(/[^\w]/g,'')
        .toLowerCase()
        .split('')
        .reduce((preValue,value) => {
            preValue[value] = preValue[value] + 1 || 1;
            return preValue;
        }, {});
}

let anagram_by_sort = function(inputStr1,inputStr2){
    return clean_string(inputStr1) === clean_string(inputStr2);
}

function clean_string(inputStr){
    return inputStr
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort().join('');
}

export default { anagram_by_reduce ,anagram_by_sort }