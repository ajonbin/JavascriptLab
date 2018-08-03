import fizz_buzz from "../fizz_buzz"
import { assert } from "chai"

describe("Test FizzBuzz", () => {
    it("Test FizzBuzz for 15", () => {
        let output = fizz_buzz(15);
        assert.equal(output[2], "fizz");
        assert.equal(output[4], "buzz");
        assert.equal(output[14], "fizzbuzz");
        assert.equal(output[10], "11");

    });

    it("Test FizzBuzz for 30", () => {
        let output = fizz_buzz(30);
        assert.equal(output[2], "fizz");
        assert.equal(output[4], "buzz");
        assert.equal(output[14], "fizzbuzz");
        assert.equal(output[24], "buzz");
        assert.equal(output[29], "fizzbuzz");
        assert.equal(output[7], "8");
    });
})