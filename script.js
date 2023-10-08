// contoh penggunaan if, else
let nilai = 95;

if (nilai >= 90) {
  console.log("nilai anda A");
} else if (nilai >= 80) {
  console.log("nilai anda B");
} else if (nilai >= 70) {
  console.log("nilai anda C");
} else {
  console.log("nilai anda D");
}

// contoh penggunaan nested if
var umur = 20;
var cukupUmur = true;

if (umur >= 17) {
  if (cukupUmur) {
    console.log("Anda boleh membuat ktp");
  } else {
    console.log("membuat ktp harus berumur 17 ke atas");
  }
} else {
  console.log("Anda belum cukup umur untuk membuat ktp");
}

// contoh penggunaan swtich case

let pilihan = "C";

switch (pilihan) {
  case "A":
    console.log("Anda memilih pilihan A.");
    break;
  case "B":
    console.log("Anda memilih pilihan B.");
    break;
  case "C":
    console.log("Anda memilih pilihan C.");
    break;
  default:
    console.log("Pilihan tidak tersedia.");
}

// contoh penggunaan for statement

for (var i = 0; i <= 5; i++) {
  console.log("perulangan ke " + i);
}

// contoh penggunaan while
var angka = 0;
while (angka <= 5) {
  console.log("Angka: " + angka);
  angka++;
}

// contoh penggunaan do while
var counter = 0;
do {
  console.log("Counter: " + counter);
  counter++;
} while (counter <= 5);

//contoh penggunaan function
function tambah(a, b) {
  return a + b;
}
const hasil = tambah(5, 3);
console.log("Hasilnya adalah " + hasil);
