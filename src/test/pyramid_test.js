import pyramid from "../pyramid"
import { assert } from "chai"

describe("Test Piramid", () => {

    it("Test Piramid 4", () => {
        let pyramid_4 = "   #   \n  ###  \n ##### \n#######\n";
        for (let fun in pyramid){
            console.log("Call: " + pyramid[fun].name);
            assert.equal(pyramid[fun](4), pyramid_4);
        }
    });
});