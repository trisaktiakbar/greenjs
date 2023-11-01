<template>
  <section class="pt-36 dark:bg-dark pb-20">
    <div class="container">
      <h2 class="heading-1">API Tanaman</h2>
      <div>
        <h3 class="heading-2">Import Module</h3>
        <p class="article-text">Berikut adalah contoh kode untuk mengimpor module GreenAPI.</p>
        <CodeCardComponent codeTitle="script.js" :codeText="importModule" language="javascript" />
      </div>

      <div>
        <h3 class="heading-2">HTTP Request</h3>
        <p class="article-text">
          API Tanaman dapat memberikan rekomendasi tanaman berdasarkan hasil rekomendasi menggunakan Algoritma K-Nearest Neighbor. Fitur-fitur yang digunakan sebagai input untuk model merupakan berupa rata-rata suhu (°C), rata-rata
          kelembaban udara (%), pH tanah (pH), dan rata-rata curah hujan (mm).
        </p>
        <p class="article-text">Berikut adalah contoh URL untuk melakukan HTTP request ke API Tanaman :</p>
        <CodeCardComponent codeTitle="script.js" :codeText="codeHTTPRequest" language="javascript" />
        <p class="article-text">
          Ketika melakukan HTTP Request ke API ini, diperlukan query berupa object <code class="text-sky-500">data</code> yang berisi properti <code class="text-sky-500">suhu</code>, <code class="text-sky-500">kelembaban_udara</code>,
          <code class="text-sky-500">ph_tanah</code>, dan <code class="text-sky-500">curah_hujan</code>
        </p>
      </div>

      <div>
        <h3 class="heading-2">Parameter Query</h3>
        <p class="article-text">
          Parameter query <code class="text-sky-500">data</code> adalah sebuah object yang harus disertakan pada saat melakukan HTTP Request ke API. Object <code class="text-sky-500">data</code> yang disertakan merupakan object yang telah
          dikonversi menjadi sebuah String JSON
        </p>
        <p class="article-text">Berikut adalah contoh kode untuk membuat parameter query sebelum melakukan HTTP Request ke API.</p>
        <CodeCardComponent codeTitle="script.js" :codeText="codeParameterQuery" language="javascript" />
        <p class="article-text">
          Ketika melakukan HTTP Request ke API ini, diperlukan query berupa object yang berisi properti <code class="text-sky-500">suhu</code>, <code class="text-sky-500">kelembaban_udara</code>, <code class="text-sky-500">ph_tanah</code>,
          dan <code class="text-sky-500">curah_hujan</code>.
        </p>
      </div>
      <div>
        <h3 class="heading-2">Starter Template</h3>
        <p class="article-text">
          HTTP Request dapat dilakukan dengan menggunakan <code class="text-sky-500">fetch()</code> yang mengarah ke alamat URL dari API dengan mengirimkan object <code class="text-sky-500">data</code> sebagai parameter query.
        </p>
        <p class="article-text">Berikut adalah contoh untuk melakukan HTTP Request ke API Tanaman.</p>
        <CodeCardComponent codeTitle="script.js" :codeText="codeJS" language="javascript" />
      </div>
    </div>
  </section>
</template>

<script>
import CodeCardComponent from "@/components/CodeCardComponent.vue";

export default {
  name: "PlantView",
  components: { CodeCardComponent },
  data() {
    return {
      importModule: `
  import * as greenAPI from "https://greenjs.netlify.app/api/green-api.js";`,
      codeHTTPRequest: `
  const url = greenAPI.getKNNModel(data)`,
      codeJS: `
  let data = {
    suhu: 30,
    kelembaban_udara: 90,
    ph_tanah: 30,
    curah_hujan: 88,
  };

  data = encodeURIComponent(JSON.stringify(data));

  const url = greenAPI.getKNNModel(data);

  fetch(url)
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
    })
    .catch((error) => {
      console.error("Terjadi kesalahan:", error);
    });`,
      codeParameterQuery: `
  let data = {
    suhu: 30,
    kelembaban_udara: 90,
    ph_tanah: 30,
    curah_hujan: 88,
  };

  data = encodeURIComponent(JSON.stringify(data));

  const url = greenAPI.getKNNModel(data)`,
    };
  },
};
</script>

<style scoped></style>
