let reverse_string_by_forloop = function(input_str){
    let revesed = "";
    if(input_str.length > 0){
        for (let i = input_str.length-1; i >= 0; i--){
            revesed += input_str[i];
        }
    }
    return revesed;
};

let reverse_string_by_array = function(input_str){
    return input_str.split('').reverse().join('');
}

let reverse_string_by_forofloop = function(input_str){
    let reserved = '';
    for (let c of input_str){
        reserved = c + reserved;
    }
    return reserved;
}

let reverse_string_by_reduce = function(input_str){
    return input_str.split('').reduce((reversed, character)=>{
        return character + reversed;
    },'');
}

export default { 
    reverse_string_by_forofloop, 
    reverse_string_by_forloop, 
    reverse_string_by_array ,
    reverse_string_by_reduce
}

export { 
    reverse_string_by_forofloop, 
    reverse_string_by_forloop, 
    reverse_string_by_array ,
    reverse_string_by_reduce
}