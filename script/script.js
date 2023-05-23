alert(
  "Jika Terjadi Kesalahan pada style, berati browser anda tidak mendukung fitur css nested. Silahkan gunakan browser dengan versi terbaru"
);

// Input Luas dan Keliling
const InputLuas = document.querySelector('input[name="sisi-luas"]');
const InputKeliling = document.querySelector('input[name="sisi-keliling"]');

// LUAS
const rumusLuas = document.getElementById("rumus-luas");
const perhitunganLuas = document.getElementById("perhitungan-luas");
const outputLuas = document.getElementById("luas_output");
const hitungLuas = document.querySelector('button[name="hitung-luas"]');
const resetLuas = document.querySelector('button[name="reset-luas"]');
const resultLuas = document.getElementsByClassName("result-luas");

// KELILING
const rumusKeliling = document.getElementById("rumus-keliling");
const perhitunganKeliling = document.getElementById("perhitungan-keliling");
const outputKeliling = document.getElementById("keliling_output");
const hitungKeliling = document.querySelector('button[name="hitung-keliling"]');
const resetKeliling = document.querySelector('button[name="reset-keliling"]');
const resultKeliling = document.getElementsByClassName("result-keliling");

// Menghitung Luas
hitungLuas.addEventListener("click", (e) => {
  e.preventDefault();
  rumusLuas.innerHTML = `L = ${InputLuas.value} x ${InputLuas.value}`;
  perhitunganLuas.innerHTML = `L = ${InputLuas.value * InputLuas.value}`;
  outputLuas.innerHTML = `L = ${InputLuas.value * InputLuas.value} cm<sup>2</sup>`;
});

// Reset Luas
resetLuas.addEventListener("click", (e) => {
  e.preventDefault()
  rumusLuas.innerHTML = "";
  perhitunganLuas.innerHTML = "";
  outputLuas.innerHTML = "";
  InputLuas.value = "";
});

// Menghitung Keliling
hitungKeliling.addEventListener("click", (e) => {
  e.preventDefault();
  rumusKeliling.innerHTML = `K = 4 x ${InputKeliling.value}`;
  perhitunganKeliling.innerHTML = `K = ${4 * InputKeliling.value}`;
  outputKeliling.innerHTML = `K = ${4 * InputKeliling.value} cm`;
});

// Reset Keliling
resetKeliling.addEventListener("click", (e) => {
  e.preventDefault()
  rumusKeliling.innerHTML = "";
  perhitunganKeliling.innerHTML = "";
  outputKeliling.innerHTML = "";
  InputKeliling.value = "";
});
