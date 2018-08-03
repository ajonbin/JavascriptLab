import reverse_int from "../reverse_int"
import { assert } from "chai"

describe("Test Reverse Int", () => {

    it("Test Positive Number", () => {
        let number1 = 345;
        for (let fun in reverse_int){
            console.log("Call: " + reverse_int[fun].name);
            assert.equal(reverse_int[fun](number1),543);
        }
    });

    it("Test Positive Number with 00", () => {
        let number1 = 400;
        for (let fun in reverse_int){
            console.log("Call: " + reverse_int[fun].name);
            assert.equal(reverse_int[fun](number1),4);
        }
    });

    it("Test Negative Number", () => {
        let number1 = -345;
        for (let fun in reverse_int){
            console.log("Call: " + reverse_int[fun].name);
            assert.equal(reverse_int[fun](number1),-543);
        }
    })

    it("Test Negative Number with 00", () => {
        let number1 = -300;
        for (let fun in reverse_int){
            console.log("Call: " + reverse_int[fun].name);
            assert.equal(reverse_int[fun](number1),-3);
        }
    })
});