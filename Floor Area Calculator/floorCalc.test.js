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

      expect(floor.add(inp)).toEqual("Added");
      expect(floor.peek).toBe(inp);

    })

    it("should alert when inch values are greater than 11", () => {

      expect(floor.add([[1, 12],[2, 1]])).toEqual("Invalid!");

    })

    it("should alert when values are non-numeric", () => {

      expect(floor.add([['a' , 2],[1 , 1]])).toEqual("Invalid!");
      expect(floor.add([[1 , 'a'],[1 , 1]])).toEqual("Invalid!");
      expect(floor.add([[1 , 2],['a' , 1]])).toEqual("Invalid!");
      expect(floor.add([[1 , 2],[1 , 'a']])).toEqual("Invalid!");

    })

    it("should alert when values are negative", () => {

      expect(floor.add([[-1 , 2],[1 , 1]])).toEqual("Invalid!");
      expect(floor.add([[1 , -1],[1 , 1]])).toEqual("Invalid!");
      expect(floor.add([[1 , 2],[-1 , 1]])).toEqual("Invalid!");
      expect(floor.add([[1 , 2],[1 , -1]])).toEqual("Invalid!");

    })
  })

  describe("calculate", () => {

    it("should return null if no data has been added", () => {

      expect(floor.calculate()).toBeNull;

    })

    it("should return the product of values with only ft values", () => {

      floor.add([[1, 0] , [3, 0]]);
      floor.add([[1, 0] , [4, 0]]);
      floor.add([[1, 0] , [5, 0]]);
      expect(floor.calculate()).toEqual([12, 0]);

    })

    it("should return the product of values with only inch values", () => {

      floor.add([[0, 6] , [0, 0]]);
      floor.add([[0, 11] , [0, 7]]);
      floor.add([[0, 6] , [0, 8]]);

      expect(floor.calculate()).toEqual([0, 125]);

    })

    it("should return the product of values with ft and inch values", () => {

      floor.add([[0, 6] , [1, 0]]);
      floor.add([[1, 11] , [2, 7]]);
      floor.add([[0, 6] , [1, 8]]);

      expect(floor.calculate()).toEqual([6, 41]);

    })

  })
})