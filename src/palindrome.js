import { reverse_string_by_reduce } from "./reverse_string"

let palindrome_by_reverse = function(inputStr){
    const reversed = reverse_string_by_reduce(inputStr);
    return inputStr === reversed;
}

let palindrome_by_every = function(inputStr){
    return inputStr.split('').every((value,index,array) => {
        return value === array[array.length - index -1];
    });
}
export default { palindrome_by_reverse, palindrome_by_every };
