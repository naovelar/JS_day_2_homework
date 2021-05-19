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

for( let i=0; i<Object.keys(person3).length; i++){
    if(Array.isArray(Object.values(person3)[i])){
        let vals = Object.values(person3)[i];
            for( let i=0; i<Object.values(vals).length; i++){
                console.log(Object.values(vals)[i])
            }
    }else{
        console.log(Object.values(person3)[i])
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

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    printInfo =() => {
        return `Name: ${this.name} \n Age: ${this.age}`
    }
    newAge() { 
        this.age++
        return (this.age)
        }
    }


let person1 = new Person('Naomi', 25)
let person2 = new Person('Benjamin', 23)
console.log(p1.printInfo())
console.log(p2.printInfo())
console.log(p1.newAge())
console.log(p1.printInfo())
console.log(p2.newAge())
console.log(p1.printInfo())
console.log(p2.printInfo())
console.log(p2.newAge())

// =============Exercise #3 ============ //
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

let  isGreaterThan = (str) => {
    new Promise( (resolve, reject) => {
        if (str.length > 10) {
            resolve('big word')
        } else {
            reject('small word')
        }
    })
}
isGreaterThan('onamonapia')
.then( (message) => {
    console.log('This is a... ' + message)
})
.catch( (message) =>{
    console.log('This is a...' + message)
})
isGreaterThan('onamonapia')

    
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
