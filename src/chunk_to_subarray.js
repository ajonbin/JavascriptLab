let chunk_to_subarray_by_slice = function(inputArray, chunkSize){
    let chunked = [];
    let chunked_size = 0;
    for(let i = 0; i + chunkSize < inputArray.length; i += chunkSize){
        chunked.push(inputArray.slice(i, i+chunkSize));
        chunked_size++;
    }
    chunked.push(inputArray.slice(chunked_size*chunkSize));
    return chunked;
}

let chunk_to_subarray_by_loop = function(inputArray, chunkSize){
    let chunked = [];
    for (let element of inputArray){
        const last = chunked[chunked.length - 1];
        if(!last || last.length === chunkSize){
            chunked.push([element]);
        }else{
            last.push(element);
        }
    }
    return chunked;
}

export default { chunk_to_subarray_by_loop, chunk_to_subarray_by_slice }