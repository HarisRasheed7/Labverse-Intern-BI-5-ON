//  hoisting hosting let var const console.log loop for while
//  if else else if arrays primitive refrences function arguements parameters


console.log("Harrry Dark");

var a = 12;
console.log(a);


var dulha = "lab";
var dulhan = "laby";

dulha + "weds" + dulhan


var a = [1, 2, 3, 4];
var b = a;




for (var i; i < 101; i++) {
    console.log(i);
}

var h = 10;
while (h < 100) {
    h++;
    console.log(h);
}



function hello() {
    console.log("hello sir G");
}

hello();


function games() {
    console.log("subway surfers");
    console.log("8 ball pool");
    console.log("Clash of Clans");
    console.log("PUBG")
    console.log("Free Fire");
}

games();



function values(a, b, c) {
    console.log(a, b, c);
}

values(7, 77, 777);




// Secound lecture
// es5 old es6 new two types of js var is in es5 and let const is in es6
// var function is scoped and can be use in function parent 
// let is braces scoped and will use in braces where we wrote let 

function abc() {
    for (let i = 1; i < 12; i++) {
        console.log(i);
    }
    console.log(i);
}

abc();