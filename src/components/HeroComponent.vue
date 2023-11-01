<template>
  <section id="home" class="pt-36 dark:bg-dark">
    <div class="container lg:min-h-screen">
      <div class="flex flex-wrap">
        <div class="w-full self-center px-4 lg:w-1/2">
          <h1 class="text-base font-semibold mb-5 text-primary md:text-xl">
            Selamat datang di <span class="block font-bold text-dark text-4xl mt-1 lg:text-5xl dark:text-white">GreenJS<span class="text-primary">API</span> </span>
          </h1>
          <h2 class="font-bold text-secondary text-lg mb-5 lg:text-lg text-dark dark:text-white">API Prakiraan Cuaca & Rekomendasi Tanaman <span class="text-primary">Kota Makassar</span></h2>
          <p class="font-medium text-secondary mb-10 leading-relaxed">
            Optimasi Pertumbuhan Tanaman dengan Prakiraan Layanan<span class="text-dark font-bold dark:text-white"> Green<span class="text-primary">API</span></span>
          </p>
          <router-link to="/weather" class="text-base font-semibold bg-primary text-white py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out dark:text-dark">Mulai Sekarang</router-link>
        </div>
        <div class="w-full self-end px-4 mb-10 lg:w-1/2">
          <div class="relative mt-16 lg:mt-0 lg:right-0">
            <img :src="require('@/assets/img/hero.svg')" alt="Trisakti Akbar" class="relative z-10 max-w-full mx-auto" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
