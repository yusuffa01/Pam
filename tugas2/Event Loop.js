// Event Loop
console.log("Sebelum");
 
function delayBySeconds(sec) {
    let start = now = Date.now()
    while(now-start < (sec*1000)) {
        now = Date.now();
    }
}
 
delayBySeconds(5);
 
// Dieksekusi setelah penundaan 5 detik
console.log("Setelah ");
