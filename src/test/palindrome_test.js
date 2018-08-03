import palindrome from "../palindrome";
import { assert } from "chai";

describe("Test Palindrome", ()=>{

    it("Test Parlindrome String", () => {
        let testStr = "abccba";
        for (let fun in palindrome){
            console.log("Call: " + palindrome[fun].name);
            let isParlindrome = palindrome[fun](testStr);
            assert(isParlindrome);
        }
    });
    it("Test Non-Parlindrome String", () => {
        let testStr = "abcdef";
        for (let fun in palindrome){
            console.log("Call: " + palindrome[fun].name);
            let isParlindrome = palindrome[fun](testStr);
            assert(!isParlindrome);
        }
    })
});