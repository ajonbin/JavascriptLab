let most_used_char = function(inputStr){
    let counts = inputStr.split('')
        .reduce((preValue, value) => {
            preValue[value] = preValue[value] + 1 || 1;
            return preValue;
        },{});
    let most_used_char = '';
    let max_count = 0;
    for (let k in counts){
        if (counts[k] > max_count){
            most_used_char = k;
            max_count = counts[k];
        }
    }
    return most_used_char;
}

export default { most_used_char }