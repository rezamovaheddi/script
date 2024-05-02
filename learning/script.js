const bil = 40;
let tip = bil <= 300 && bil >= 50 ? bil * 0.15 : bil * 0.2;
console.log(`the bill is ${bil} and ${tip} and jameshon ${tip + bil}`);