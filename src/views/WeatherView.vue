<template>
  <section class="pt-36 dark:bg-dark pb-20">
    <div class="container">
      <h2 class="heading-1">API Cuaca</h2>
      <p class="article-text">
        API Cuaca menggunakan algoritma Long-Short Term Memory (LSTM) untuk mendapatkan suhu minimum (°C), suhu maksimum(°C), suhu rata-rata (°C), kelembaban udara (%), curah hujan (mm), dan lama penyinaran matahari (jam) selama satu bulan
        yang akan datang. Fitur-fitur yang digunakan sebagai input untuk model LSTM merupakan suhu minimum (°C), suhu maksimum (°C), suhu rata-rata (°C), kelembaban udara (%), curah hujan (mm) dan lama penyinaran matahari (jam) selama
        jumlah hari (<code class="text-sky-500">timestep</code>) yang telah ditentukan.
      </p>
      <div>
        <h3 class="heading-2">Import Module</h3>
        <p class="article-text">Berikut adalah contoh kode untuk mengimpor module GreenAPI.</p>
        <CodeCardComponent codeTitle="script.js" :codeText="importModule" language="javascript" />
      </div>
      <div>
        <h3 class="heading-2">fetchModel()</h3>
        <p class="article-text">
          Untuk menggunakan model LSTM dari API Cuaca, dapat dilakukan dengan <code class="text-sky-500">fetchModel()</code>. <code class="text-sky-500">fetchModel()</code> akan melakukan komunikasi dengan server atau backend untuk
          mendapatkan data model yang dibutuhkan client. <code class="text-sky-500">fetchModel()</code> memiliki satu parameter wajib, yaitu <code class="text-sky-500">feature</code>, yang berisi fitur yang akan diprediksi.
        </p>
        <p class="article-text">Parameter <code class="text-sky-500">feature</code> yang dapat digunakan adalah sebagai berikut</p>
        <table class="table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Deskripsi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code class="text-sky-500">"suhu_minimum"</code> atau <code class="text-sky-500">"Tn"</code></td>
              <td class="text-start">Model untuk memprediksi fitur suhu minimum</td>
            </tr>
            <tr>
              <td><code class="text-sky-500">"suhu_maksimum"</code> atau <code class="text-sky-500">"Tx"</code></td>
              <td class="text-start">Model untuk memprediksi fitur suhu maksimum</td>
            </tr>
            <tr>
              <td><code class="text-sky-500">"suhu_rata_rata"</code> atau <code class="text-sky-500">"Tavg"</code></td>
              <td class="text-start">Model untuk memprediksi fitur suhu rata-rata</td>
            </tr>
            <tr>
              <td><code class="text-sky-500">"kelembaban_udara"</code> atau <code class="text-sky-500">"RH_avg"</code></td>
              <td class="text-start">Model untuk memprediksi fitur kelembaban udara rata-rata</td>
            </tr>
            <tr>
              <td><code class="text-sky-500">"curah_hujan"</code> atau <code class="text-sky-500">"RR"</code></td>
              <td class="text-start">Model untuk memprediksi fitur curah hujan</td>
            </tr>
            <tr>
              <td><code class="text-sky-500">"penyinaran_matahari"</code> atau <code class="text-sky-500">"ss"</code></td>
              <td class="text-start">Model untuk memprediksi fitur lama penyinaran matahari</td>
            </tr>
          </tbody>
        </table>
        <p class="article-text">Berikut contoh penggunaan dari <code class="text-sky-500">fetchModel()</code></p>
        <CodeCardComponent codeTitle="script.js" :codeText="fetchModel" language="javascript" />
        <p class="article-text">
          Secara default, model menggunakan <code class="text-sky-500">timestep</code> dengan nilai 30, yang berarti data input untuk model memiliki dimensi 30 hari. Model menyediakan dua buah nilai
          <code class="text-sky-500">timestep</code> yang dapat digunakan, yaitu 30 untuk dimensi input 30 hari, dan 90 untuk dimensi input 90 hari.
        </p>
        <p class="article-text">Fungsi <code class="text-sky-500">fetchModel()</code> dapat menerima parameter <code class="text-sky-500">timestep</code> seperti pada kode berikut.</p>
        <CodeCardComponent codeTitle="script.js" :codeText="timestep" language="javascript" />
        <p class="article-text">Hasil yang didapatkan akan lebih akurat jika menggunakan <code class="text-sky-500">timestep</code> yang lebih besar.</p>
      </div>
      <div>
        <h3 class="heading-2">Format Data</h3>
        <p class="article-text">
          Format Data untuk input model adalah array dengan panjang sesuai dengan <span class="text-sky-500">timestep</span> yang digunakan. Setiap array terdiri dari data <code class="text-sky-500">suhu_minimum</code>,
          <code class="text-sky-500">suhu_maksimum</code>, <code class="text-sky-500">suhu_rata_rata</code>, <code class="text-sky-500">kelembaban_udara</code>, <code class="text-sky-500">curah_hujan</code>, dan
          <code class="text-sky-500">penyinaran_matahari</code>,
        </p>
        <p class="article-text">Berikut adalah contoh format data untuk digunakan sebagai input model.</p>
        <CodeCardComponent codeTitle="script.js" :codeText="formatDataArray" language="javascript" />
        <p class="article-text">Selain menggunakan array, format data juga dapat menggunakan object dengan memanfaatkan fungsi <code class="text-sky-500">transformArrayOfObjectsToArray()</code>.</p>
        <p class="article-text">Berikut adalah contoh format data jika menggunakan object.</p>
        <CodeCardComponent codeTitle="script.js" :codeText="formatDataObject" language="javascript" />
      </div>
      <div>
        <h3 class="heading-2">minMaxNormalization()</h3>
        <p class="article-text">
          Untuk menggunakan model, sebaiknya data dinormalisasi untuk menjaga konsistensi skala data dan meningkatkan akurasi prediksi dari model. Untuk normalisasi data menggunakan teknik min-max normalization menggunakan fungsi
          <code class="text-sky-500">minMaxNormalization()</code> yang menerima parameter data dan fitur.
        </p>
        <table class="table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Deskripsi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>data</td>
              <td class="text-start">Parameter untuk data yang akan dinormalisasi</td>
            </tr>
            <tr>
              <td>fitur</td>
              <td class="text-start">
                Parameter untuk fitur yang akan dinormalisasi. Parameter fitur yang dapat digunakan antara lain <code class="text-sky-500">suhu_minimum</code>, <code class="text-sky-500">suhu_maksimum</code>,
                <code class="text-sky-500">suhu_rata_rata</code>, <code class="text-sky-500">kelembaban_udara</code>, <code class="text-sky-500">curah_hujan</code>, dan <code class="text-sky-500">penyinaran_matahari</code>
              </td>
            </tr>
          </tbody>
        </table>
        <p class="article-text">Berikut adalah contoh kode untuk normalisasi data menggunakan fungsi <code class="text-sky-500">minMaxNormalization()</code>.</p>
        <CodeCardComponent codeTitle="script.js" :codeText="minMaxNormalization" language="javascript" />
      </div>
      <div>
        <h3 class="heading-2">minMaxNormalizationAll()</h3>
        <p class="article-text">
          Untuk melakukan normalisasi terhadap array, dapat menggunakan fungsi <code class="text-sky-500">minMaxNormalizationAll()</code>. fungsi <code class="text-sky-500">minMaxNormalizationAll()</code> menerima parameter data berupa
          array yang akan dinormalisasi.
        </p>
        <p class="article-text">Untuk menggunakan <code class="text-sky-500">minMaxNormalizationAll()</code>, berikut adalah contoh kode programnya.</p>
        <CodeCardComponent codeTitle="script.js" :codeText="minMaxNormalizationAllArray" language="javascript" />
        <p class="article-text">
          Fungsi <code class="text-sky-500">minMaxNormalizationAll()</code> juga dapat menerima parameter berupa object dengan melakukan transformasi menggunakan fungsi
          <code class="text-sky-500">transformArrayOfObjectsToArray()</code> terhadap object, sebelum dimasukkan sebagai parameter fungsi <code class="text-sky-500">minMaxNormalizationAll()</code>.
        </p>
        <p class="article-text">Berikut adalah contoh pemanggilan fungsi <code class="text-sky-500">minMaxNormalizationAll()</code> dengan parameter berupa object.</p>
        <CodeCardComponent codeTitle="script.js" :codeText="minMaxNormalizationAllObject" language="javascript" />
      </div>
      <div>
        <h3 class="heading-2">inverseMinMaxNormalization()</h3>
        <p class="article-text">
          Untuk mengembalikan nilai yang sudah dinormalisasi menggunakan teknik min-max normalization menjadi nilai aslinya, fungsi
          <code>inverseMinMaxNormalization()</code> dapat digunakan dengan memberikan parameter berupa data yang akan diubah ke bentuk aslinya, dan fitur dari data tersebut.
        </p>
        <table class="table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Deskripsi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>data</td>
              <td class="text-start">Parameter untuk data yang akan diubah menjadi nilai aslinya</td>
            </tr>
            <tr>
              <td>fitur</td>
              <td class="text-start">
                Parameter untuk fitur dari data. Parameter fitur yang dapat digunakan antara lain <code class="text-sky-500">suhu_minimum</code>, <code class="text-sky-500">suhu maksimum</code>,
                <code class="text-sky-500">suhu_rata_rata</code>, <code class="text-sky-500">kelembaban_udara</code>, <code class="text-sky-500">curah_hujan</code>, dan <code class="text-sky-500">penyinaran_matahari</code>
              </td>
            </tr>
          </tbody>
        </table>
        <p class="article-text">Berikut adalah contoh kode untuk mengubah nilai yang sudah dinormalisasi ke nilai aslinya menggunakan fungsi <code class="text-sky-500">inverseMinMaxNormalization()</code>.</p>
        <CodeCardComponent codeTitle="script.js" :codeText="inverseMinMaxNormalization" language="javascript" />
      </div>
      <div>
        <h3 class="heading-2">inverseMinMaxNormalizationAll()</h3>
        <p class="article-text">
          Untuk mengembalikan nilai yang sudah dinormalisasi menggunakan teknik min-max normalization menjadi nilai aslinya dengan input berupa Array, dapat menggunakan fungsi
          <code class="text-sky-500">inverseMinMaxNormalizationAll()</code>. Fungsi <code class="text-sky-500">inverseMinMaxNormalizationAll()</code> menerima parameter data berupa array yang nilainya akan dikembalikan ke bentuk aslinya.
        </p>
        <p class="article-text">Untuk menggunakan <code class="text-sky-500">inverseMinMaxNormalizationAll()</code>, berikut adalah contoh kode programnya.</p>
        <CodeCardComponent codeTitle="script.js" :codeText="inverseMinMaxNormalizationAllArray" language="javascript" />
        <p class="article-text">
          Fungsi <code class="text-sky-500">inverseMinMaxNormalizationAll()</code> juga dapat menerima parameter berupa object dengan melakukan transformasi menggunakan fungsi
          <code class="text-sky-500">transformObjectsToArray()</code> terhadap object, sebelum dimasukkan sebagai parameter fungsi <code class="text-sky-500">inverseMinMaxNormalizationAll()</code>.
        </p>
        <p class="article-text">Berikut adalah contoh pemanggilan fungsi <code class="text-sky-500">inverseMinMaxNormalizationAll()</code> dengan parameter berupa object.</p>
        <CodeCardComponent codeTitle="script.js" :codeText="inverseMinMaxNormalizationAllObject" language="javascript" />
      </div>
      <div>
        <h3 class="heading-2">predict()</h3>
        <p class="article-text">
          Untuk memanggil fungsi <code class="text-sky-500">predict()</code>, struktur data yang menjadi input, harus diubah menjadi tensor agar dapat diproses. Selanjutnya, fungsi <code class="text-sky-500">predict()</code> dipanggil
          setelah model berhasil di-<i>load</i>. Fungsi <code class="text-sky-500">predict()</code> menerima parameter data yang telah diubah menjadi tensor
        </p>
        <CodeCardComponent codeTitle="script.js" :codeText="predict" language="javascript" />
      </div>
      <div>
        <h3 class="heading-2">Starter Template</h3>
        <p class="article-text">Berikut adalah contoh lengkap kode untuk menggunakan API Cuaca.</p>
        <CodeCardComponent codeTitle="script.js" :codeText="starterTemplate" language="javascript" />
      </div>
    </div>
  </section>
</template>

<script>
import CodeCardComponent from "@/components/CodeCardComponent.vue";

export default {
  name: "WeatherView",
  components: { CodeCardComponent },
  data() {
    return {
      importModule: `
  import * as greenAPI from "https://greenjs.netlify.app/api/green-api.js";`,
      fetchModel: `
  greenAPI.fetchModel("Tn")
    .then((res) => {
      greenAPI.loadModel(res.model).then((loadedModel) => {
        const model = loadedModel;
        console.log(model);
      });
    })
    .catch((error) => {
      console.error("Terjadi kesalahan:", error);
    });`,
      timestep: `
  greenAPI.fetchModel("Tn", 30) // Isi dengan timestep yang diinginkan (30 atau 90)
    .then((res) => {
      greenAPI.loadModel(res.model).then((loadedModel) => {
        const model = loadedModel;
        console.log(model);
      });
    })
    .catch((error) => {
      console.error("Terjadi kesalahan:", error);
    });`,
      formatDataArray: `
  let data = [
    // Format data :
    // [suhu_minimum, suhu_maksimum, suhu_rata_rata, kelembaban_udara, curah_hujan, penyinaran_matahari]
    [23, 30, 27, 65, 12, 10],
    [24, 30, 28, 75, 11, 11],
    // ...
    // Tambahkan sesuai dengan jumlah timestep yang digunakan
  ];`,
      formatDataObject: `
  let data = [
    { suhu_minimum: 23, suhu_maksimum: 30, suhu_rata_rata : 27, kelembaban_udara: 65, curah_hujan: 12, penyinaran_matahari: 10 },
    { suhu_minimum: 24, suhu_maksimum: 30, suhu_rata_rata : 28, kelembaban_udara: 75, curah_hujan: 11, penyinaran_matahari: 11 },
    // ...
    // Tambahkan sesuai dengan jumlah timestep yang digunakan
  ];

  data = greenAPI.transformArrayOfObjectsToArray(data);
  console.log(data);`,
      minMaxNormalization: `
  let curahHujan = 29;
  let normalisasiCurahHujan = greenAPI.minMaxNormalization(curah_hujan, "curah_hujan");

  console.log(normalisasiSuhu);`,

      minMaxNormalizationAllArray: `
  let data = [
    // [suhu_minimum, suhu_maksimum, suhu_rata_rata, kelembaban_udara, curah_hujan,  penyinaran_matahari]
    [28, 30, 29, 80, 7, 10],
    [27, 32, 28, 75, 16, 9],
    // ...
  ];

  data = greenAPI.minMaxNormalizationAll(data);
  console.log(data);`,
      minMaxNormalizationAllObject: `
  let data = [
    { suhu_minimum: 28, suhu_maksimum: 30, suhu_rata_rata: 29, kelembaban_udara: 80, curah_hujan: 7, penyinaran_matahari: 10 },
    { suhu_minimum: 27, suhu_maksimum: 32, suhu_rata_rata: 28, kelembaban_udara: 75, curah_hujan: 16, penyinaran_matahari: 9 },
    // ...
  ];

  data = greenAPI.transformArrayOfObjectsToArray(data);
  data = greenAPI.minMaxNormalizationAll(data);

  console.log(data);`,

      predict: `
  const inputTensor = tf.tensor3d([data]);
  let predictions = model.predict(inputTensor);
  predictions = predictions.dataSync();
  console.log(predictions);`,
      inverseMinMaxNormalization: `
  let normalisasiCurahHujan = 0.566;
  let curahHujan = greenAPI.inverseMinMaxNormalization(normalisasiCurahHujan, "curah_hujan");

  console.log(curahHujan);`,

      inverseMinMaxNormalizationAllArray: `
  let data = [0.766, 0.8, 0.78, 0.523, 0.443, 0.01];
  // [suhu_minimum, suhu_maksimum, suhu_rata_rata, kelembaban_udara, curah_hujan, penyinaran_matahari]

  data = greenAPI.inverseMinMaxNormalizationAll(data);
  console.log(data);`,
      inverseMinMaxNormalizationAllObject: `
  let dataNormalisasi = {
    suhu_minimum: 0.766,
    suhu_maksimum: 0.8,
    suhu_rata_rata: 0.78,
    kelembaban_udara: 0.523,
    curah_hujan: 0.443,
    penyinaran_matahari: 0.01
  };

  let data = greenAPI.transformObjectsToArray(dataNormalisasi);
  data = greenAPI.inverseMinMaxNormalizationAll(data);

  console.log(data);`,

      starterTemplate: `
  import * as greenAPI from "https://greenjs.netlify.app/api/green-api.js";

  let data = [
    { suhu_minimum: 23, suhu_maksimum:30, suhu_rata_rata: 27, kelembaban_udara: 66, curah_hujan: 10, penyinaran_matahari: 4 },
    { suhu_minimum: 24, suhu_maksimum:31, suhu_rata_rata: 28, kelembaban_udara: 75, curah_hujan: 9, penyinaran_matahari: 4 },
    // ...
  ];

  data = greenAPI.transformArrayOfObjectsToArray(data);
  data = greenAPI.minMaxNormalizationAll(data);

  greenAPI
    .fetchModel("Tn")
    .then((res) => {
      greenAPI.loadModel(res.model).then((loadedModel) => {
        const model = loadedModel;
        const inputTensor = tf.tensor3d([data]);
        let predictions = model.predict(inputTensor);

        predictions = predictions.dataSync();
        predictions = greenAPI.inverseMinMaxNormalizationAll(predictions. "suhu minimum");

        console.log(predictions);
      });
    })
    .catch((error) => {
      console.error("Terjadi kesalahan:", error);
    });`,
    };
  },
};
</script>

<style scoped></style>
