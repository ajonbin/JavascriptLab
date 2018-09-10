/*
step(2)
    '# '
    '##'
step(3)
    '#  '
    '## '
    '###'
step(4)
    '#   '
    '##  '
    '### '
    '####'
*/

let steps_by_loop = function(n){
    let output = "";
    for (let i = 0; i < n; i++){
        let line = [];
        for (let j = 0; j < n; j++){
            if( i >= j){
                line.push('#')
            }else{
                line.push(' ');
            }
        }
        output += line.join('');
        output += "\n";
    }
    return output;
}

let steps_by_recuse = function(n, row=0, stair="", output=""){
    if(n === row){
        return output;
    }

    if(n === stair.length){
        output += stair;
        output += "\n";
        output = steps_by_recuse(n, row + 1, "", output);
    }else{
        if( stair.length <= row){
            stair += "#";
        }else{
            stair += " ";
        }
        output = steps_by_recuse(n, row, stair, output);
    }

    return output;
}

export default { steps_by_loop, steps_by_recuse }