function checkSpeed(speed){
    const speeddistance= 80;
    const points =3;
    const time =12;
    if (speed< speeddistance){
        return "Okay";

    }else {
        const excessspeed = speed-speeddistance;
        const points = Math.floor(speed/points);
        if (points > time) {
return "LICENCE CANCELLED"

        }else {
            return "points" + points;
        }
    }
}
 
const speed = parseInt(100); // ENTER CARSPEED
checkSpeed(speed)
console.log (checkSpeed(speed)) 