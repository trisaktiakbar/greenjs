<template>
  <div class="w-full rounded-xl shadow-lg border mb-10 overflow-hidden dark:border-slate-700">
    <div class="bg-slate-800">
      <div class="flex">
        <code class="font-bold text-sky-500 bg-dark text-lg px-6 pb-3 py-4">{{ codeTitle }}</code>
        <div class="bg-dark">
          <h4 class="bg-slate-800 rounded-tl-xl h-full px-4 pb-3 py-4"></h4>
        </div>
        <h4 @click="copy" class="font-medium cursor-pointer text-lg text-secondary hover:text-white px-6 pb-3 py-4 rounded-tl-lg ms-auto transition duration-300" title="Salin ke clipboard">
          <i class="bi bi-copy"></i><span class="text-base" v-if="copied">&nbsp;Disalin ke clipboard</span>
        </h4>
      </div>
    </div>
    <div class="text-white bg-slate-800">
      <div class="scrollbar-dark">
        <code class="text-base font-bold">
          <SyntaxHighlighterComponent :code="codeText" :language="language" />
        </code>
      </div>
    </div>
  </div>
</template>

<script>
import SyntaxHighlighterComponent from "./SyntaxHighlighterComponent.vue";

export default {
  name: "CodeCardComponent",
  props: ["codeText", "codeTitle", "language"],
  components: { SyntaxHighlighterComponent },
  data() {
    return {
      copied: false,
    };
  },
  methods: {
    copy() {
      if (navigator.clipboard) {
        navigator.clipboard
          .writeText(this.codeText)
          .then(() => {
            this.copied = true;
          })
          .catch((err) => {
            this.copied = false;
            console.error("Gagal menyalin teks: ", err);
          });
      }
    },
  },
};
</script>

<style></style>
