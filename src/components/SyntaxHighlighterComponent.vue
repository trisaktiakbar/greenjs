<template>
  <div>
    <pre :class="'px-6 overflow-x-auto bg-dark'">
    <code :class="'language-' + language">
      {{ code }}
    </code>
    </pre>
  </div>
</template>

<script>
import "prismjs/themes/prism-okaidia.css";
import Prism from "prismjs";

export default {
  props: {
    code: String, // Kode yang akan disorot
    language: String, // Bahasa pemrograman (misalnya, "javascript", "html")
  },
  mounted() {
    Prism.highlightAll();
  },
};
</script>

<style scoped>
.whitespace-no-wrap {
  white-space: nowrap !important;
}

.scrollbar-dark::-webkit-scrollbar {
  width: 10px;
}

.scrollbar-dark::-webkit-scrollbar-track {
  background: #0f172a; /* Ubah sesuai warna background yang Anda inginkan */
}

.scrollbar-dark::-webkit-scrollbar-thumb {
  background: rgb(51 65 85); /* Ubah sesuai warna scroll bar yang Anda inginkan */
}

.language-javascript,
.language-html,
.language-php {
  background-color: #0f172a;
  margin: 0;
  padding-top: 0;
  padding-bottom: 0;
}
</style>
