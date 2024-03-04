// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

function likes(names) {

    /// Conditions
    // Array has no elements           -> no one likes this
    // Array has one element           -> Peter likes this
    // Array has two elements          -> Peter and Jim like this
    // Array has three elements        -> Peter, Jim, and Corey like this
    // Array has four or greater       -> Peter, Jim and {length-2} like this

    //const message = `${names[0]}, and ${names[1]} likes this.`;
    let message;
    console.log(names.length);
    if(names.length === 0){
        message = `No one likes this`;
    } else if(names.length === 1){
        message = `${names[0]} likes this`;
    } else if(names.length === 2){
        message = `${names[0]} and ${names[1]} like this`;
    } else if(names.length === 3){
        message = `${names[0]}, ${names[1]}, and ${names[2]} like this`;
    } else if(names.length === 4){
        message = `${names[0]}, ${names[1]} and ${names.length-2} like this`;
    }
    return message;
}


const localnames = ["bob","jim"];
const nonames = [];
console.log(likes(nonames));
