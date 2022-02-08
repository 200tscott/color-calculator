const prompt = require('prompt-sync')();

let option = Number(prompt("Enter [1] for color construction enter [2] for color deconstructing: "));

if(option === 1){
    let color1 = (prompt("select your first color: "))
    let color2 = (prompt("select your second color: "))

if(color1 === "red" && color2 === "blue"){
    console.log("Purple")}else if(color1 === "blue" && color2 === "red"){
        console.log("Purple")}
else if(color1 === "red" && color2 === "yellow"){
    console.log("Orange")} else if(color1 === "yellow" && color2 === "red"){
        console.log("Orange")}
        else if(color1 === "yellow" && color2 === "blue"){
            console.log("Green")}else {
        console.log("error")}
}
else if(option === 2){
    let color = (prompt("select your color for deconstruction: "))
if (color === "purple") {
console.log("Red and Blue makes purple")} 
    else if (color === "orange") {
    console.log("Red and Yellow makes Orange")}
    else if (color === "Green") {
        console.log("Yellow and Blue makes Green")}
        else {
            console.log("error")}       
        }  
        
















// if (option === 1) {
//    console.log(prompt("What color would you like to construct?:"))}
// if ("purple"){
//        console.log("Red + Blue ")}
// if ("Orange"){
//         console.log("Red + Yellow ")}
// if ("Green"){
//     console.log("Blue + Yellow")}else{
//                 console.log("error")
//             }
            
// if (option === 2) {
//     console.log(prompt("What color would you like to deconstruct?:")) }
    // 
