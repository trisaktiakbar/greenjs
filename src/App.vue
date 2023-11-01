<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <NavbarComponent />
  <router-view />
  <FooterComponent />

  <!-- Back To Top Start -->
  <a id="to-top" href="#" class="hidden h-14 w-14 bg-primary rounded-2xl fixed justify-center items-center z-[9999] bottom-10 right-10 p-4 hover:animate-pulse">
    <span class="block h-5 w-5 border-t-2 border-l-2 rotate-45 mt-2"></span>
  </a>
  <!-- Back To Top End -->
</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    NavbarComponent,
    FooterComponent,
  },
  mounted() {
    const html = document.documentElement;
    const header = document.querySelector("header");
    const hamburger = document.querySelector("#hamburger");
    const navMenu = document.querySelector("#nav-menu");

    html.classList.add("scroll-smooth");

    window.onscroll = () => {
      const fixedNav = header.offsetTop;
      const toTop = document.querySelector("#to-top");

      if (window.pageYOffset > fixedNav) {
        header.classList.add("navbar-fixed");
        toTop.classList.remove("hidden");
        toTop.classList.add("flex");
      } else {
        header.classList.remove("navbar-fixed");
        toTop.classList.remove("flex");
        toTop.classList.add("hidden");
      }
    };

    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger-active");
      navMenu.classList.toggle("hidden");
    });

    window.addEventListener("click", (e) => {
      if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove("hamburger-active");
        navMenu.classList.add("hidden");
      }
    });
  },
};
</script>

<style></style>
