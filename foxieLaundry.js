/* INPUT "JUMLAH BAJU MASUK" DENGAN ANGKA 0 
INPUT "JUMLAH BAJU TERSEDIA" DENGAN ANGKA 20
REPEAT "JUMLAH BAJU MASUK" < JUMLAH BAJU TERSEDIA
DISPLAY BAJU MASUK KE [JUMLAH BAJU]
IF JUMLAH BAJU MASUK " = " JUMLAH BAJU TERSEDIA
DISPLAY MESIN OTOMATIS MENYALA*/


let jbm = "20";
let jbm = "0";


for (let i = 0; i<= jbt; i++){
    if(jbm < jbt){
        jbm += 1;
        console.log(jbm);
    }
    if(jbm === jbt){
        console.log("lampu menyala");
        break;
    }
}