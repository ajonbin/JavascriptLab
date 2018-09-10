let spiral_matrix = function (n, max=0, round=0, value=1, matrix=undefined) {
    if(matrix == undefined){
        max = n * n;
        matrix = [];
        for (let i = 0; i < n ; i++){
            matrix[i] = [];
        }
    }

    if( value > max){
        return matrix;
    }
    
    let row = round;
    let column = round;
    while(true){
        matrix[row][column] = value;
        value++;
        if((column === round) && (row === round+1)){
            break;
        }else if(row === round){
            column++;
        }else if(row === n-1){
            column--;
        }else if(column === round){
            row--;
        }else if(column === n-1 ){
            row++;
        }
    }

    return spiral_matrix(n/2, max, round+1, value, matrix);
}

spiral_matrix(3);