// ==========Exercise #1 =========== //
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function favorite_foods(){
    for (let i = 0; i < Object.keys(person3).length; i++) {
        if (Array.isArray(Object.keys(person3))) {
            console.log(Object.values(person3)[i])
        }
    }
}

// =======Exercise #2========= //
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

function Person{
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    printInfo = () => {
        return `Name: ${this.name} \n Age: ${this.age}`
    }
    newAge = (num) => { 
        this.age ++ num
        return (this.age)
        }
    }


let person1 = new Person('Naomi', 25)
let person2 = new Person('Benjamin', 23)

console.log(person1.printInfo())
console.log(person2.printInfo())

person1.addAge(3)

console.log(person1.printInfo())

// =============Exercise #3 ============ //
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

// 1st attempt
let isGreaterThan = new Promise((resolve, reject) => {
  
  let str.length = 4
    
  if (str.length > 10) {
    resolve('big word')
  } else {
    reject('small word')
  }
})

isGreaterThan.then(message) => {
    console.log('This is a... ' + message)
    })
.catch( (message) => {
    console.log('This is a... ' + message)
})

// 2nd attempt

function isGreaterThanPromise() {
    return new Promise( (resolve, reject) => {
        if ((str.length) > 10) {
          resolve(
              message: 'big word',
        } else {
          reject(
              message: 'small word'
        }
    })
}

isGreaterThanPromise().then( (message) => {
    console.log('This is a... ' + message)
}).catch( (error.message) => {
    console.log('This is a...' + message)
})
    
// =========================================================================================== //
    
// CODEWARS PROBLEM #1
// Reverse Words: Complete the solution so that it reverses all of the words within the string passed in.
    
/* Python version:
def reverseWords(str):
    return " ".join(str.split()[::-1])
*/
function reverseWords(str){
  return str.split(' ').reverse().join(' ');
}
    
// =========================================================================================== //

// CODEWARS PROBLEM #2
// Are arrow functions odd?
/*
Time to test your basic knowledge in functions! Return the odds from a list:
[1, 2, 3, 4, 5]  -->  [1, 3, 5]
[2, 4, 6]        -->  []
*/
function odds(values){
  return values.filter(function(num){ if( num % 2 ) return num;});
}
