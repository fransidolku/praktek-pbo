/* INPUT "Jari" dengan number
INPUT "PI" dengan 3.14
COMPUTE "keliling lingkaran" sama dengan 2 x pi x jari
DISPLAY HASIL KELILING LINGKARAN
END */

let jariLingkaran = 7;
const pi = 3.14;

function kelilingLingkaran(r, b) {
    return 2 * b * r;
    
}

let hasil = kelilingLingkaran(jariLingkaran, pi);
console.log(`hasil adalah ${hasil}`);