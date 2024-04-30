function checkAge(age) {
    if (age > 18) {
        return true
    } else {
        return confirm("do you parrent")
    }
}
let age = prompt("How are old you");
if (checkAge(age)) {
    console.log("acsess");
} else {
    console.log("Error");
}

function ShowMiv(age) {

    return;

    // console.log("RRRR");
}
console.log(ShowMiv() === undefined);