import reverse_string from "../reverse_string"
import { assert } from "chai"

describe("Test String Reverse", () => {
    it(("Test Regular String"), () => {
        let str1 = "Hello"
        for ( let fun in reverse_string){
            console.log("Call: " + reverse_string[fun].name);
            let str1_reversed = reverse_string[fun](str1)
            assert.equal(str1_reversed, "olleH")
        }
        
    });
})