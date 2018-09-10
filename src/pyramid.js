/*
pyramid(2)
    ' # '
    '###'
pyramid(3)
    '  #   '
    ' ###  '
    '######'
pyramid(4)
    '   #   '
    '  ###  '
    ' ##### '
    '#######'
*/
function pyramid(n, row = 0, column = 0, output=""){
    if(n === row){
        return output;
    }

    if(column === (2 * n - 1)){
        output += '\n';
        output = pyramid(n, row + 1, 0, output)
    }else{
        if( column < (n - row - 1)){
            output += ' ';
        }else if (column >= (2 * n - 1 - (n - row - 1))){
            output += ' ';
        }else{
            output += '#';
        }
        output = pyramid(n, row , column + 1, output)
    }
    return output;
}

export default { pyramid }

console.log(pyramid(4))