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

//Voewl and consonent

let str="hello world"

let x=[...str]
let count=0
let constant=0
for(let i=0;i<str.length;i++){
    if("aeiou".includes(x[i])){
        count=count+1
    }
    else{
        constant=constant+1
    }
    
}
console.log(count)
console.log(constant)




