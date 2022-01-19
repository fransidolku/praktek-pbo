/* INPUT "nama"  dengan string
INPUT "skor"  dengan number 

READ "nama", "skor"
ELSE IF skor >= 80 AND skor <= 100
DISPLAY "skor A" 
ELSE IF skor >= 65 AND skor <= 79
DISPLAY "skor B"
ELSE IF skor >= 50 AND skor <= 64
DISPLAY "skor C"
ELSE IF skor >= 35 AND skor <= 49
DISPLAY "skor D"
ELSE IF skor >= 0 AND skor <= 34
DISPLAY "skor E"*/


let name = "Noel";
let skor = 86;

if (skor >= 80 && skor <= 100){
    console.log(`${nama} mendapatkan nilai A`);
} else if(skor >= 65 && skor <= 79){
    console.log(`${nama} mendapatkan nilai B`);
} else if(skor >= 50 && skor <= 64){
    console.log(`${nama} mendapatkan nilai C`);
} else if(skor >= 35 && skor <= 49){
    console.log(`${nama} mendapatkan nilai D`);
} else if(skor >= 0 && skor <= 39){
    console.log(`${nama} mendapatkan nilai D`);
} else {
    console.log("nilai interval")
}