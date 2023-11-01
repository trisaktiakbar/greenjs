(function(){"use strict";var a={216:function(a,e,t){var n=t(9242),r=t(3396);const s=(0,r._)("a",{id:"to-top",href:"#",class:"hidden h-14 w-14 bg-primary rounded-2xl fixed justify-center items-center z-[9999] bottom-10 right-10 p-4 hover:animate-pulse"},[(0,r._)("span",{class:"block h-5 w-5 border-t-2 border-l-2 rotate-45 mt-2"})],-1);function i(a,e,t,n,i,l){const o=(0,r.up)("NavbarComponent"),d=(0,r.up)("router-view"),c=(0,r.up)("FooterComponent");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(o),(0,r.Wm)(d),(0,r.Wm)(c),s],64)}const l={class:"fixed top-0 left-0 w-full flex items-center z-10 bg-transparent"},o={class:"container"},d={class:"relative flex items-center justify-between"},c=(0,r._)("div",{class:"px-4"},[(0,r._)("a",{href:"#home",class:"font-semibold text-lg text-primary block py-6"},[(0,r._)("span",{class:"text-dark dark:text-white"},"GreenJS"),(0,r.Uk)("API")])],-1),u={class:"flex items-center px-4"},m=(0,r._)("button",{id:"hamburger",name:"hamburger",type:"button",class:"block absolute right-4 lg:hidden"},[(0,r._)("span",{class:"hamburger-line transition duration-300 ease-in-out origin-top-left"}),(0,r._)("span",{class:"hamburger-line transition duration-300 ease-in-out"}),(0,r._)("span",{class:"hamburger-line transition duration-300 ease-in-out origin-bottom-left"})],-1),p={id:"nav-menu",class:"absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none dark:bg-dark dark:shadow-slate-500 lg:dark:bg-transparent"},g={class:"block lg:flex"},h={class:"group cursor-pointer"},k={class:"group cursor-pointer"},x={class:"group cursor-pointer"},b={class:"flex items-center pl-8 mt-3 lg:mt-0"},y={class:"flex"},f=(0,r._)("span",{class:"mr-2 text-sm text-slate-500"},"Light",-1),v=(0,r._)("label",{for:"dark-toggle"},[(0,r._)("div",{class:"flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-500 p-1"},[(0,r._)("div",{class:"toggle-circle h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out"})])],-1),_=(0,r._)("span",{class:"ml-2 text-sm text-slate-500"},"Dark",-1);function w(a,e,t,n,s,i){const w=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("header",l,[(0,r._)("div",o,[(0,r._)("div",d,[c,(0,r._)("div",u,[m,(0,r._)("nav",p,[(0,r._)("ul",g,[(0,r._)("li",h,[(0,r.Wm)(w,{to:"/",class:"text-base nav-link text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white"},{default:(0,r.w5)((()=>[(0,r.Uk)("Beranda")])),_:1})]),(0,r._)("li",k,[(0,r.Wm)(w,{to:"/weather",class:"text-base nav-link text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white"},{default:(0,r.w5)((()=>[(0,r.Uk)("API Cuaca")])),_:1})]),(0,r._)("li",x,[(0,r.Wm)(w,{to:"/plant",class:"text-base nav-link text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white"},{default:(0,r.w5)((()=>[(0,r.Uk)("API Tanaman")])),_:1})]),(0,r._)("li",b,[(0,r._)("div",y,[f,(0,r._)("input",{onChange:e[0]||(e[0]=(...a)=>i.darkToggle&&i.darkToggle(...a)),type:"checkbox",class:"hidden",id:"dark-toggle"},null,32),v,_])])])])])])])])}var j={name:"NavbarComponents",methods:{darkToggle(){this.dark=!this.dark,this.dark?this.setDark(!0):this.setDark(!1)},setDark(a){const e=document.documentElement,t=document.getElementById("dark-toggle");a?(e.classList.add("dark"),localStorage.theme="dark"):(e.classList.remove("dark"),localStorage.theme="light"),t.checked=a}},data(){return{}},mounted(){"dark"===localStorage.theme||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?this.setDark(!0):this.setDark(!1),console.log(this.dark)}},T=t(89);const A=(0,T.Z)(j,[["render",w]]);var M=A;const P={class:"bg-dark pt-24 pb-12"},I={class:"container"},N={class:"flex flex-wrap"},z=(0,r._)("div",{class:"w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3"},[(0,r._)("h2",{class:"font-bold text-4xl text-white mb-5"},[(0,r.Uk)("GreenJS"),(0,r._)("span",{class:"text-primary"},"API")]),(0,r._)("h3",{class:"inline-block text-base mt-3"},"Hubungi Penyedia Layanan"),(0,r._)("div",{class:"flex mb-10 mt-5"},[(0,r._)("a",{href:"https://youtube.com",target:"_blank",class:"w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white transition duration-300"},[(0,r._)("svg",{class:"fill-current",width:"20",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[(0,r._)("title",null,"WhatsApp"),(0,r._)("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"})])]),(0,r._)("a",{href:"https://instagram.com",target:"_blank",class:"w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white transition duration-300"},[(0,r._)("svg",{class:"fill-current",width:"20",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[(0,r._)("title",null,"Instagram"),(0,r._)("path",{d:"M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"})])]),(0,r._)("a",{href:"https://twitter.com",target:"_blank",class:"w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white transition duration-300"},[(0,r._)("svg",{class:"fill-current",width:"20",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[(0,r._)("title",null,"Twitter"),(0,r._)("path",{d:"M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z"})])]),(0,r._)("a",{href:"https://tiktok.com",target:"_blank",class:"w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white transition duration-300"},[(0,r._)("svg",{class:"fill-current",width:"20",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[(0,r._)("title",null,"TikTok"),(0,r._)("path",{d:"M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"})])]),(0,r._)("a",{href:"https://gmail.com",target:"_blank",class:"w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white transition duration-300"},[(0,r._)("svg",{class:"fill-current",width:"20",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[(0,r._)("title",null,"Gmail"),(0,r._)("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"})])])])],-1),C=(0,r.uE)('<div class="w-full px-4 mb-12 md:w-1/3"><h3 class="font-semibold text-xl text-white mb-5">Dokumentasi</h3><ul class="text-slate-300"><li><a href="#" class="inline-block text-base hover:text-primary mb-3 transition duration-300">Tensorflow</a></li><li><a href="#" class="inline-block text-base hover:text-primary mb-3 transition duration-300">Algoritma LSTM</a></li><li><a href="#" class="inline-block text-base hover:text-primary mb-3 transition duration-300">Algoritma K-NN</a></li></ul></div>',1),S={class:"w-full px-4 mb-12 md:w-1/3"},O=(0,r._)("h3",{class:"font-semibold text-xl text-white mb-5"},"Tautan",-1),W={class:"text-slate-300"},U=(0,r.uE)('<div class="w-full pt-10 border-t border-slate-700"><div class="block lg:flex justify-between"><p class="font-medium text-sm text-slate-500">2023 © GreenAPI</p><p class="font-medium text-sm text-slate-500">Develope by <a href="https://instagram.com/trisakti_akbar" class="text-primary">Trisakti Akbar</a></p></div></div>',1);function D(a,e,t,n,s,i){const l=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("footer",P,[(0,r._)("div",I,[(0,r._)("div",N,[z,C,(0,r._)("div",S,[O,(0,r._)("ul",W,[(0,r._)("li",null,[(0,r.Wm)(l,{to:"/",class:"inline-block text-base hover:text-primary mb-3 transition duration-300"},{default:(0,r.w5)((()=>[(0,r.Uk)("Beranda")])),_:1})]),(0,r._)("li",null,[(0,r.Wm)(l,{to:"/weather",class:"inline-block text-base hover:text-primary mb-3 transition duration-300"},{default:(0,r.w5)((()=>[(0,r.Uk)("API Cuaca")])),_:1})]),(0,r._)("li",null,[(0,r.Wm)(l,{to:"/plant",class:"inline-block text-base hover:text-primary mb-3 transition duration-300"},{default:(0,r.w5)((()=>[(0,r.Uk)("API Tanaman")])),_:1})])])])]),U])])}var L={name:"FooterComponent"};const E=(0,T.Z)(L,[["render",D]]);var B=E,H={name:"App",components:{NavbarComponent:M,FooterComponent:B},mounted(){const a=document.documentElement,e=document.querySelector("header"),t=document.querySelector("#hamburger"),n=document.querySelector("#nav-menu");a.classList.add("scroll-smooth"),window.onscroll=()=>{const a=e.offsetTop,t=document.querySelector("#to-top");window.pageYOffset>a?(e.classList.add("navbar-fixed"),t.classList.remove("hidden"),t.classList.add("flex")):(e.classList.remove("navbar-fixed"),t.classList.remove("flex"),t.classList.add("hidden"))},t.addEventListener("click",(()=>{t.classList.toggle("hamburger-active"),n.classList.toggle("hidden")})),window.addEventListener("click",(a=>{a.target!=t&&a.target!=n&&(t.classList.remove("hamburger-active"),n.classList.add("hidden"))}))}};const q=(0,T.Z)(H,[["render",i]]);var F=q,R=t(2483);function Z(a,e,t,n,s,i){const l=(0,r.up)("HeroComponent");return(0,r.wg)(),(0,r.j4)(l)}const G={id:"home",class:"pt-36 dark:bg-dark"},J={class:"container lg:min-h-screen"},K={class:"flex flex-wrap"},V={class:"w-full self-center px-4 lg:w-1/2"},Q=(0,r.uE)('<h1 class="text-base font-semibold mb-5 text-primary md:text-xl"> Selamat datang di <span class="block font-bold text-dark text-4xl mt-1 lg:text-5xl dark:text-white">GreenJS<span class="text-primary">API</span></span></h1><h2 class="font-bold text-secondary text-lg mb-5 lg:text-lg text-dark dark:text-white">API Prakiraan Cuaca &amp; Rekomendasi Tanaman <span class="text-primary">Kota Makassar</span></h2><p class="font-medium text-secondary mb-10 leading-relaxed"> Optimasi Pertumbuhan Tanaman dengan Prakiraan Layanan<span class="text-dark font-bold dark:text-white"> Green<span class="text-primary">API</span></span></p>',3),Y={class:"w-full self-end px-4 mb-10 lg:w-1/2"},X={class:"relative mt-16 lg:mt-0 lg:right-0"},$=["src"];function aa(a,e,n,s,i,l){const o=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("section",G,[(0,r._)("div",J,[(0,r._)("div",K,[(0,r._)("div",V,[Q,(0,r.Wm)(o,{to:"/weather",class:"text-base font-semibold bg-primary text-white py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out dark:text-dark"},{default:(0,r.w5)((()=>[(0,r.Uk)("Mulai Sekarang")])),_:1})]),(0,r._)("div",Y,[(0,r._)("div",X,[(0,r._)("img",{src:t(5351),alt:"Trisakti Akbar",class:"relative z-10 max-w-full mx-auto"},null,8,$)])])])])])}var ea={};const ta=(0,T.Z)(ea,[["render",aa]]);var na=ta,ra={name:"HomeView",components:{HeroComponent:na}};const sa=(0,T.Z)(ra,[["render",Z]]);var ia=sa;const la={class:"pt-36 dark:bg-dark pb-20"},oa={class:"container"},da=(0,r._)("h2",{class:"heading-1"},"API Cuaca",-1),ca=(0,r._)("p",{class:"article-text"},[(0,r.Uk)(" API Cuaca menggunakan algoritma Long-Short Term Memory (LSTM) untuk mendapatkan rata-rata suhu (°C), rata-rata kelembaban udara (%), rata-rata lama penyinaran matahari (jam), dan rata-rata curah hujan (mm) selama satu bulan yang akan datang. Fitur-fitur yang digunakan sebagai input untuk model LSTM merupakan suhu (°C), kelembaban udara (%), lama penyinaran matahari (jam), dan curah hujan (mm) selama jumlah hari ("),(0,r._)("code",{class:"text-sky-500"},"timestep"),(0,r.Uk)(") yang ditentukan sebelumnya. ")],-1),ua=(0,r._)("h3",{class:"heading-2"},"Import Module",-1),ma=(0,r._)("p",{class:"article-text"},"Berikut adalah contoh kode untuk mengimpor module GreenAPI.",-1),pa=(0,r.uE)('<h3 class="heading-2">fetchModel()</h3><p class="article-text"> Untuk menggunakan model LSTM dari API Cuaca, dapat dilakukan dengan <code class="text-sky-500">fetchModel()</code>. <code class="text-sky-500">fetchModel()</code> akan melakukan komunikasi dengan server atau backend untuk mengunduh data model yang dibutuhkan client. </p><p class="article-text">Berikut contoh penggunaan dari <code class="text-sky-500">fetchModel()</code></p>',3),ga=(0,r.uE)('<p class="article-text"> Secara default, model menggunakan <code class="text-sky-500">timestep</code> dengan nilai 14, yang berarti data input untuk model memiliki dimensi 14 hari. Model menyediakan dua buah nilai <code class="text-sky-500">timestep</code> yang dapat digunakan, yaitu 14 untuk dimensi input 14 hari, dan 30 untuk dimensi input 30 hari. </p><p class="article-text">Fungsi <code class="text-sky-500">fetchModel()</code> dapat menerima parameter <code class="text-sky-500">timestep</code> seperti pada kode berikut.</p>',2),ha=(0,r._)("p",{class:"article-text"},[(0,r.Uk)("Hasil yang didapatkan akan lebih akurat jika menggunakan "),(0,r._)("code",{class:"text-sky-500"},"timestep"),(0,r.Uk)(" yang lebih besar.")],-1),ka=(0,r.uE)('<h3 class="heading-2">Format Data</h3><p class="article-text"> Format Data untuk input model adalah array dengan panjang sesuai dengan <span class="text-sky-500">timestep</span> yang digunakan. Setiap array terdiri dari data <code class="text-sky-500">suhu</code>, <code class="text-sky-500">kelembaban_udara</code>, <code class="text-sky-500">penyinaran_matahari</code>, dan <code class="text-sky-500">curah_hujan</code></p><p class="article-text">Berikut adalah contoh format data untuk digunakan sebagai input model.</p>',3),xa=(0,r._)("p",{class:"article-text"},[(0,r.Uk)("Selain menggunakan array, format data juga dapat menggunakan object dengan memanfaatkan fungsi "),(0,r._)("code",{class:"text-sky-500"},"transformArrayOfObjectsToArray()"),(0,r.Uk)(".")],-1),ba=(0,r._)("p",{class:"article-text"},"Berikut adalah contoh format data jika menggunakan object.",-1),ya=(0,r.uE)('<h3 class="heading-2">minMaxNormalization()</h3><p class="article-text"> Untuk menggunakan model, sebaiknya data dinormalisasi untuk menjaga konsistensi skala data dan meningkatkan akurasi prediksi dari model. Untuk normalisasi data menggunakan teknik min-max normalization menggunakan fungsi <code class="text-sky-500">minMaxNormalization()</code> yang menerima parameter data dan fitur. </p><table class="table"><thead><tr><th>Parameter</th><th>Deskripsi</th></tr></thead><tbody><tr><td>data</td><td class="text-start">Parameter untuk data yang akan dinormalisasi</td></tr><tr><td>fitur</td><td class="text-start"> Parameter untuk fitur yang akan dinormalisasi. Parameter fitur yang dapat digunakan antara lain <code class="text-sky-500">suhu</code>, <code class="text-sky-500">kelembaban_udara</code>, <code class="text-sky-500">penyinaran_matahari</code>, dan <code class="text-sky-500">curah_hujan</code></td></tr></tbody></table><p class="article-text">Berikut adalah contoh kode untuk normalisasi data menggunakan fungsi <code class="text-sky-500">minMaxNormalization()</code>.</p>',4),fa=(0,r.uE)('<h3 class="heading-2">minMaxNormalizationAll()</h3><p class="article-text"> Untuk melakukan normalisasi terhadap array, dapat menggunakan fungsi <code class="text-sky-500">minMaxNormalizationAll()</code>. fungsi <code class="text-sky-500">minMaxNormalizationAll()</code> menerima parameter data berupa array yang akan dinormalisasi. </p><p class="article-text">Untuk menggunakan <code class="text-sky-500">minMaxNormalizationAll()</code>, berikut adalah contoh kode programnya.</p>',3),va=(0,r.uE)('<p class="article-text"> Fungsi <code class="text-sky-500">minMaxNormalizationAll()</code> juga dapat menerima parameter berupa object dengan melakukan transformasi menggunakan fungsi <code class="text-sky-500">transformArrayOfObjectsToArray()</code> terhadap object, sebelum dimasukkan sebagai parameter fungsi <code class="text-sky-500">minMaxNormalizationAll()</code>. </p><p class="article-text">Berikut adalah contoh pemanggilan fungsi <code class="text-sky-500">minMaxNormalizationAll()</code> dengan parameter berupa object.</p>',2),_a=(0,r.uE)('<h3 class="heading-2">inverseMinMaxNormalization()</h3><p class="article-text"> Untuk mengembalikan nilai yang sudah dinormalisasi menggunakan teknik min-max normalization menjadi nilai aslinya, fungsi <code>inverseMinMaxNormalization()</code> dapat digunakan dengan memberikan parameter berupa data yang akan diubah ke bentuk aslinya, dan fitur dari data tersebut. </p><table class="table"><thead><tr><th>Parameter</th><th>Deskripsi</th></tr></thead><tbody><tr><td>data</td><td class="text-start">Parameter untuk data yang akan diubah menjadi nilai aslinya</td></tr><tr><td>fitur</td><td class="text-start"> Parameter untuk fitur dari data. Parameter fitur yang dapat digunakan antara lain <code class="text-sky-500">suhu</code>, <code class="text-sky-500">kelembaban_udara</code>, <code class="text-sky-500">penyinaran_matahari</code>, dan <code class="text-sky-500">curah_hujan</code></td></tr></tbody></table><p class="article-text">Berikut adalah contoh kode untuk mengubah nilai yang sudah dinormalisasi ke nilai aslinya menggunakan fungsi <code class="text-sky-500">inverseMinMaxNormalization()</code>.</p>',4),wa=(0,r.uE)('<h3 class="heading-2">inverseMinMaxNormalizationAll()</h3><p class="article-text"> mengembalikan nilai yang sudah dinormalisasi menggunakan teknik min-max normalization menjadi nilai aslinya dengan input berupa Array, dapat menggunakan fungsi <code class="text-sky-500">inverseMinMaxNormalizationAll()</code>. Fungsi <code class="text-sky-500">inverseMinMaxNormalizationAll()</code> menerima parameter data berupa array yang nilainya akan dikembalikan ke bentuk aslinya. </p><p class="article-text">Untuk menggunakan <code class="text-sky-500">inverseMinMaxNormalizationAll()</code>, berikut adalah contoh kode programnya.</p>',3),ja=(0,r.uE)('<p class="article-text"> Fungsi <code class="text-sky-500">inverseMinMaxNormalizationAll()</code> juga dapat menerima parameter berupa object dengan melakukan transformasi menggunakan fungsi <code class="text-sky-500">transformObjectsToArray()</code> terhadap object, sebelum dimasukkan sebagai parameter fungsi <code class="text-sky-500">inverseMinMaxNormalizationAll()</code>. </p><p class="article-text">Berikut adalah contoh pemanggilan fungsi <code class="text-sky-500">minMaxNormalizationAll()</code> dengan parameter berupa object.</p>',2),Ta=(0,r.uE)('<h3 class="heading-2">predict()</h3><p class="article-text"> Untuk memanggil fungsi <code class="text-sky-500">predict()</code>, struktur data yang menjadi input, harus diubah menjadi tensor agar dapat diproses. Selanjutnya, fungsi <code class="text-sky-500">predict()</code> dipanggil setelah model berhasil di-<i>load</i>. Fungsi <code class="text-sky-500">predict()</code> menerima parameter data yang telah diubah menjadi tensor </p>',2),Aa=(0,r._)("h3",{class:"heading-2"},"Starter Template",-1),Ma=(0,r._)("p",{class:"article-text"},"Berikut adalah contoh lengkap kode untuk menggunakan API Cuaca.",-1);function Pa(a,e,t,n,s,i){const l=(0,r.up)("CodeCardComponent");return(0,r.wg)(),(0,r.iD)("section",la,[(0,r._)("div",oa,[da,ca,(0,r._)("div",null,[ua,ma,(0,r.Wm)(l,{codeTitle:"script.js",codeText:s.importModule,language:"javascript"},null,8,["codeText"])]),(0,r._)("div",null,[pa,(0,r.Wm)(l,{codeTitle:"script.js",codeText:s.fetchModel,language:"javascript"},null,8,["codeText"]),ga,(0,r.Wm)(l,{codeTitle:"script.js",codeText:s.timestep,language:"javascript"},null,8,["codeText"]),ha]),(0,r._)("div",null,[ka,(0,r.Wm)(l,{codeTitle:"script.js",codeText:s.formatDataArray,language:"javascript"},null,8,["codeText"]),xa,ba,(0,r.Wm)(l,{codeTitle:"script.js",codeText:s.formatDataObject,language:"javascript"},null,8,["codeText"])]),(0,r._)("div",null,[ya,(0,r.Wm)(l,{codeTitle:"script.js",codeText:s.minMaxNormalization,language:"javascript"},null,8,["codeText"])]),(0,r._)("div",null,[fa,(0,r.Wm)(l,{codeTitle:"script.js",codeText:s.minMaxNormalizationAllArray,language:"javascript"},null,8,["codeText"]),va,(0,r.Wm)(l,{codeTitle:"script.js",codeText:s.minMaxNormalizationAllObject,language:"javascript"},null,8,["codeText"])]),(0,r._)("div",null,[_a,(0,r.Wm)(l,{codeTitle:"script.js",codeText:s.inverseMinMaxNormalization,language:"javascript"},null,8,["codeText"])]),(0,r._)("div",null,[wa,(0,r.Wm)(l,{codeTitle:"script.js",codeText:s.inverseMinMaxNormalizationAllArray,language:"javascript"},null,8,["codeText"]),ja,(0,r.Wm)(l,{codeTitle:"script.js",codeText:s.inverseMinMaxNormalizationAllObject,language:"javascript"},null,8,["codeText"])]),(0,r._)("div",null,[Ta,(0,r.Wm)(l,{codeTitle:"script.js",codeText:s.predict,language:"javascript"},null,8,["codeText"])]),(0,r._)("div",null,[Aa,Ma,(0,r.Wm)(l,{codeTitle:"script.js",codeText:s.starterTemplate,language:"javascript"},null,8,["codeText"])])])])}var Ia=t(7139);const Na={class:"w-full rounded-xl shadow-lg border mb-10 overflow-hidden dark:border-slate-700"},za={class:"bg-slate-800"},Ca={class:"flex"},Sa={class:"font-bold text-sky-500 bg-dark text-lg px-6 pb-3 py-4"},Oa=(0,r._)("div",{class:"bg-dark"},[(0,r._)("h4",{class:"bg-slate-800 rounded-tl-xl h-full px-4 pb-3 py-4"})],-1),Wa=(0,r._)("i",{class:"bi bi-copy"},null,-1),Ua={key:0,class:"text-base"},Da={class:"text-white bg-slate-800"},La={class:"scrollbar-dark"},Ea={class:"text-base font-bold"};function Ba(a,e,t,n,s,i){const l=(0,r.up)("SyntaxHighlighterComponent");return(0,r.wg)(),(0,r.iD)("div",Na,[(0,r._)("div",za,[(0,r._)("div",Ca,[(0,r._)("code",Sa,(0,Ia.zw)(t.codeTitle),1),Oa,(0,r._)("h4",{onClick:e[0]||(e[0]=(...a)=>i.copy&&i.copy(...a)),class:"font-medium cursor-pointer text-lg text-secondary hover:text-white px-6 pb-3 py-4 rounded-tl-lg ms-auto transition duration-300",title:"Salin ke clipboard"},[Wa,s.copied?((0,r.wg)(),(0,r.iD)("span",Ua," Disalin ke clipboard")):(0,r.kq)("",!0)])])]),(0,r._)("div",Da,[(0,r._)("div",La,[(0,r._)("code",Ea,[(0,r.Wm)(l,{code:t.codeText,language:t.language},null,8,["code","language"])])])])])}const Ha={class:(0,Ia.C_)("px-6 overflow-x-auto bg-dark")};function qa(a,e,t,n,s,i){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("pre",Ha,[(0,r.Uk)("    "),(0,r._)("code",{class:(0,Ia.C_)("language-"+t.language)},"\n      "+(0,Ia.zw)(t.code)+"\n    ",3),(0,r.Uk)("\n    ")])])}var Fa=t(187),Ra=t.n(Fa),Za={props:{code:String,language:String},mounted(){Ra().highlightAll()}};const Ga=(0,T.Z)(Za,[["render",qa],["__scopeId","data-v-5fa8cc2d"]]);var Ja=Ga,Ka={name:"CodeCardComponent",props:["codeText","codeTitle","language"],components:{SyntaxHighlighterComponent:Ja},data(){return{copied:!1}},methods:{copy(){navigator.clipboard&&navigator.clipboard.writeText(this.codeText).then((()=>{this.copied=!0})).catch((a=>{this.copied=!1,console.error("Gagal menyalin teks: ",a)}))}}};const Va=(0,T.Z)(Ka,[["render",Ba]]);var Qa=Va,Ya={name:"WeatherView",components:{CodeCardComponent:Qa},data(){return{importModule:'\n  import * as greenAPI from "https://greenjs.netlify.app/api/green-api.js";',fetchModel:'\n  greenAPI.fetchModel()\n    .then((res) => {\n      greenAPI.loadModel(res.model).then((loadedModel) => {\n        const model = loadedModel;\n        console.log(model);\n      });\n    })\n    .catch((error) => {\n      console.error("Terjadi kesalahan:", error);\n    });',timestep:'\n  greenAPI.fetchModel(14) // Isi dengan timestep yang diinginkan (14 atau 30)\n    .then((res) => {\n      greenAPI.loadModel(res.model).then((loadedModel) => {\n        const model = loadedModel;\n        console.log(model);\n      });\n    })\n    .catch((error) => {\n      console.error("Terjadi kesalahan:", error);\n    });',formatDataArray:"\n  let data = [\n    // Format data :\n    // [suhu, kelembaban_udara, penyinaran_matahari, curah_hujan]\n    [23, 65, 12, 10],\n    [24, 75, 11, 15],\n    // ...\n    // Tambahkan sesuai dengan jumlah timestep yang digunakan\n  ];",formatDataObject:"\n  let data = [\n    { suhu: 23, kelembaban_udara: 24, penyinaran_matahari: 4, curah_hujan: 10 },\n    { suhu: 24, kelembaban_udara: 75, penyinaran_matahari: 4, curah_hujan: 9 },\n    // ...\n    // Tambahkan sesuai dengan jumlah timestep yang digunakan\n  ];\n\n  data = greenAPI.transformArrayOfObjectsToArray(data);\n  console.log(data);",minMaxNormalization:'\n  let suhu = 29;\n  let normalisasiSuhu = greenAPI.minMaxNormalization(suhu, "suhu");\n\n  console.log(normalisasiSuhu);',minMaxNormalizationAllArray:"\n  let data = [\n    // [suhu, kelembaban_udara, penyinaran_matahari, curah_hujan]\n    [30, 80, 7, 10],\n    [32, 75, 16, 9],\n    // ...\n  ];\n\n  data = greenAPI.minMaxNormalizationAll(data);\n  console.log(data);",minMaxNormalizationAllObject:"\n  let data = [\n    { suhu: 23, kelembaban_udara: 24, penyinaran_matahari: 4, curah_hujan: 10 },\n    { suhu: 24, kelembaban_udara: 75, penyinaran_matahari: 4, curah_hujan: 9 },\n    // ...\n  ];\n\n  data = greenAPI.transformArrayOfObjectsToArray(data);\n  data = greenAPI.minMaxNormalizationAll(data);\n\n  console.log(data);",predict:"\n  const inputTensor = tf.tensor3d([data]);\n  let predictions = model.predict(inputTensor);\n  predictions = predictions.dataSync();\n  console.log(predictions);",inverseMinMaxNormalization:'\n  let normalisasiSuhu = 0.766;\n  let suhu = greenAPI.inverseMinMaxNormalization(normalisasiSuhu, "suhu");\n\n  console.log(suhu);',inverseMinMaxNormalizationAllArray:"\n  let data = [0.766, 0.523, 0.443, 0.01]; // [suhu, kelembaban_udara, penyinaran_matahari, curah_hujan]\n\n  data = greenAPI.inverseMinMaxNormalizationAll(data);\n  console.log(data);",inverseMinMaxNormalizationAllObject:"\n  let dataNormalisasi = {\n    suhu: 0.766,\n    kelembaban_udara: 0.523,\n    penyinaran_matahari: 0.443,\n    curah_hujan: 0.01\n  };\n\n  let data = greenAPI.transformObjectsToArray(dataNormalisasi);\n  data = greenAPI.inverseMinMaxNormalizationAll(data);\n\n  console.log(data);",starterTemplate:'\n  import * as greenAPI from "https://greenjs.netlify.app/api/green-api.js";\n\n  let data = [\n    { suhu: 23, kelembaban_udara: 24, penyinaran_matahari: 4, curah_hujan: 10 },\n    { suhu: 24, kelembaban_udara: 75, penyinaran_matahari: 4, curah_hujan: 9 },\n    // ...\n  ];\n\n  data = greenAPI.transformArrayOfObjectsToArray(data);\n  data = greenAPI.minMaxNormalizationAll(data);\n\n  greenAPI\n    .fetchModel(14) // Isi dengan timestep yang diinginkan (14 atau 30)\n    .then((res) => {\n      greenAPI.loadModel(res.model).then((loadedModel) => {\n        const model = loadedModel;\n        const inputTensor = tf.tensor3d([data]);\n        let predictions = model.predict(inputTensor);\n\n        predictions = predictions.dataSync();\n        predictions = greenAPI.inverseMinMaxNormalizationAll(predictions);\n\n        console.log(predictions);\n      });\n    })\n    .catch((error) => {\n      console.error("Terjadi kesalahan:", error);\n    });'}}};const Xa=(0,T.Z)(Ya,[["render",Pa]]);var $a=Xa;const ae={class:"pt-36 dark:bg-dark pb-20"},ee={class:"container"},te=(0,r._)("h2",{class:"heading-1"},"API Tanaman",-1),ne=(0,r._)("h3",{class:"heading-2"},"Import Module",-1),re=(0,r._)("p",{class:"article-text"},"Berikut adalah contoh kode untuk mengimpor module GreenAPI.",-1),se=(0,r._)("h3",{class:"heading-2"},"HTTP Request",-1),ie=(0,r._)("p",{class:"article-text"}," API Tanaman dapat memberikan rekomendasi tanaman berdasarkan hasil rekomendasi menggunakan Algoritma K-Nearest Neighbor. Fitur-fitur yang digunakan sebagai input untuk model merupakan berupa rata-rata suhu (°C), rata-rata kelembaban udara (%), pH tanah (pH), dan rata-rata curah hujan (mm). ",-1),le=(0,r._)("p",{class:"article-text"},"Berikut adalah contoh URL untuk melakukan HTTP request ke API Tanaman :",-1),oe=(0,r.uE)('<p class="article-text"> Ketika melakukan HTTP Request ke API ini, diperlukan query berupa object <code class="text-sky-500">data</code> yang berisi properti <code class="text-sky-500">suhu</code>, <code class="text-sky-500">kelembaban_udara</code>, <code class="text-sky-500">ph_tanah</code>, dan <code class="text-sky-500">curah_hujan</code></p>',1),de=(0,r.uE)('<h3 class="heading-2">Parameter Query</h3><p class="article-text"> Parameter query <code class="text-sky-500">data</code> adalah sebuah object yang harus disertakan pada saat melakukan HTTP Request ke API. Object <code class="text-sky-500">data</code> yang disertakan merupakan object yang telah dikonversi menjadi sebuah String JSON </p><p class="article-text">Berikut adalah contoh kode untuk membuat parameter query sebelum melakukan HTTP Request ke API.</p>',3),ce=(0,r.uE)('<p class="article-text"> Ketika melakukan HTTP Request ke API ini, diperlukan query berupa object yang berisi properti <code class="text-sky-500">suhu</code>, <code class="text-sky-500">kelembaban_udara</code>, <code class="text-sky-500">ph_tanah</code>, dan <code class="text-sky-500">curah_hujan</code>. </p>',1),ue=(0,r.uE)('<h3 class="heading-2">Starter Template</h3><p class="article-text"> HTTP Request dapat dilakukan dengan menggunakan <code class="text-sky-500">fetch()</code> yang mengarah ke alamat URL dari API dengan mengirimkan object <code class="text-sky-500">data</code> sebagai parameter query. </p><p class="article-text">Berikut adalah contoh untuk melakukan HTTP Request ke API Tanaman.</p>',3);function me(a,e,t,n,s,i){const l=(0,r.up)("CodeCardComponent");return(0,r.wg)(),(0,r.iD)("section",ae,[(0,r._)("div",ee,[te,(0,r._)("div",null,[ne,re,(0,r.Wm)(l,{codeTitle:"script.js",codeText:s.importModule,language:"javascript"},null,8,["codeText"])]),(0,r._)("div",null,[se,ie,le,(0,r.Wm)(l,{codeTitle:"script.js",codeText:s.codeHTTPRequest,language:"javascript"},null,8,["codeText"]),oe]),(0,r._)("div",null,[de,(0,r.Wm)(l,{codeTitle:"script.js",codeText:s.codeParameterQuery,language:"javascript"},null,8,["codeText"]),ce]),(0,r._)("div",null,[ue,(0,r.Wm)(l,{codeTitle:"script.js",codeText:s.codeJS,language:"javascript"},null,8,["codeText"])])])])}var pe={name:"PlantView",components:{CodeCardComponent:Qa},data(){return{importModule:'\n  import * as greenAPI from "https://greenjs.netlify.app/api/green-api.js";',codeHTTPRequest:"\n  const url = greenAPI.getKNNModel(data)",codeJS:'\n  let data = {\n    suhu: 30,\n    kelembaban_udara: 90,\n    ph_tanah: 30,\n    curah_hujan: 88,\n  };\n\n  data = encodeURIComponent(JSON.stringify(data));\n\n  const url = greenAPI.getKNNModel(data);\n\n  fetch(url)\n    .then((response) => response.json())\n    .then((responseData) => {\n      console.log(responseData);\n    })\n    .catch((error) => {\n      console.error("Terjadi kesalahan:", error);\n    });',codeParameterQuery:"\n  let data = {\n    suhu: 30,\n    kelembaban_udara: 90,\n    ph_tanah: 30,\n    curah_hujan: 88,\n  };\n\n  data = encodeURIComponent(JSON.stringify(data));\n\n  const url = greenAPI.getKNNModel(data)"}}};const ge=(0,T.Z)(pe,[["render",me]]);var he=ge;const ke=[{path:"/",name:"Home",component:ia},{path:"/weather",name:"Weather",component:$a},{path:"/plant",name:"Plant",component:he}],xe=(0,R.p7)({history:(0,R.PO)(),routes:ke,scrollBehavior(){return{left:0,top:0}}});var be=xe;const ye=(0,n.ri)(F);ye.use(be),ye.mount("#app")},5351:function(a,e,t){a.exports=t.p+"img/hero.61755544.svg"}},e={};function t(n){var r=e[n];if(void 0!==r)return r.exports;var s=e[n]={exports:{}};return a[n].call(s.exports,s,s.exports,t),s.exports}t.m=a,function(){var a=[];t.O=function(e,n,r,s){if(!n){var i=1/0;for(c=0;c<a.length;c++){n=a[c][0],r=a[c][1],s=a[c][2];for(var l=!0,o=0;o<n.length;o++)(!1&s||i>=s)&&Object.keys(t.O).every((function(a){return t.O[a](n[o])}))?n.splice(o--,1):(l=!1,s<i&&(i=s));if(l){a.splice(c--,1);var d=r();void 0!==d&&(e=d)}}return e}s=s||0;for(var c=a.length;c>0&&a[c-1][2]>s;c--)a[c]=a[c-1];a[c]=[n,r,s]}}(),function(){t.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return t.d(e,{a:e}),e}}(),function(){t.d=function(a,e){for(var n in e)t.o(e,n)&&!t.o(a,n)&&Object.defineProperty(a,n,{enumerable:!0,get:e[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){t.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){t.p="/"}(),function(){var a={143:0};t.O.j=function(e){return 0===a[e]};var e=function(e,n){var r,s,i=n[0],l=n[1],o=n[2],d=0;if(i.some((function(e){return 0!==a[e]}))){for(r in l)t.o(l,r)&&(t.m[r]=l[r]);if(o)var c=o(t)}for(e&&e(n);d<i.length;d++)s=i[d],t.o(a,s)&&a[s]&&a[s][0](),a[s]=0;return t.O(c)},n=self["webpackChunkgreen_api"]=self["webpackChunkgreen_api"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(216)}));n=t.O(n)})();
//# sourceMappingURL=app.a5eccb1e.js.map