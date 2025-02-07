let maximum = parseInt(prompt('Masukkan nilai maksimal!'));

while (!maximum) {
  maximum = parseInt(prompt('Masukkan nilai maksimal!'));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt('Isi tebakan pertama kamu!'));

while (parseInt(guess) !== targetNum) {
  if (guess > targetNum) {
    guess = prompt('Terlalu tinggi! tebak lagi:');
  } else {
    guess = prompt('Terlalu rendah! tebak lagi:');
  }
}

alert('Selamat Tebakkan Anda benar!!');

// warning if 1

// if (1 + 1 === 2) {
//   console.log('Perhitungannya Benar');
// }

// let iniHari = prompt('Isikan Hari:').toLowerCase();

// if (iniHari === 'senin') {
//   console.log('Selamat Bekerja!');
// } else if (iniHari === 'sabtu') {
//   console.log('Semoga tidak cepat berlalu');
// } else {
//   console.log('Yah Biasa Aja');
// }

// const password = prompt('buat password');

// if (password.length >= 6) {
//   if (password.indexOf(' ') === -1) {
//     console.log('password valid');
//   } else {
//     console.log('password tidak boleh ada spasi');
//   }
// } else {
//   console.log('password minimal 6 karakter');
// }
