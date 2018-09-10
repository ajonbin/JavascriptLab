import fibonacci from "../fibonacci";
import { assert } from "chai";

describe("Test Fibonacci", () => {
    it("Test Fibonacci 4", () => {
        let n = 4;
        for (let fun in fibonacci){
            console.log("Call: " + fibonacci[fun].name);
            assert.equal(fibonacci[fun](n),3);
        }
    });
    it("Test Fibonacci 9", () => {
        let n = 9;
        for (let fun in fibonacci){
            console.log("Call: " + fibonacci[fun].name);
            assert.equal(fibonacci[fun](n),34);
        }
    });
    it("Test Fibonacci 1", () => {
        let n = 1;
        for (let fun in fibonacci){
            console.log("Call: " + fibonacci[fun].name);
            assert.equal(fibonacci[fun](n),1);
        }
    })
})