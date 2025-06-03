function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  //   jika ada penumpang naik
  this.penumpangNaik = function (namaPenumpang) {
    // push namaPenumpang ke array penumpang
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };

//   jika ada penumpang turun
// fungsi ini menerima namaPenumpang dan bayar
  this.penumpangTurun = function (namaPenumpang, bayar) {
    // jika penumpang tidak ada di dalam angkot
    if (this.penumpang.length === 0) {
        // tampilkan alert
      alert("Angkot masih kosong!");
      return false;
    }
    // jika penumpang ada di dalam angkot
    for (var i = 0; i < this.penumpang.length; i++) {
        // jika namaPenumpang ditemukan di dalam array penumpang
      if (this.penumpang[i] === namaPenumpang) {
        this.penumpang[i] = undefined; // menghapus penumpang yang turun
        this.kas += bayar; // menambah kas
        return this.penumpang; // mengembalikan array penumpang
      }
    }
  };
}

var angkot1 = new Angkot("Adit", ["Sawahan", "Tunjungan"], [], 0);
var angkot2 = new Angkot("Budi", ["Kebon Rojo", "Tunjungan"], [], 0);
