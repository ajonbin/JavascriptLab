import anagram from "../anagram"
import { assert } from "chai"

describe("Anagram is two strings use the same characters in the same quantity",() =>{
    it("Test Anagram Strings", () =>{
        let str1 = "integral";
        let str2 = "triangle";

        for (let fun in anagram){
            console.log("Call: " + anagram[fun].name)
            assert(anagram[fun](str1,str2));
        }
    });
    it("Test Another Anagram Strings with punctuation", () =>{
        let str1 = "rail safety!";
        let str2 = "fairy tales";
        for (let fun in anagram){
            console.log("Call: " + anagram[fun].name)
            assert(anagram[fun](str1,str2));
        }
    });
    it("Test Same characters, but quantity is not same", () =>{
        let str1 = "rail safety";
        let str2 = "fairy stalee";
        for (let fun in anagram){
            console.log("Call: " + anagram[fun].name)
            assert(!anagram[fun](str1,str2));
        }
    });
    it("Test Non-Anagram String", () =>{
        let str1 = "hi, here";
        let str2 = "bye, there";
        for (let fun in anagram){
            console.log("Call: " + anagram[fun].name)
            assert(!anagram[fun](str1,str2));
        }
    });

});