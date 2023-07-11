// var x = 5;
// function arera(){
//     return x*x;
// }
// console.log(arera(x));

//  by using object

// let square ={
//     side : 2,
    // get area(){
    //     return this.side * this.side;
    // }
//     get circutance(){
//         return 2*(this.side + this.side)
//     }
// }
// //console.log(square.area);
// console.log(square.circutance)

//  function stringconcat(){
//     let returnvalue = ' ' ;
     
//  }

// arr = [1,2,3,4,5,6,7,8,9];

// let first = arr[0];
// let second = arr[1];
// let third = arr[2];

// let other = arr.slice(3,8);


// console.log(other);

// arr = [1,2,3,4,5,6,7,8,9];

// let[first,second,third,...other] = [1,2,3,4,5,6,7,8,9];
// console.log(other);

// function matches(n){
//     if(n<=1){
//     return (n* 6) ;
//     }
//     else{
//         return (n*6) - (n-1);
//     }
// }
// console.log(matches(87));

// Closure

// function outer(a){
//     let b = 10;
//      function inner(){
//     console.log( a+b);
       
//      }
//      return inner();
//     console.log( a+b);
// }
// return outer(5);


// closure

const outer = ()=>{
     let a = 5;
    const inner = () =>{
        let b= 10;
        console.log(a+b);
    }
 }

