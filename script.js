// var a = 10;
// console.log("The value of a is: "+a);
// var a = 20;
// console.log("The value of b is: "+a);
// a=30;
// console.log("The updated value of a is: "+a);
// let b = 15;
// console.log("The updated value of b is: "+b);
// b=25;
// console.log("The updated value of b is: "+b)
function add(){
    let a=10;
    let b=20;
    let sum=a+b;
    console.log("The sum is : "+sum);
}
add();

function adding(){
    let c=10;
    let d=60;
    let sum=c+d;
    console.log("The sum is : "+sum);
}
adding(3,4);
adding(9,8);


//Arrow function
const greeting=()=>{
console.log("Hello");
};
greeting();

const addition=(e,f)=>{
    return e+f;
};
let result =addition(5,7);
console.log("The addition result is:"+result);