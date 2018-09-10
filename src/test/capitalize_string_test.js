import capitalize_string from "../capitalize_string"
import { assert } from "chai"

describe("Test Capitalize String", () =>{
    it("Test Capitalize String", () => {
        let inputStr = "look, a lazy fox";
        for ( let fun in capitalize_string ){
            console.log("Call: " + capitalize_string[fun].name);
            assert.equal(capitalize_string[fun](inputStr), "Look, A Lazy Fox");
        }
    })
})