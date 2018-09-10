let spiral_matrix_by_recurse = function (n, max=0, round=0, value=1, matrix) {
    if(matrix == undefined){
        max = n * n;
        matrix = [];
        for (let i = 0; i < n ; i++){
            matrix[i] = [];
        }
    }

    console.log(n, round);

    let row = round;
    let column = round;
    while(true){
        console.log(row, column);
        if( value > max){
            console.log(matrix);
            return matrix;
        }

        matrix[row][column] = value;

        value++;
        if((column === round) && (row === round+1)){
            break;
        }
        else if(row === round){
            if(column < round + n - 1){
                column++;
            }else{
                row++;
            }
        }else if (row === round + n - 1){
            if(column === round){
                row--;
            }else{
                column--;
            }
        }else if (column === round + n - 1){
            row++;
        }else if (column === round){
            row--;
        }
    }

    return spiral_matrix_by_recurse(Math.round(n/2), max, round+1, value, matrix);
}

let spiral_matrix_by_loop = function(n){
    let matrix = [];
    for (let i = 0; i < n; i++){
        matrix.push([]);
    }

    let value = 1;
    let row_start = 0;
    let column_start = 0;
    let row_end = n - 1;
    let column_end = n - 1;


    while( row_start <= row_end && column_start <= column_end){
        for (let i = column_start; i <= column_end; i++){
            matrix[row_start][i] = value++;
        }
        row_start++;
        for (let i = row_start; i <= row_end; i++){
            matrix[i][column_end] = value++;
        }
        column_end--;
        for (let i = column_end; i >= column_start; i--){
            matrix[row_end][i] = value++;
        }
        row_end--;
        for (let i = row_end; i >= row_start; i--){
            matrix[i][column_start] = value++;
        }
        column_start++;
    }
    return matrix;
}
export default { spiral_matrix_by_recurse , spiral_matrix_by_loop }