import steps from "../steps";
import {assert} from "chai";

describe("Test Steps", () => {
    it("Test Steps 4", () => {
        for (let fun in steps){
            console.log("Call: " + steps[fun].name);
            assert.equal(steps[fun](4),"#   \n##  \n### \n####\n");
        }
    })
})