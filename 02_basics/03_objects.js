/*
objects ko declare karne ke liye do tareke hote hai, 1. Literal ke tara 2. Constructor ke tera.

singleton - koi bhi constructor se banate hai toh singleton object banta hai.

agar hum literal ke tara declare karthe hai toh singleton nahi banta hai.
*/

// Object.create    - issi ko bola jata hai constructor through

// object literals

const mySym = Symbol("key1")   // declaring symbol

const JsUser = {
        name: "Subhash",
        "full name": "Subhash Sahani",
        [mySym]: "myKey1",  // symbol is defined in objects using square brackets.
        age: 28,
        location: "Bengaluru",
        email: "Subhash1997xsx@gmail.com",
        isLoggedIn: false,
        lastLogingDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])  // symbol is accessed using square brackets.

JsUser.email = "subhash@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "subhash@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS user");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());