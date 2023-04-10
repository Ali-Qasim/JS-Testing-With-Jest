const {

  floorCalc

} = require("./floorCalc.js");

describe("Floor Calculator", () => {

  let floor;

  beforeEach(() => {

    floor = new floorCalc();

  })

  const inp = [[1, 11],[2, 1]];

  describe("addData", () => {

    it("should store inputs", () => {

      expect(floor.addData(inp)).toEqual("Added");
      expect(floor.peek).toBe(inp);

    })

    it("should alert when inch values are greater than 11", () => {

      expect(floor.addData([[1, 12],[2, 1]])).toEqual("Invalid, inch value greater than 11!");

    })

    it("should alert when values are non-numeric", () => {

      expect(floor.addData([['a' , 2],[1 , 1]])).toEqual("Invalid, non-numeric!");
      expect(floor.addData([[1 , 'a'],[1 , 1]])).toEqual("Invalid, non-numeric!");
      expect(floor.addData([[1 , 2],['a' , 1]])).toEqual("Invalid, non-numeric!");
      expect(floor.addData([[1 , 2],[1 , 'a']])).toEqual("Invalid, non-numeric!");

    })

    it("should alert when values are negative", () => {

      expect(floor.addData([[-1 , 2],[1 , 1]])).toEqual("Invalid, negative value!");
      expect(floor.addData([[1 , -1],[1 , 1]])).toEqual("Invalid, negative value!");
      expect(floor.addData([[1 , 2],[-1 , 1]])).toEqual("Invalid, negative value!");
      expect(floor.addData([[1 , 2],[1 , -1]])).toEqual("Invalid, negative value!");

    })
  })

  describe("calculate", () => {

    it("should return null if no data has been added", () => {

      expect(floor.calculate(floor.items)).toBeNull;

    })

    it("should return the product of values with only ft values", () => {

      floor.addData([[1, 0] , [3, 0]]);
      floor.addData([[1, 0] , [4, 0]]);
      floor.addData([[1, 0] , [5, 0]]);
      expect(floor.calculate(floor.items)).toEqual([12, 0]);

    })

    it("should return the product of values with only inch values", () => {

      floor.addData([[0, 6] , [0, 0]]);
      floor.addData([[0, 11] , [0, 7]]);
      floor.addData([[0, 6] , [0, 8]]);

      expect(floor.calculate(floor.items)).toEqual([0, 125]);

    })

    it("should return the product of values with ft and inch values", () => {

      floor.addData([[0, 6] , [1, 0]]);
      floor.addData([[1, 11] , [2, 7]]);
      floor.addData([[0, 6] , [1, 8]]);

      expect(floor.calculate(floor.items)).toEqual([6, 41]);

    })

  })
})