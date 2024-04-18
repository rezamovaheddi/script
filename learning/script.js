const hasD = false; // true
const hasGood = true; // false

// if (hasD && hasGood) {
//     console.log("sarah can drive ");
// } else {
//     console.log("sarah cant drive");
// }

// if (hasD || hasGood) {
//     console.log("sarah can drive car")
// } else {
//     console.log("sarah cant drive cars");
// }
if (!hasD || !hasGood) {
    console.log("sarah has lisenses drive car");
} else {
    console.log("cant drive car");
}