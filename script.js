// function a(){
//     console.log('Hello Fun A')
// }  /// callback

// function b(hof){
//     console.log('Hello Fun B')
//     hof()
// }  // High Order Function
// b(a)



const radius = [3, 5, 2, 8, 7]

const calculateArea = function(radius){
    let result = []
    for(var i = 0; i < radius.length; i++){
       
        result.push(Math.PI * radius[i] * radius[i])
    }
    return result

}

console.log(calculateArea(radius))


// Find the Circumference Of Circle

const  calculateCircumFerence = function(radius){
    let result = []
    for(var i = 0; i < radius.length; i++){
        result.push(2 * Math.PI * radius[i])
    }
    return result;

}
console.log(calculateCircumFerence(radius))

// Find the Diameter
const  calculateDiameter = function(radius){
    let result = []
    for(var i = 0; i < radius.length; i++){
        result.push(2 * radius[i])
    }
    return result;

}
console.log(calculateDiameter(radius))



































// function a(){
//     console.log('Hello')
// }
// function b(a){
//     a()
// }
// b(a)


// const radius = [4, 7, 5, 3]

// console.log(`         <---------Area Of Circle------------>


// `)
// const calculateArea = (radius) => {
//     const result = []
//     for(let i = 0; i < radius.length; i++){
//         result.push(Math.PI * radius[i] * radius[i])
//     }
//     return result;
// }


// console.log(calculateArea(radius))


// console.log(`         <---------Diameter Of Circle------------>


// `)

// const calculateDiameter = (radius) => {
//     const result = []
//     for(let i = 0; i < radius.length; i++){
//         result.push(2 * radius[i])
//     }
//     return result;
// }
// console.log(calculateDiameter(radius))

// console.log(`         <---------Circumference Of Circle------------>


// `)

// const calculateCircumFerence = (radius) => {
//     const result = []
//     for(let i = 0; i < radius.length; i++){
//         result.push(2 * Math.PI * radius[i])
//     }
//     return result;
// }
// console.log(calculateCircumFerence(radius))