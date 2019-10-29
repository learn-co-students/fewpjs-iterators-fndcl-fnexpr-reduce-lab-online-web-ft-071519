const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Non reduce method:
// function addBatteries(batteryBatches) {
//     const totalBatteries = 0

//     batteryBatches.forEach( batteryBatch => {
//         totalBatteries += batteryBatch
//     })
//     return totalBatteries
// }

function addBatteries(total, eachAdditional) {
    total = total + eachAdditional;
    return total
}

const totalBatteries = batteryBatches.reduce(addBatteries, 0)

// When calling reduce on batteryBatches, the argument addBatteries is called. 
// "total" becomes the accumulator.
// "eachAdditional" becomes the current value.