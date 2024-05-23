const userNumbers = []; /// 4

let counterNumber = 0;
// [35, 84, 13]
let sum = 0;

while (counterNumber != -1) {
    counterNumber = Number(prompt("Enter your number \n get -1 if tou dont eny number"));
    if (counterNumber != -1) {
        userNumbers.push(counterNumber)
    }
}

for (let i = 0; i < userNumbers.length; i++) {
    sum += userNumbers[i] // sum => 35 + 84 + 13 >> 132
}
console.log(userNumbers);
console.log(sum);
console.log(`Avbet => ${sum / userNumbers.length}`);