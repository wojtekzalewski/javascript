//Object.getOwnPropertyDescriptors()
let object = {
    number:1
};
let descriptors = Object.getOwnPropertyDescriptors(object);
console.log(descriptors.number.value);
//String.padStart()
let string = "10";
console.log(string.padStart(3, 'a'));
let number = "0123456789";
let last3Digits = number.slice(-2);
console.log(last3Digits);
last3Digits.padStart(number.length, '*');
console.log(last3Digits.padStart(number.length, '*'));
//String.padEnd()
let stringOne = "Zupa pieczarkowa";
console.log(stringOne.padEnd(17, '.'));
let stringTwo = "1234";
console.log(stringTwo.padEnd(5,"."));
let stringThree = "654";
console.log(stringThree.padStart(4,"."));
let stringFour = "One";
console.log(stringFour.padStart(4,"."));
let stringFive = "Two";
console.log(stringFive.padEnd(4,"."));
//Object.values();
let myObject = {
    one: "red",
    two: "green",
    three: "blue"
};
console.log(myObject);
console.log(Object.values(myObject));
//Object.defineProperties();
let myNewObject = {
    einer: "black",
    zwei: "white",
    drei: 21
};
console.log(Object.entries(myNewObject));
//Async
function resolveAfter3Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("resolved");
        }, 3000);
    });
}
async function asyncCall() {
    console.log("calling");
    let result = await resolveAfter3Seconds();
    console.log(result);
}
asyncCall();
//Array.includes()
let myArray = [1,2,3,4];
console.log(myArray.includes(2));
