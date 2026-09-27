const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

const str = "Kranthi";
const letter = [...str];
console.log(letter);

//Rest

const [a,b,...others] = [1,2,3,4,5];
console.log(a,b,others)