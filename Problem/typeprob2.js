//Speed Detector 
function speed(){
    const speed = prompt("Enter speed");

    const speedLimit = 70;  //any speed above this demerit points
    let demeritPoints = 0;  //default points
}
console.log(speed)

if (speed <= speedLimit){  //only if speed limit is not exceed
    console.log(`Ok`)
document.write(`Ok`)
} else {
    demeritPoints = Math.floor((speed-speedLimit) / 7); //if speed limit is exceeded 
}

if (demeritPoints > 15) {
    console.log("LICENSE CANCELLED")
    document.write("LICENSE CANCELLED")
}else {
    Math.floor(demeritPoints);    //math.floor rounds decimal numbers down 
    console.log(`Points:${demeritPoints}`)
    document.write(`Points:${demeritPoints}`) //prints demerit points
}
