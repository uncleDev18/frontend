// console.log("Hello World"); //first program

// let num = 20; //numbers
// let str = "Hello"; // string
// let bool = true; //boolean


// var firstName = "Brian"; // the old way to do
// let lastName = "Arce"; //it can be change the value later 
// const birthDay = "April 02, 2003"; //cannot reassign the value

// let introduceWithBasic = "Hello my name is " + firstName + "" + lastName + " born in " + birthDay + ", Nice to meet you!";// basic concatonation
// let introduceWithTemplate = `Hello my name is ${firstName} ${lastName} born in ${birthDay}, Nice to meet you!`; //Template String

// console.log(introduceWithBasic);
// console.log(introduceWithTemplate);

// //CONDITION

// let skyIsBlue = true;

// if(skyIsBlue)
// {
//     console.log("The sky is Blue!");
// }
// else
// {
//     console.log("The sky is NOT Blue!");
// }

// //LOOPING

// let friendsAtYourParty = 0;

// while(friendsAtYourParty < 10)
// {
//     friendsAtYourParty += 1;
// }

// for(let i = 0; i < 10; i++)
// {
//     friendsAtYourParty++;
// }

// console.log(friendsAtYourParty);

// exercise

// let timesToRepeat = 10;
// const character = '8';
// let answer = "";

// while(timesToRepeat > 0)
// {
//     answer += character;
//     timesToRepeat--;
// }

// console.log(answer);

// FUNCTION

// function addTwo(number)
// {
//     return number + 2;
// }

// let answer = addTwo(8);
// console.log(answer);

// function bark()
// {
//     console.log("woof");
// }

// const meow = function()
// {
//     console.log("meeeeeeow");
// }

// const chirp = () => 
// {
//     console.log("chirp chirp");
// }

// bark();
// meow();
// chirp();

// //SCOPE
// const A = "A";
// let F;

// function doStuff(B) {
//   console.log(B); // works, B parameter is still in scope
//   const C = "C";
//   let H = "H";
//   if (1 + 1 === 2) {
//     const D = "D";
//     H = "something else";
//   }
//   console.log(D); // does not work, D was declared in that if statement block
//   console.log(H); // works, H was declared outside the if statement
//   F = "F";
// }

// let E = 0;
// while (E < 3) {
//   E++;
//   console.log(A); // works, the outter block (called the global scope) is still in scope
//   const G = "G";
// }
// console.log(E); // works, E was declared outside the whie loop
// console.log(G); // does not work, declared inside the while loop and it's over

// doStuff("B");
// console.log(B); // does not work, the B parameter expires after the function call
// console.log(C); // does not work, C was declared inside the function and the function is over
// console.log(F); // works, F was declared in the global scope 

// BUILTINS

// const sentence = "ThIs HaS wEiRd CaSiNg On It.";
// console.log(sentence.toLowerCase());
// console.log(sentence.toUpperCase());

// const number = 5.5
// console.log(Math.round(number));
// console.log(Math.floor(number));
// console.log(Math.ceil(number));

// const testStringOne = "The quick brown fox jumps over the lazy dog";
// const testStringTwo = "Mirror, mirror on the wall, don't say it cause I know I'm cute";
// const testStringThree = "Execute";

// console.log(testStringOne.includes("cute"));
// console.log(testStringTwo.includes("cute"));
// console.log(testStringThree.includes("cute"));

// OBJECT

// const person = {
//     name:"Brian",
//     age: 19,
//     gender: "male",
//     course: "BSIT"
// }

// console.log(person);
// console.log(person.name);

// const me = {
//     name: {
//         first: "Brian",
//         last: "Arce"
//     },
//     location: {
//         city: "Calapan",
//         state: "Oriental Mindoro",
//         country: "Philippines"
//     }
// }

// console.log(me.name.first);
// console.log(me.location.state);

// CONTEXT

// const me = {
//     name: {
//         first: "Brian",
//         last: "Arce"
//     },
//     location: {
//         city: "Calapan",
//         state: "Oriental Mindoro",
//         country: "Philippines"
//     },
//     getAddress()
//     {
//         return `
//         ${this.name.first} ${this.name.last}
//         ${this.location.city} ${this.location.state} ${this.location.country}`
//     }
// };

// console.log(me.getAddress());

// ARRAY

// const daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// console.log(daysOfTheWeek);
// console.log(daysOfTheWeek[0]);
// console.log(daysOfTheWeek[6]);

// const primeNumber = [1, 2, 3, 5, 7, 11, 13, 17];
// console.log(primeNumber.pop());
// console.log(primeNumber.push(19));
// console.log(primeNumber.length);
// console.log(primeNumber.join(" "));