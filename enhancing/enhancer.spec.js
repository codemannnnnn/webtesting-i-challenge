const enhancer = require("./enhancer.js");
// test away!
describe("enhancer", () => {
  describe("repair()", () => {
    it("should set the item.durability to 100", () => {
      const wornItem = {
        name: "AR-15",
        durability: 1,
        enhancement: 0,
      };

      const expectedItem = {
        name: "AR-15",
        durability: 100,
        enhancement: 0,
      };

      const actualItem = enhancer.repair(wornItem);

      expect(actualItem.durability).toBe(expectedItem.durability);
    });
  });

  describe("succeed()", () => {
    it("should add 1 to item.enhancement if less than 20", () => {
      const itemOne = {
        name: "AR-15",
        durability: 53,
        enhancement: 20,
      };

      const itemTwo = {
        name: " AR-10",
        durability: 17,
        enhancement: 0,
      };

      const itemThree = {
        name: " AR-10",
        durability: 59,
        enhancement: 15,
      };

      const expectedItemOne = {
        name: "AR-15",
        durability: 53,
        enhancement: 20,
      };

      const expectedItemTwo = {
        name: " AR-10",
        durability: 17,
        enhancement: 1,
      };

      const expectedItemThree = {
        name: " AR-10",
        durability: 59,
        enhancement: 16,
      };

      const actualItemOne = enhancer.succeed(itemOne);

      const actualItemTwo = enhancer.succeed(itemTwo);

      const actualItemThree = enhancer.succeed(itemThree);

      expect(expectedItemOne.enhancement).toBe(actualItemOne.enhancement);

      expect(expectedItemTwo.enhancement).toBe(actualItemTwo.enhancement);

      expect(expectedItemThree.enhancement).toBe(actualItemThree.enhancement);
    });
  });

  describe("fail()", () => {
    it("should reduce durability of an item and when enhancement is greater than 16 it takes one away from enhancement", () => {
      const itemOne = {
        name: "AR-15",
        durability: 72,
        enhancement: 20,
      };

      const itemTwo = {
        name: " AR-10",
        durability: 17,
        enhancement: 0,
      };

      const itemThree = {
        name: " AR-10",
        durability: 59,
        enhancement: 15,
      };

      const expectedItemOne = {
        name: "AR-15",
        durability: 62,
        enhancement: 19,
      };

      const expectedItemTwo = {
        name: " AR-10",
        durability: 12,
        enhancement: 0,
      };

      const expectedItemThree = {
        name: " AR-10",
        durability: 49,
        enhancement: 15,
      };

      const actualItemOne = enhancer.fail(itemOne);

      const actualItemTwo = enhancer.fail(itemTwo);

      const actualItemThree = enhancer.fail(itemThree);

      expect(expectedItemOne.enhancement).toBe(actualItemOne.enhancement);
      expect(expectedItemOne.durability).toBe(actualItemOne.durability);

      expect(expectedItemTwo.enhancement).toBe(actualItemTwo.enhancement);
      expect(expectedItemTwo.durability).toBe(actualItemTwo.durability);

      expect(expectedItemThree.enhancement).toBe(actualItemThree.enhancement);
      expect(expectedItemThree.durability).toBe(actualItemThree.durability);
    });
  });

  describe("get()", () => {
    it("should change the enhancement value to the name if value.enhancement is greater than zero", () => {
      const itemOne = {
        name: "AR-15",
        durability: 53,
        enhancement: 0,
      };

      const itemTwo = {
        name: " AR-10",
        durability: 17,
        enhancement: 20,
      };

      const expectedItemOne = {
        name: "AR-15",
        durability: 53,
        enhancement: 0,
      };

      const expectedItemTwo = {
        name: "[+20] AR-10",
        durability: 17,
        enhancement: 20,
      };

      const actualItemOne = enhancer.get(itemOne);

      const actualItemTwo = enhancer.get(itemTwo);

      expect(expectedItemOne.name).toBe(actualItemOne.name);

      expect(expectedItemTwo.name).toBe(actualItemTwo.name);
    });
  });
});
