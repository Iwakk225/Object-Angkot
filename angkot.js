function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

//   jika ada penumpang naik
  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };



}

var angkot1 = new Angkot("Adit", ["Sawahan", "Tunjungan"], [], 0);
var angkot2 = new Angkot("Budi", ["Kebon Rojo", "Tunjungan"], [], 0);
