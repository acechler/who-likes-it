// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

function likes(names) {

    /// Conditions
    // Array has no elements           -> no one likes this
    // Array has one element           -> Peter likes this
    // Array has two elements          -> Peter and Jim like this
    // Array has three elements        -> Peter, Jim, and Corey like this.
    // Array has four or greater       -> Peter, Jim and {size-2} like this.
    const message = `${names[0]}, and ${names[1]} likes this.`;
    return message;
}


const localnames = ["bob","jim"];
console.log(likes(localnames));