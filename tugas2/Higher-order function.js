function nama(getNamaAkhir) {
    //functin nama adalah higher-order function;
    let namaAwal = "yusuf";
    return namaAwal + " " + getNamaAkhir;
  }
   
  function namaAkhir() {
    //funtion yang di panggil (*callback)
    return "Ahmad";
}
console.log(nama(namaAkhir())); 