const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// batteries
// 1) should have a `totalBatteries` variable
// 2) should have a number as a result
// 3) should have made the sum of all the assembled batteries

let totalBatteries = batteryBatches.reduce(function(total, element) { return element + total }, 0);
