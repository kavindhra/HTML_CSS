let student =["Anu","Ravi","Mona"];

for(let i=0;i<student.length;i++){
    console.log(i);
}
// insertion and deletion in array
let a = [1, 2];
a.push(3);
console.log(a);     

let b = [1, 2];
b.pop();
console.log(b);    

let c = [1, 2];
c.shift();          
console.log(c);     

let d = [1, 2];
d.unshift(3);       
console.log(d);     

let user={
    name:"John",
    age:25,
};
// object
console.log(Object.keys(user));
console.log(Object.values(user));

user.city="New York";
console.log(user);

user.age=26;
console.log(user);

delete user.name;
console.log(user);
//functions
//Function declaration
function greet(){
    console.log("Hello");    
}
greet();
//Function expression
let greet2=function(){
    console.log("Hi there");
};
greet2();
//Arrow function
let greet3=()=>{
    console.log("Hey everyone");
}
greet3();

//Methods
//for each
//take each values one by one and print
//not return new array


let marks=[45,67,89,23];

marks.forEach(mark=>{
    console.log("Mark",mark);
});


//Map
//map take each value one by one,do some operation
//and return new array
let marks1=[45,67,89,23];
marks1.map(mark=>mark+5);
console.log(marks1);  


//Filter
//All matching values
let marks2=[45,67,89,23,56,78];
let pssed=marks2.filter(mark => mark > 50);
console.log(pssed);

