let capitalize_string_by_map = function(inputStr) {
    return inputStr
        .split(' ')
        .map((subStr) => {
            return subStr[0].toUpperCase() + subStr.slice(1);
        })
        .join(' ');
}


let capitalize_string_by_loop = function(inputStr){
    let last_char = ' ';
    let capitalized = '';
    for (let c of inputStr){
        if (last_char === ' '){
            capitalized += c.toUpperCase();
        }else{
            capitalized += c;
        }
        last_char = c;
    }
    return capitalized;
}

export default { capitalize_string_by_map, capitalize_string_by_loop}