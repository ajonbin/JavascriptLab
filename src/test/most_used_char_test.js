import most_used_char from "../most_used_char"
import { assert } from "chai"

describe("Test Max Char in String", () => {
    it("Test Max Char in  alphabet", () => {
        let str1 = "abddddce";
        for (let fun in most_used_char){
            console.log("Call: " + most_used_char[fun].name);
            assert.equal(most_used_char[fun](str1), 'd');
        }
    });

    it("Test Max Char in mix alphabet and number", () => {
        let str1 = "dsfiD499905faddT";
        for (let fun in most_used_char){
            console.log("Call: " + most_used_char[fun].name);
            assert.equal(most_used_char[fun](str1), '9');
        }
    });
})