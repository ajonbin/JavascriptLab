import chunk_to_subarry from "../chunk_to_subarray"
import { assert } from "chai"

describe("Test Chunk to Subarray",() => {

    it("Test Chunk to Subarray with even elements",() =>{
        let inputArray = [1,2,3,4,5,6];
        for (let fun in chunk_to_subarry){
            console.log("Call: " + chunk_to_subarry[fun].name);
            let chunked = chunk_to_subarry[fun](inputArray,3);
            assert.deepEqual(chunked, [[1,2,3],[4,5,6]]);
        }
    });
    it("Test Chunk to Subarray with odd elements",() =>{
        let inputArray = [1,2,3,4,5,6,7];
        for (let fun in chunk_to_subarry){
            console.log("Call: " + chunk_to_subarry[fun].name);
            let chunked = chunk_to_subarry[fun](inputArray,3);
            assert.deepEqual(chunked, [[1,2,3],[4,5,6],[7]]);
        }
    });
});