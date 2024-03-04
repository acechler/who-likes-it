// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

function likes(names) {
    const message = `${names[0]}, and ${names[1]} likes this.`;
    return message;
}


const localnames = ["bob","jim"];
console.log(likes(localnames));