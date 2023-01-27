const radius = [3, 5, 2, 8, 7]

// const calculate = function(radius, logic){
//     let result = []
//     for(var i = 0; i < radius.length; i++){
       
//         result.push(logic(radius[i]))
//     }
//     return result

// }

// Area Logic
const area = function(radius){
    return Math.PI * radius * radius
}
const Circumference = function(radius){
    return 2 * Math.PI * radius
}
const diameter = function(radius){
    return 2 * radius
}
// console.log(calculate(radius, area))
// console.log(calculate(radius, Circumference))
// console.log(calculate(radius, diameter))

Array.prototype.calculate = function(logic){
    let result = []
    for(var i = 0; i < this.length; i++){
       
        result.push(logic(this[i]))
    }
    return result

}

console.log(radius.map(area))
const radius2 = [2, 8, 1, 9]
console.log(radius2.calculate(area))


console.log(radius.calculate(area))









// const radius = [4, 7, 5, 3]


// /*         <---------HOF------------>     */

// const calculate = (radius, logic) => {
//     const result = []
//     for(let i = 0; i < radius.length; i++){
//         result.push(logic(radius[i]))
//     }
//     return result;
// }





// /*         <---------Area Of Circle------------>     */
// console.log(`

//                     <---------Area Of Circle------------>


// `)

// const area = (radius) => {
//     return Math.PI * radius * radius;
// }

// console.log(calculate(radius, area))



// /*         <---------Diameter Of Circle------------>     */
// console.log(`

//                     <---------Diameter Of Circle------------>


// `)
// const diameter = (radius) => {
//     return 2 * radius;
// }

// console.log(calculate(radius, diameter))

// /*         <---------Circumference Of Circle------------>     */
// console.log(`
    
//                     <---------Circumference Of Circle------------>


// `)

// const Circumference = (radius) => {
//     return 2 * Math.PI * radius;
// }

// console.log(calculate(radius, Circumference))



// /*         <---------Using Map Function------------>     */

// /*         <---------Area Of Circle------------>     */
// console.log(`

//                     <---------Area Of Circle Using Map Function------------>


// `)

// console.log(radius.map(area))



// /*         <---------Diameter Of Circle------------>     */
// console.log(`

//                     <---------Diameter Of Circle Using Map Function------------>


// `)
// console.log(radius.map(diameter))

// /*         <---------Circumference Of Circle------------>     */
// console.log(`
    
//                     <---------Circumference Of Circle Using Map Function------------>


// `)
// console.log(radius.map(Circumference))




// /*         <---------Using Array Prototype------------>     */
// Array.prototype.calculateUniversal = function(logic){
//     const result = []
//     for(let i = 0; i < this.length; i++){
//         result.push(logic(this[i]))
//     }
//     return result;
// }

// /*         <---------Area Of Circle------------>     */
// console.log(`

//                     <---------Area Of CircleUsing Array Prototype------------>


// `)
// console.log(radius.calculateUniversal(area))















