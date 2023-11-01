<template>
  <header class="fixed top-0 left-0 w-full flex items-center z-10 bg-transparent">
    <div class="container">
      <div class="relative flex items-center justify-between">
        <div class="px-4">
          <a href="#home" class="font-semibold text-lg text-primary block py-6"><span class="text-dark dark:text-white">GreenJS</span>API</a>
        </div>
        <div class="flex items-center px-4">
          <button id="hamburger" name="hamburger" type="button" class="block absolute right-4 lg:hidden">
            <span class="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
            <span class="hamburger-line transition duration-300 ease-in-out"></span>
            <span class="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
          </button>
          <nav
            id="nav-menu"
            class="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none dark:bg-dark dark:shadow-slate-500 lg:dark:bg-transparent"
          >
            <ul class="block lg:flex">
              <li class="group cursor-pointer">
                <router-link to="/" class="text-base nav-link text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white">Beranda</router-link>
              </li>
              <li class="group cursor-pointer">
                <router-link to="/weather" class="text-base nav-link text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white">API Cuaca</router-link>
              </li>
              <li class="group cursor-pointer">
                <router-link to="/plant" class="text-base nav-link text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white">API Tanaman</router-link>
              </li>
              <li class="flex items-center pl-8 mt-3 lg:mt-0">
                <div class="flex">
                  <span class="mr-2 text-sm text-slate-500">Light</span>
                  <input @change="darkToggle" type="checkbox" class="hidden" id="dark-toggle" />
                  <label for="dark-toggle">
                    <div class="flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-500 p-1">
                      <div class="toggle-circle h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out"></div>
                    </div>
                  </label>
                  <span class="ml-2 text-sm text-slate-500">Dark</span>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavbarComponents",
  methods: {
    darkToggle() {
      this.dark = !this.dark;
      if (this.dark) {
        this.setDark(true);
      } else {
        this.setDark(false);
      }
    },
    setDark(dark) {
      const html = document.documentElement;
      const darkToggle = document.getElementById("dark-toggle");
      if (dark) {
        html.classList.add("dark");
        localStorage.theme = "dark";
      } else {
        html.classList.remove("dark");
        localStorage.theme = "light";
      }
      darkToggle.checked = dark;
    },
  },
  data() {
    return {};
  },
  mounted() {
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      this.setDark(true);
    } else {
      this.setDark(false);
    }

    console.log(this.dark);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
