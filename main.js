let userName = prompt("string typidagi malumot kiriting");
console.log(typeof userName);

let userAge = +prompt("number typidagi malumot kiriting");
console.log(typeof userAge);

let userCheck = prompt("boolean typidagi malumot kiriting");
console.log(typeof userCheck);

let massage = alert(`
    siz kiritgan ${userName}  so'zi ${typeof userName}  typiga tegishli
    siz kiritgan ${userAge}   so'zi ${typeof userAge}   typiga tegishli
    siz kiritgan ${userCheck} so'zi ${typeof userCheck} typiga tegishli
`)
