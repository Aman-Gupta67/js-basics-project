// let timing = {
//     name:undefined
// };

// function isEmpty(obj){
// for (let key in obj)
// return false;
// return true;
// }

// console.log(isEmpty(timing));

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  //comment 1

function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof obj[key] == 'number'){
           obj[key] *= 2;
        }
    }
}
multiplyNumeric(menu);
console.log(menu);

let a = [1,2,4];
let newA = new Array(a);

newA.push(3);
console.log(newA);