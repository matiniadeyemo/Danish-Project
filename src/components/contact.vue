<template>
    <header class="bg-white shadow-md flex flex-col inset-x-0 top-0 z-50">
      <nav class="bg-midnight border-b-[5px] border-yellow-400">
        <div
          class="flex flex-row justify-between items-center md:px-4 px-3 sm:px-8 py-2 max-w-7xl mx-auto"
        >
        <div class="flex flex-row text-white">
          <img src="/logo.png" alt="logo" class="w-[8rem] lg:flex hidden" />
          <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve"  fill="currentColor"
        style="enable-background:new 0 0 24.3 22.6" viewBox="0 0 24.3 22.6" class="lg:hidden w-[2rem]"><path d="M3.4 19.1h17.5v1.2H3.4zM3.4 21.3h17.5v1.2H3.4zM7.1 18h1.4c.1-1 .5-2 .3-2.7-.3-.9-1.4-1.8-2.1-2.5-.6-.6-.9-1.1-.9-1.9 0-.8.7-1.6 1.7-1.6 1.1 0 1.8 1.1 3.2 1.1V9.1C9.8 9 9 8 7.4 8c-.9 0-1.6.3-2.2.9-.5.5-.8 1.3-.8 2.1 0 1.2.6 1.9 1.2 2.7.7.8 1.5 1.9 1.5 4.3M21.4 9.9c.6 0 1.6.4 1.6 1.6 0 1-.8 1.5-1.1 1.8-.8.8-1.7 1.5-2.1 2.2-.4.7-.1 1.8-.1 2.4H21c.1-1.7.9-2.6 1.7-3.5.8-.8 1.7-1.6 1.7-3 0-2.1-1.7-2.9-2.9-2.9-.4 0-.8.1-1.2.2.3.4.4.8.5 1.2.1.1.3 0 .6 0M13.7 10.3c1.4 0 2.1-1.1 3.2-1.1 1 0 1.7.8 1.7 1.6s-.3 1.3-.9 1.9c-.7.7-1.8 1.7-2.1 2.5-.3.8.2 1.7.3 2.7h1.4c0-2.5.8-3.6 1.5-4.5.6-.7 1.2-1.5 1.2-2.7 0-.8-.3-1.5-.8-2.1-.7-.3-1.5-.6-2.3-.6-1.6 0-2.4 1-3.2 1.1v1.2zM11.5 8.1v3.7c0 2.4-.6 3-.6 3.8 0 1 .4 1.3.6 2.4h1.3c.2-1.1.6-1.4.6-2.4 0-.8-.6-1.4-.6-3.8V8.1h-1.3zM11.5 3.9c-.7.2-1.2.9-1.2 1.7 0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8c0-.8-.5-1.5-1.2-1.7V2.5H14V1.4h-1.3V0h-1.2v1.4h-1.3v1.2h1.3v1.3zm.6 1c.4 0 .7.3.7.7 0 .4-.3.7-.7.7-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7" class="logo-crown_svg__st3"></path><path d="M3.4 18h1.3c0-.6.3-1.8-.1-2.4-.4-.7-1.3-1.4-2.1-2.2-.3-.3-1.1-.9-1.1-1.8 0-1.3.9-1.6 1.6-1.6.2 0 .5 0 .7.1.1-.4.3-.9.5-1.2-.5-.2-.9-.3-1.3-.3-1.2.1-2.9.9-2.9 3 0 1.4.9 2.2 1.7 3 .8.9 1.6 1.7 1.7 3.4" class="logo-crown_svg__st3">
        </path></svg>
        </div>
          
          <div class="flex">
            <button
              class="lg:hidden text-sm text-white flex flex-col md:flex-row items-center justify-center align-center h-24px gap-2 p-3 transition-all duration-300 border border-[2px] border-[#14143c] hover:border-[#72728a] hover:border-[2px]"
              @click="toggleMenu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                class="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"
                  clip-rule="evenodd"
                />
              </svg>
              <p class="text-sm">Menu</p>
            </button>
            
             <button class="text-white text-sm flex flex-col md:flex-row items-center justify-center align-center h-24px gap-2 p-3 transition-all duration-300 border border-[2px] border-[#14143c] hover:border-[#72728a] hover:border-[2px]"  @click="toggleSearch()">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                class="w-5 h-5"
              >
                <path 
                  fill-rule="evenodd" 
                  d="M10 2a8 8 0 015.293 13.707l4 4a1 1 0 01-1.414 1.414l-4-4A8 8 0 1110 2zm0 2a6 6 0 100 12 6 6 0 000-12z" 
                  clip-rule="evenodd" 
                />
              </svg>
              <p class="text-sm">Search</p>  
            </button>
          </div>
        </div>
      </nav>

      <div class="flex flex-col lg:justify-start sm:flex-row flex-wrap items-start sm:items-center  sm:justify-start gap-4 sm:gap-6 text-midnight p-4 sm:p-6 w-full max-w-screen-lg mx-auto"
>
  <router-link to="/">
    <h1
      class="text-base sm:text-lg underline-offset-4 hover:underline text-center sm:text-left"
    >
      The Danish Customs Agency
    </h1>
  </router-link>

  <router-link
    to="/"
    class="flex text-base sm:text-lg underline-offset-4 items-center justify-center sm:justify-start gap-2 hover:underline underline-offset-2 group"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8 12"
      fill="none"
      class="w-3 h-3 stroke-[#14143c] stroke-[2.5] transition-transform duration-200"
    >
      <path
        d="M1 1l5 5-5 5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <p>About Us</p>
  </router-link>

  <router-link
    to="/"
    class="flex text-base sm:text-lg text-gray-600 underline-offset-4 items-center justify-center sm:justify-start gap-2 hover:underline underline-offset-2 group"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8 12"
      fill="none"
      class="w-3 h-3 stroke-[#14143c] stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1"
    >
      <path
        d="M1 1l5 5-5 5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <p>Contact Us</p>
  </router-link>
   </div>

    </header>
    <div
      v-if="showSearch"
      class="fixed inset-0 flex justify-center items-center bg-black/40 z-[100]"
    >
      <div
        class="bg-white w-[90%] sm:w-[30rem] h-[20rem] rounded-lg relative shadow-lg flex flex-col justify-center items-center"
      >
        <button
          @click="toggleSearch"
          class="absolute top-3 right-3 bg-midnight text-white w-[2.5rem] h-[2.5rem] flex justify-center items-center rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
            class="w-4 h-4"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <h1 class="text-gray-800 text-lg font-semibold mt-8 text-center">
          Search functionality placeholder
        </h1>
      </div>
    </div>
     <transition name="slide-fade">
      <div
        v-if="showMenu"
        class="bg-midnight text-white flex flex-col gap-4 py-4 px-6 lg:hidden"
      >
        <router-link to="/" class="hover:underline">Home</router-link>
        <router-link to="/about" class="hover:underline">About Us</router-link>
        <router-link to="/contact" class="hover:underline">Contact Us</router-link>

        <div class="border-t border-gray-600 my-3"></div>

        <div class="flex flex-col gap-2">
          <p class="text-sm font-bold text-yellow-400">Languages</p>
          <router-link to="/" class="hover:underline">Dansk</router-link>
          <router-link to="/" class="hover:underline">English</router-link>
        </div>
      </div>
    </transition>
    <section class="lg:p-7 p-0 mt-6 sm:px-7 flex  gap-[2rem] lg:gap-0 flex-col lg:flex-row justify-between md:gap-[3rem]">
        <div class="bg-white shadow-sm border flex flex-col gap-2 h-[25rem] lg:w-[58rem] lg:h-[20rem]">
            <div class="flex items-center gap-6 p-3 text-center pl-5">
            <li class="list-none flex items-center">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                class="w-5 h-5 text-gray-700"
                aria-hidden="true"
                >
                <path
                    d="M20.068 21.608c-.66 3.738-1.539 6.377-1.979 7.257-1.319.22-2.639.22-3.738.22-.66-1.1-1.539-3.738-2.199-7.257v-.22h7.917zM9.293 18.969l-5.938.22c-.22-1.319-.22-1.979-.22-3.079s.22-2.419.22-3.079h5.938v.22c0 .88-.22 1.979-.22 3.079 0 .66 0 1.539.22 2.639zm2.859-8.577c.66-3.299 1.759-6.157 2.199-7.037 1.1-.22 2.199-.22 3.299 0 .66.88 1.539 3.738 2.199 7.037h-7.697zm-1.32-6.157c-.44 2.199-1.1 4.178-1.319 6.157H4.455a13.35 13.35 0 0 1 6.377-6.157zM9.513 21.608c.44 2.199.88 4.398 1.539 6.157v.22l-.22-.22c-2.639-.88-5.058-3.299-6.377-5.938v-.22h5.058zm10.995-5.498c0 .88 0 1.759-.22 2.859v.22h-8.576v-.22c0-1.1-.22-1.979-.22-2.859 0-1.1 0-2.419.22-3.079v-.22h8.576v.22c.22.88.22 2.199.22 3.079zm1.979-5.718c-.22-1.979-.88-3.958-1.539-5.938v-.22l.22.22a13.35 13.35 0 0 1 6.377 6.157h-5.058zm-1.099 17.593c.44-1.979.88-4.178 1.319-6.377h5.278v.22c-1.759 2.639-3.958 5.058-6.597 6.157zm1.539-14.954 5.718-.22c.22 1.1.44 2.199.44 3.299 0 .88 0 1.759-.22 2.859h-5.718v-.22c0-1.1.22-1.979.22-2.859-.44-.66-.44-1.979-.44-2.859zM16.11.496C7.534.496.497 7.533.497 16.109S7.534 31.722 16.11 31.722s15.613-7.037 15.613-15.613C31.503 7.533 24.686.496 16.11.496z"
                ></path>
                </svg>
            </li>

            <li class="list-none flex items-center gap-2">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 32 32"
                class="w-5 h-5"
                aria-hidden="true"
                >
                <path d="M12.483 29.5.072 17.306l3.919-3.919 8.056 7.839L27.507 2.5l4.355 3.484z"></path>
                </svg>
                <p class="font-bold text-lg leading-none text-gray-800">English</p>
            </li>


            <li class="list-none border-l border-gray-300 pl-4">
                <router-link
                to="/"
                class="flex items-center underline text-midnight hover:decoration-[3px] underline-offset-2"
                >
                Dansk
                </router-link>
            </li>
            </div>

            <div class="border-t border-gray-200 divide-y sm:divide-y-0 sm:divide-x">
                <article class="relative p-3 pl-5 flex flex-col gap-4">
                <div class="absolute top-0 left-5 h-2 w-10 bg-midnight "></div>
                    <h1 class="text-3xl font-extrabold text-midnidnight mt-[1rem]">Contact Us</h1>
                    <p class="lg:text-[1.2rem] text-base">Call the Customs Agency (Toldstyrelsen) on +45 72 22 12 12 if you have any customs-related questions. Outside our regular opening hours you can 
                        <a rel="noopener" target="_blank" data-anchor=" ">write to us</a>,
                         and we will get back to you as soon as possible.</p>
                    <p class="lg:text-[1.2rem] text-base">If you experience faults in the customs systems, you can contact the Service Desk on telephone +45 70 15 73 01.</p>
                </article>
            </div>
        </div>
        <div class="bg-white shadow-sm border flex flex-col gap-2 w-full lg:w-[21rem] h-[13rem] relative">
            <div class="flex flex-col gap-3 p-5">
            <span class="text-midnight text-xl font-bold">Mere om About us</span>
            <div class="flex flex-col gap-[1.3rem]">
            <router-link to="/" class="flex items-center underline text-midnight hover:decoration-[3px] underline-offset-4">Our Task</router-link>
            <router-link to="/" class="flex items-center underline text-midnight hover:decoration-[3px] underline-offset-4">Organisational structure</router-link>
            <div class="">
                <div class="absolute top-[10.3rem] left-0 right-0 h-5 w-2 bg-midnight "></div>
                <h1 class="text-sm text-midnidnight mt-[1rem]">Contact Us</h1>
            </div>
            </div>
            </div>
        </div>
    </section>
    <footer
      class="bg-midnight mt-20 text-white py-[2rem]  border-t-[5px] border-[#ffb81c]"
    >
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex flex-col md:gap-[4rem] gap-[2rem] mb-[2rem] md:flex-row md:justify-start  md:text-left">
       <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve"  fill="currentColor"
        style="enable-background:new 0 0 24.3 22.6" viewBox="0 0 24.3 22.6" class="md:w-[4rem] w-[3rem]"><path d="M3.4 19.1h17.5v1.2H3.4zM3.4 21.3h17.5v1.2H3.4zM7.1 18h1.4c.1-1 .5-2 .3-2.7-.3-.9-1.4-1.8-2.1-2.5-.6-.6-.9-1.1-.9-1.9 0-.8.7-1.6 1.7-1.6 1.1 0 1.8 1.1 3.2 1.1V9.1C9.8 9 9 8 7.4 8c-.9 0-1.6.3-2.2.9-.5.5-.8 1.3-.8 2.1 0 1.2.6 1.9 1.2 2.7.7.8 1.5 1.9 1.5 4.3M21.4 9.9c.6 0 1.6.4 1.6 1.6 0 1-.8 1.5-1.1 1.8-.8.8-1.7 1.5-2.1 2.2-.4.7-.1 1.8-.1 2.4H21c.1-1.7.9-2.6 1.7-3.5.8-.8 1.7-1.6 1.7-3 0-2.1-1.7-2.9-2.9-2.9-.4 0-.8.1-1.2.2.3.4.4.8.5 1.2.1.1.3 0 .6 0M13.7 10.3c1.4 0 2.1-1.1 3.2-1.1 1 0 1.7.8 1.7 1.6s-.3 1.3-.9 1.9c-.7.7-1.8 1.7-2.1 2.5-.3.8.2 1.7.3 2.7h1.4c0-2.5.8-3.6 1.5-4.5.6-.7 1.2-1.5 1.2-2.7 0-.8-.3-1.5-.8-2.1-.7-.3-1.5-.6-2.3-.6-1.6 0-2.4 1-3.2 1.1v1.2zM11.5 8.1v3.7c0 2.4-.6 3-.6 3.8 0 1 .4 1.3.6 2.4h1.3c.2-1.1.6-1.4.6-2.4 0-.8-.6-1.4-.6-3.8V8.1h-1.3zM11.5 3.9c-.7.2-1.2.9-1.2 1.7 0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8c0-.8-.5-1.5-1.2-1.7V2.5H14V1.4h-1.3V0h-1.2v1.4h-1.3v1.2h1.3v1.3zm.6 1c.4 0 .7.3.7.7 0 .4-.3.7-.7.7-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7" class="logo-crown_svg__st3"></path><path d="M3.4 18h1.3c0-.6.3-1.8-.1-2.4-.4-.7-1.3-1.4-2.1-2.2-.3-.3-1.1-.9-1.1-1.8 0-1.3.9-1.6 1.6-1.6.2 0 .5 0 .7.1.1-.4.3-.9.5-1.2-.5-.2-.9-.3-1.3-.3-1.2.1-2.9.9-2.9 3 0 1.4.9 2.2 1.7 3 .8.9 1.6 1.7 1.7 3.4" class="logo-crown_svg__st3">
        </path></svg>
        <p class="text-2xl  md:text-xl  font-normal text-white ">
          We facilitate smooth trade across our exterior borders while ensuring effective customs control
        </p>
      </div>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm md:text-base"
        >
          <div>
            <h1 class="font-semibold mb-3 text-xl">Contact</h1>
            <router-link  to="/contact" class="text-white flex items-center gap-2 hover:underline underline-offset-2 group">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 8 12"
                fill="none"
                class="w-3 h-3 stroke-white stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1"
              >
                <path
                  d="M1 1l5 5-5 5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <a>Contact us</a>
            </router-link>
          </div>
          <div>
            <h1 class="font-semibold mb-3 text-xl">Organisation</h1>
            <router-link  to="/" class="text-white flex items-center gap-2 hover:underline underline-offset-2 group">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 8 12"
                fill="none"
                class="w-3 h-3 stroke-white stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1"
              >
                <path
                  d="M1 1l5 5-5 5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <a>The Danish Ministry of Taxation</a>
            </router-link>
          </div>
          <div>
            <h1 class="font-semibold mb-3 text-xl">Help & Resources</h1>
            <router-link  to="/" class="text-white flex items-center gap-2 hover:underline underline-offset-2 group">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 8 12"
                fill="none"
                class="w-3 h-3 stroke-white stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1"
              >
                <path
                  d="M1 1l5 5-5 5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <a>Change current cookie setting</a>
            </router-link>
          </div>
          <div>
            <h1 class="font-semibold mb-3 text-xl">Languages</h1>
            <router-link  to="/" class="text-white flex items-center gap-2 hover:underline underline-offset-2 group">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 8 12"
                fill="none"
                class="w-3 h-3 stroke-white stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1"
              >
                <path
                  d="M1 1l5 5-5 5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <a>Dansk</a>
            </router-link>
          </div>
        </div>
      </div>
    </footer>
</template>
<script setup>
import { ref } from "vue";
const showMenu = ref(false);
const showSearch = ref(false);
function toggleSearch() {
  showSearch.value = !showSearch.value;
}
function toggleMenu() {
  showMenu.value = !showMenu.value;
}
const boxes = [
  { title: "VAT refunds", icon: "/refund.svg", link: "#" },
  { title: "Travel", icon: "/travel.svg", link: "#" },
  { title: "Online shopping", icon: "/shopping.svg", link: "#" },
  { title: "Gifts", icon: "/gift.svg", link: "#" },
  { title: "If you move to Denmark", icon: "/personal.svg", link: "#" },
];

const aboutItems = [
  { title: "What we do", link: "About our task" },
  { title: "How we are organised", link: "Organisational structure" },
  { title: "How to reach us", link: "Get in touch" },
  { title: "Where to find us", link: "Opening hours and offices" },
];
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translatex(-100px);
}
</style>