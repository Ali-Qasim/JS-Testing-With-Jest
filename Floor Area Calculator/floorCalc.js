class floorCalc {

  constructor() {

    this.items = {};

  }

  get peek() {

    return this.items[Object.keys(this.items).length - 1];

  }

  add(values) {

    if((values[0][1] > 11) || (values[1][1] > 11)){

        return "Invalid!";

    }

    for (let i = 0; i < 2; i++) {
      if((typeof(values[i][0]) != "number") || (typeof(values[i][1]) != "number")){
        return "Invalid!";
      }
      if((values[i][0] < 0) || (values[i][1] < 0)){
        return "Invalid!";
      }
    }

    const index = Object.keys(this.items).length; // indexing rooms from 1

    this.items[index] = values;

    return "Added";
  }

  // run all calculations. takes no args, but requires 
  calculate() {

    let room;
    let totalArea = 0;
    let roomArea = 0;

    for(let i = 0; i <= Object.keys(this.items).length - 1; i++){
      room = this.items[i];

      roomArea = ((room[0][0] * 12) + room[0][1]) * ((room[1][0] * 12) + room[1][1]);

      totalArea += roomArea;
      console.log(`Room ${i+1}: ${room[0][0]}'${room[0][1]}" x ${room[1][0]}'${room[1][1]}" = ${Math.floor(roomArea/144)}' ${roomArea%144}"`);
    }

    //divisor needs to be squared as we are dealing with area
    return [Math.floor(totalArea/144), totalArea%144];

  }
}


// running my calculations
const floor = new floorCalc();

console.log("\n\nSection A\n")

floor.items = {
  '0':[[12, 1],[10, 5]],
  '1':[[18, 1],[11, 4]],
  '2':[[20, 0],[17, 10]],
  '3':[[14, 4],[9, 10]],
  '4':[[19, 5],[11, 8]]
}

let area = floor.calculate();

console.log(`\nTotal Area = ${area[0]}' ${area[1]}" (square feet and inches)\n`);

console.log("\nSection B\n")

floor.items = {
  '0':[[12, 0],[12, 6]],
  '1':[[15, 5],[10, 4]],
  '2':[[10, 10],[20, 11]],
  '3':[[11, 5],[11, 6]],
  '4':[[11, 11],[9, 5]],
  '5':[[15, 1],[11, 4]],
  '6':[[11, 11],[10, 6]]
}

area = floor.calculate();

console.log(`\nTotal Area = ${area[0]}' ${area[1]}" (square feet and inches)\n`);


module.exports = {

  floorCalc

}