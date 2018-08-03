import { reverse_string_by_reduce } from "./reverse_string"

let reverse_int_by_charsign = function(inputInt){
    let intStr = inputInt.toString();
    let sign = '';
    if (intStr[0] === '-'){
        sign = '-';
    }
    return parseInt(sign + reverse_string_by_reduce(intStr));
}

let reverse_int_by_mathsign = function(inputInt){
    let intStr = inputInt.toString();
    return parseInt(reverse_string_by_reduce(intStr)) * Math.sign(inputInt);
}

export default { reverse_int_by_mathsign, reverse_int_by_charsign }