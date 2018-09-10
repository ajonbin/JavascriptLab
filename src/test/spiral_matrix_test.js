import spiral_matrix from "../spiral_matrix";
import { assert } from "chai";

/*
spiral_matrix(2)
[
    [1,2],
    [4,3]
]

spiral_matrix(3)
[
    [1,2,3],
    [8,9,4],
    [7,6,5]
]

spiral_matrix(4)
[
    [1, 2, 3,  4],
    [12,13,14, 5],
    [11,16,15, 6],
    [10, 9, 8, 7]
]

spiral_matrix(5)
[
    [1, 2, 3,  4, 5],
    [16,17,18, 19, 6],
    [15,24,25, 20, 7],
    [14, 23,22, 21, 8],
    [13, 12, 11, 10, 9],

]
*/
describe("Test Spiral Matrix", () => {
    it("Test Spiral Matrix n = 2", () => {
        let n = 2;
        for (let fun in spiral_matrix){
            console.log("Call: " + spiral_matrix[fun].name);
            assert.deepEqual(spiral_matrix[fun](n),[[1,2],[4,3]]);
        }
    });
    it("Test Spiral Matrix n = 3", () => {
        let n = 3;
        for (let fun in spiral_matrix){
            console.log("Call: " + spiral_matrix[fun].name);
            assert.deepEqual(spiral_matrix[fun](n),[[1,2,3],[8,9,4],[7,6,5]]);
        }
    });
    it("Test Spiral Matrix n = 4", () => {
        let n = 4;
        for (let fun in spiral_matrix){
            console.log("Call: " + spiral_matrix[fun].name);
            assert.deepEqual(spiral_matrix[fun](n),[[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]);
        }
    });

    it("Test Spiral Matrix n = 5", () => {
        let n = 5;
        for (let fun in spiral_matrix){
            console.log("Call: " + spiral_matrix[fun].name);
            assert.deepEqual(spiral_matrix[fun](n),[
                [1, 2, 3,  4, 5],
                [16,17,18, 19, 6],
                [15,24,25, 20, 7],
                [14, 23,22, 21, 8],
                [13, 12, 11, 10, 9],
            
            ]);
        }
    });
});
