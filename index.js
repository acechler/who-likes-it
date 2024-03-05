// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

function likes(names) {
    let message;
    if(names.length === 0){
        message = `no one likes this`;
    } else if(names.length === 1){
        message = `${names[0]} likes this`;
    } else if(names.length === 2){
        message = `${names[0]} and ${names[1]} like this`;
    } else if(names.length === 3){
        message = `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else if(names.length >= 4){
        let remainder = names.length - 2;
        message = `${names[0]}, ${names[1]} and ${remainder} others like this`;
    } else {

    }
    return message;
}

const nonames = [];
const n1 = ['bob'];
const n2 = ["bob","jim"];
const n3 = ["bob", "Kyle", "Rlyee"];
const n4 = ["bob", "kyle", "Randy", "Kenny"];
const n5 = ["Jake", "Bobby","Radagast","Gandalf","Frodo","Samwise"];


console.log(likes(n4));

console.log(likes(nonames));





