// var cnt=0;
// document.getElementById("click me")
// .addEventListener("click",function x(){
// console.log("button clicked",++cnt);
// })

// // console.log(1);
const unser=[
    {fs:"prakash",ls:"singh",age:21},
    { fs: "viaksh", ls: "singh", age: 23 },
    { fs: "manih", ls: "singh", age: 23 },
    { fs: "manish", ls: "singh", age: 45 }
];


const output=unser.reduce(function(acc,curr){
   if(curr.age==23){
    acc.push(curr.fs);
   }
   return acc;
},[]);
console.log(output);
// const output = unser.filter((x) => x.age<23).map((x)=> x.fs);
// console.log(output);
