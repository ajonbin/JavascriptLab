import vowel from "../vowel"
import { assert } from "chai"


describe("Test Vowel", () => {
    it("Test Vowel", () => {
        let inputStr = "Hello, WORLD!";
        for (let fun in vowel){
            console.log("Call: " + vowel[fun].name);
            assert.equal(vowel[fun](inputStr),3);
        }
    });
    it("Test Vowel", () => {
        let inputStr = "Hr s n vwl";
        for (let fun in vowel){
            console.log("Call: " + vowel[fun].name);
            assert.equal(vowel[fun](inputStr),0);
        }
    })
})