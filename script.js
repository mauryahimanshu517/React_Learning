
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

// let number="153"
// console.log(number.split("")[0])

// let result=0
// let arr=[]
// for(let i=0;i<number.length;i++){
//     let mul=1
//     let x=number.split("")[i]   
//     for(let j=0;j<3;j++){
//         mul*=x
//     }
//     arr.push(mul)
// }

// for(let y=0;y<3;y++){
//     result+=arr[y]
// }
// console.log(result)

// let sum=0
// for(let x=0;x<arr.length;x++){
//     sum=sum+arr[x]
// }
// console.log(sum)

// ===================

// Take a number form 1--N and which number is disible by 3 replace it with Fizz and if it is disible by 5 replace with BUz if disible by both FizzBuzz

// let number = 30
// let arr = []


// for (let i = 1; i <=number; i++) {
//     if (i%3 ==0 && i%5==0) {
//         arr.push("Fizz Buzz")
//     }
//     else if(i % 5 == 0){
//         arr.push("Buzz")
//     }
//     else if(i%3 === 0){
//         arr.push("Fizz")
//     }
//     else{
//         arr.push(i)
//     }
// }

// console.log(arr)

// ============================ praymiad

// let x=5

// for(let i=1;i<=x;i++){
//     let space=""
//     for(let j=1;j<=x-i;j++){
//         space=space+" "
//     }
//     for(let y=1;y<=i;y++){
//         space=space+y
//     }
//     for(let a=1;a<i;a++){
//         space=space+a
//     }
//     console.log(space)
// }

// let str = "hello world";
// let result = {};

////count the character

// for (let char of str) {
//     let regex = new RegExp(char, "g"); 
//     console.log(regex)
//     let count = (char.match(regex) || " ").length;
//     result[char] = count;

// }

// console.log(result);

//cpmaring the letter is alphabaticallly order

// let str = "hello world";
// let result =[];

// for (let char of str) {
//     console.log(char)
//     if (char !== " ") { // skip spaces if you want
//         result[char] = (result[char] || 0) + 1;
//         console.log(result[char] )
//     }
// }

// console.log(result);

///////////cpmaring the letter is alphabaticallly order
// let str="abdct"

// let sort=str.split("").sort().join("")
// console.log(sort)

// if(str===sort){
//     console.log("true")
// }
// else{
//     console.log("false")
// }

//cpmaring the letter is alphabaticallly order
// let str="abc"
// let storeValue=""

// let sorting=str.split("").sort().join("")

// for(let x of str){
//     storeValue+=x
//     if(storeValue===sorting){
//         console.log("true")
//     }
// }

// ----

// sorting the value 
///anagram

// let str = "hello cat"
// let rverseStr = "olleh cta"

// let spreadSte = [...str]
// let revspreadSte = [...rverseStr]

// console.log(spreadSte, revspreadSte)


// if (str.length === rverseStr.length) {
//     let isAnagram = false;
//     for (let x = 0; x < str.length; x++) {

//         if (spreadSte.includes(revspreadSte[x])) {
//             isAnagram = true
//              console.log("from if",isAnagram)

//         }
//         else{
//             isAnagram=false
//             console.log("from else",isAnagram)
//             break
//         }


//     }
//     if (isAnagram) {
//         console.log("true")
//     }
//     else {
//         console.log("false")
//     }

// } else {
//     console.log('not a anagram')
// }

///pattern printing transpose

// const x=[[1,2,3],
// [4,5,6],
// [7,8,9]]

// const y=[];

// for(let i=0;i<3;i++){
//     for(j=0;j<3;j++){
//        y[j][i]=x[i][j]
//     }
// }

// console.log(y)












