let inputBaseNumber=2
let inputPowerNumber=3


function exponent(inputBaseNumber,inputPowerNumber){
    let result=1
    for(let i=1;i<=inputPowerNumber;i++){
        result=result*inputBaseNumber
    }
    console.log(result)
}

exponent(inputBaseNumber,inputPowerNumber)
