
// let inputBaseNumber=2
// let inputPowerNumber=3


// function exponent(inputBaseNumber,inputPowerNumber){
//     let result=1
//     for(let i=1;i<=inputPowerNumber;i++){
//         result=result*inputBaseNumber
//     }
//     console.log(result)
// }

// exponent(inputBaseNumber,inputPowerNumber)

// =======================
//Voewl and consonent

// let str="hello world"

// let x=[...str]
// let count=0
// let constant=0
// for(let i=0;i<str.length;i++){
//     if("aeiou".includes(x[i])){
//         count=count+1
//     }
//     else{
//         constant=constant+1
//     }
    
// }
// console.log(count)
// console.log(constant)

// ======================

// let str = "heloo I'm from India";


// console.log(str.split(" ").slice(0,2).join(" "))
// ==================prime
//  let a=4

//  for(let i=2;i<a;i++){
//     if(a%1==0 && a%i==0 ){
//         console.log(a)
//     }
//     else{
//         // console.log(i)
//     }
//  }

// =================count and return number of sentence

// let str="Hello my name is %%$ xyz "
// // console.log(str.split(" "))//split will do this  [ 'hello', 'my', 'name', 'is', 'xyz' ] it will store i arrary
// //  and if we want to found first sentence do this str.split(" ")[0].
// let split=str.split(" ")
// let newSplit=[]


// for(let i=0;i<split.length;i++){
//     if(split[i]==""  || (/[^a-zA-Z]/.test(split[i]))){
//         console.log(split[i].includes("!@#$%^&*()"))
//     }
//     else{
//         newSplit.push(split[i])
      
//     }
// }
// console.log(newSplit)

// console.log(newSplit.length)

// ===================== swapping a number

// let a=10
// let b=20

// let temp=""

// temp=a
// a=b
// b=temp

// console.log(a,b)

// let a=10
// let b=20

// a=a+b
// b=a-b
// a=a-b

// console.log(a,b)

// ============================== armstrong number

// 153=1^3+5^3+3^3=1+125+27=153

let number="153"
console.log(number.split("")[0])

let result=0
let arr=[]
for(let i=0;i<number.length;i++){
    let mul=1
    let x=number.split("")[i]   
    for(let j=0;j<3;j++){
        mul*=x
    }
    arr.push(mul)
}

for(let y=0;y<3;y++){
    result+=arr[y]
}
console.log(result)

// let sum=0
// for(let x=0;x<arr.length;x++){
//     sum=sum+arr[x]
// }
// console.log(sum)












