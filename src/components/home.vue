<template>
  <main class="bg-[#f6f6f6]">
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

      <div class="text-gray-600 p-4 sm:p-6  sm:text-left">
        <h1 class="text-lg sm:text-xl font-medium">
          The Danish Customs Agency
        </h1>
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

       <div class="p-7 sm:px-7">
  <div class="bg-white  shadow-sm border">
    <div
      class="flex flex-row  overflow-x-auto  lg:grid lg:grid-cols-5 lg:overflow-visible"
    >
      <div
        v-for="item in boxes"
        :key="item.title"
        class="group flex-shrink-0 min-w-[16rem] sm:min-w-[18rem] lg:min-w-0 flex flex-col justify-start items-start p-4 rounded-lg transition"
      >
        <img
          :src="item.icon"
          alt=""
          class="w-[10rem] h-auto mb-4"
        />
        <a
          :href="item.link"
          class="font-semibold text-midnight underline underline-offset-4 hover:decoration-[3px] group-hover:decoration-[3px] transition-all duration-150"
        >
          {{ item.title }}
        </a>
      </div>
    </div>
  </div>
</div>


    <section class="relative px-4 sm:px-7">
      <div
        class="h-[15rem] sm:h-[22rem] bg-cover bg-center rounded-md"
        style="background-image: url('/custom.png');"
      ></div>

      <div
        class="lg:absolute md:absolute relative left-1/2 transform -translate-x-1/2 -bottom-16 sm:-bottom-20 bg-white shadow-lg rounded-sm w-[90%] md:w-[70%] p-6 sm:p-8"
      >
        <div class="h-2 w-10 top-0 absolute bg-midnight mb-3"></div>
        <h1 class="text-midnight font-bold text-2xl sm:text-4xl mb-2">
          Customs for individuals and businesses
        </h1>
        <p class="text-midnight text-base sm:text-xl leading-relaxed">
          The task of the Danish Customs Agency is to make it easy for
          individuals and businesses to pay their customs duties. We are also
          responsible for protecting Danish society against importation of
          illegal goods.
        </p>
      </div>
    </section>

   <section class="p-4 sm:p-7 mt-32">
  <div class="bg-white  max-w-7xl mx-auto">
 
    <div class="px-6 py-4 text-start">
      <h2 class="text-midnight font-black text-2xl md:text-3xl">About us</h2>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-gray-200 divide-y sm:divide-y-0 sm:divide-x"
    >
      <div class="relative p-5 group">
        <div class="absolute top-0 left-5 h-2 w-10 bg-midnight"></div>
        <h3 class="text-midnight font-black text-xl md:text-2xl mb-2 mt-3">
          What we do
        </h3>
        <router-link to="/">
            <p
          class="text-midnight flex items-center gap-2 cursor-pointer hover:underline group-hover:underline transition-all duration-200"
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
          About our task
        </p>
        </router-link>
      </div>
      <div class="relative p-5 group">
        <div class="absolute top-0 left-5 h-2 w-10 bg-midnight"></div>
        <h3 class="text-midnight font-black text-xl md:text-2xl mb-2 mt-3">
          How we are organised
        </h3>
        <router-link to="/">
            <p
          class="text-midnight flex items-center gap-2 cursor-pointer hover:underline group-hover:underline transition-all duration-200"
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
          Organisational structure
        </p>
        </router-link>
      </div>
      <div class="relative p-5 group">
        <div class="absolute top-0 left-5 h-2 w-10 bg-midnight"></div>
        <h3 class="text-midnight font-black text-xl md:text-2xl mb-2 mt-3">
          How to reach us
        </h3>
        <router-link to="/">
            <p
          class="text-midnight flex items-center gap-2 cursor-pointer hover:underline group-hover:underline transition-all duration-200"
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
          Get in touch
        </p>
        </router-link>
      </div>
      <div class="relative p-5 group">
        <div class="absolute top-0 left-5 h-2 w-10 bg-midnight"></div>
        <h3 class="text-midnight font-black text-xl md:text-2xl mb-2 mt-3">
         Where to find us
        </h3>
        <router-link to="/">
            <p
          class="text-midnight flex items-center gap-2 cursor-pointer hover:underline group-hover:underline transition-all duration-200"
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
         Opening hours and offices
        </p>
        </router-link>
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
  </main>
</template>

<script setup>
import { ref } from "vue";

const showSearch = ref(false);
function toggleSearch() {
  showSearch.value = !showSearch.value;
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
