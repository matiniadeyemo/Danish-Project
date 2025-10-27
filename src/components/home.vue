<template>
  <main class="bg-[#f6f6f6]">
    <header class="bg-white shadow-md flex flex-col inset-x-0 top-0 z-50">
       <nav class="bg-midnight border-b-[5px] border-yellow-400 overflow-hidden">
        <div
          class="flex flex-row justify-between  items-center md:px-4 px-3 sm:px-8 lg:h-[5rem] h-[50px] py-2 max-w-7xl mx-auto"
        >
        <div class="flex flex-row text-white">
          <img src="/logo.png" alt="logo" class="w-[8rem] lg:flex hidden" />
          <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve"  fill="currentColor"
        style="enable-background:new 0 0 24.3 22.6" viewBox="0 0 24.3 22.6" class="lg:hidden w-[2rem]"><path d="M3.4 19.1h17.5v1.2H3.4zM3.4 21.3h17.5v1.2H3.4zM7.1 18h1.4c.1-1 .5-2 .3-2.7-.3-.9-1.4-1.8-2.1-2.5-.6-.6-.9-1.1-.9-1.9 0-.8.7-1.6 1.7-1.6 1.1 0 1.8 1.1 3.2 1.1V9.1C9.8 9 9 8 7.4 8c-.9 0-1.6.3-2.2.9-.5.5-.8 1.3-.8 2.1 0 1.2.6 1.9 1.2 2.7.7.8 1.5 1.9 1.5 4.3M21.4 9.9c.6 0 1.6.4 1.6 1.6 0 1-.8 1.5-1.1 1.8-.8.8-1.7 1.5-2.1 2.2-.4.7-.1 1.8-.1 2.4H21c.1-1.7.9-2.6 1.7-3.5.8-.8 1.7-1.6 1.7-3 0-2.1-1.7-2.9-2.9-2.9-.4 0-.8.1-1.2.2.3.4.4.8.5 1.2.1.1.3 0 .6 0M13.7 10.3c1.4 0 2.1-1.1 3.2-1.1 1 0 1.7.8 1.7 1.6s-.3 1.3-.9 1.9c-.7.7-1.8 1.7-2.1 2.5-.3.8.2 1.7.3 2.7h1.4c0-2.5.8-3.6 1.5-4.5.6-.7 1.2-1.5 1.2-2.7 0-.8-.3-1.5-.8-2.1-.7-.3-1.5-.6-2.3-.6-1.6 0-2.4 1-3.2 1.1v1.2zM11.5 8.1v3.7c0 2.4-.6 3-.6 3.8 0 1 .4 1.3.6 2.4h1.3c.2-1.1.6-1.4.6-2.4 0-.8-.6-1.4-.6-3.8V8.1h-1.3zM11.5 3.9c-.7.2-1.2.9-1.2 1.7 0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8c0-.8-.5-1.5-1.2-1.7V2.5H14V1.4h-1.3V0h-1.2v1.4h-1.3v1.2h1.3v1.3zm.6 1c.4 0 .7.3.7.7 0 .4-.3.7-.7.7-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7" class="logo-crown_svg__st3"></path><path d="M3.4 18h1.3c0-.6.3-1.8-.1-2.4-.4-.7-1.3-1.4-2.1-2.2-.3-.3-1.1-.9-1.1-1.8 0-1.3.9-1.6 1.6-1.6.2 0 .5 0 .7.1.1-.4.3-.9.5-1.2-.5-.2-.9-.3-1.3-.3-1.2.1-2.9.9-2.9 3 0 1.4.9 2.2 1.7 3 .8.9 1.6 1.7 1.7 3.4" class="logo-crown_svg__st3">
        </path></svg>
        </div>
          
          <div class="flex">
            <div class="lg:hidden border-l border-gray-500 flex items-center h-[2rem] mt-5"></div>
            <button
              class="lg:hidden text-sm text-white flex flex-col md:flex-row items-center justify-center align-center  gap-2 p-3 transition-all duration-300 border border-[2px] border-[#14143c] hover:border-[#72728a] hover:border-[2px]
              " @click="toggleMenu"
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
            <div class="lg:hidden border-r border-gray-500 flex items-center h-[2rem] mt-5"></div>
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
<transition name="slide-fade" class="fixed w-[90%] h-full z-50 top-0 right-0 left-0 bottom-0 bg-white text-midnight flex flex-col gap-3   border-t border-gray-200 shadow-md lg:hidden">
<div
v-if="showMenu"
class=""
>   
        <div class="flex flex-row justify-between  ">
                <div class="p-8">
                     <svg xmlns="http://www.w3.org/2000/svg" width="108" height="30" fill="none"><g clip-path="url(#logo-toldst-dark_svg__a)"><path fill="#A3928F" d="m22.898 28.41 1.59-2.014c.637.53 1.803 1.272 2.969 1.272s1.59-.318 1.59-.848c0-1.696-6.043-.106-6.043-3.816 0-1.909 1.803-3.393 4.347-3.393 1.802 0 3.074.742 3.816 1.378l-1.59 1.909c-.424-.424-1.484-.954-2.438-.954-1.06 0-1.484.318-1.484.742 0 1.378 6.042 0 6.042 3.922 0 1.908-1.696 3.604-4.558 3.604-1.484-.212-3.075-.742-4.24-1.802ZM46.539 19.824l-2.014 3.922-2.015-3.922H32.016v2.332h3.074v7.739h2.756v-7.739h2.968l2.226 4.135v3.604h2.863V26.29l3.498-6.467h-2.862ZM50.248 19.824h4.876c2.544 0 3.923 1.378 3.923 3.392 0 1.272-.742 2.333-1.908 2.969l2.12 3.71h-3.075l-1.696-3.18h-1.484v3.18h-2.756v-10.07Zm2.756 2.332v2.227h2.12c.742 0 1.166-.53 1.166-1.167 0-.53-.318-1.06-1.166-1.06h-2.12ZM60.85 19.824h7.526v2.438h-4.77v1.378h3.922v2.333h-3.922v1.59h4.982v2.332H60.85v-10.07ZM77.81 29.895h-7.314v-10.07h2.756v7.738h4.559v2.332ZM78.871 28.41l1.59-2.014c.636.53 1.802 1.272 2.968 1.272s1.59-.318 1.59-.848c0-1.696-6.042-.106-6.042-3.816 0-1.909 1.802-3.393 4.346-3.393 1.803 0 3.075.742 3.817 1.378l-1.59 1.909c-.424-.424-1.485-.954-2.439-.954-1.06 0-1.484.318-1.484.742 0 1.378 6.043 0 6.043 3.922 0 1.908-1.696 3.604-4.559 3.604-1.59-.212-3.18-.742-4.24-1.802ZM89.47 19.824h7.527v2.438h-4.77v1.378h3.922v2.333h-3.922v1.59h4.982v2.332h-7.738v-10.07ZM99.012 19.824h2.544l3.392 5.407v-5.407h2.65v10.07h-2.544l-3.392-5.405v5.406h-2.65v-10.07Z"></path><path fill="#14143C" d="M23.004 7.207h8.798v2.332h-2.968v7.739h-2.756V9.539H23.11V7.207h-.106ZM32.44 12.296c0-3.498 2.756-5.194 5.512-5.194s5.512 1.802 5.512 5.194c0 3.286-2.544 5.194-5.512 5.194-2.862 0-5.512-1.908-5.512-5.194Zm8.268 0c0-1.908-1.272-2.756-2.756-2.756-1.484 0-2.756.954-2.756 2.756 0 1.696 1.378 2.862 2.756 2.862s2.756-1.166 2.756-2.862ZM52.58 17.278h-7.314V7.207h2.756v7.738h4.558v2.333ZM58.197 7.207c2.226 0 5.195 1.06 5.195 5.088 0 3.923-2.969 4.983-5.195 4.983h-4.24V7.207h4.24Zm-1.484 2.332v5.406h1.59c.742 0 2.333-.53 2.333-2.65s-1.59-2.756-2.333-2.756h-1.59ZM3.392 13.675c0-.425.106-1.273-.106-1.697-.318-.53-.848-1.06-1.484-1.59-.318-.212-.848-.636-.848-1.272 0-.954.636-1.166 1.166-1.166.212 0 .318 0 .53.106.106-.318.212-.636.424-.848-.424-.212-.636-.212-.954-.212-.848 0-2.12.636-2.12 2.12 0 .954.636 1.59 1.166 2.12.636.636 1.166 1.272 1.272 2.544h.954v-.105ZM15.37 14.734H2.438v.848H15.37v-.848ZM15.37 16.537H2.438v.848H15.37v-.848ZM15.688 6.996c-.318 0-.53 0-.848.106.212.212.318.53.424.848.106 0 .318-.106.53-.106.424 0 1.166.212 1.166 1.166 0 .636-.53 1.06-.742 1.272-.636.53-1.166 1.06-1.484 1.59-.212.424-.212 1.273-.106 1.697h.954c.106-1.273.636-1.909 1.272-2.545.53-.53 1.166-1.166 1.166-2.12-.212-1.272-1.378-1.908-2.332-1.908ZM9.328 13.675c.106-.742.424-1.06.424-1.696 0-.53-.318-.954-.318-2.757v-2.65H8.48v2.65c0 1.697-.318 2.12-.318 2.757 0 .742.212.954.424 1.696h.742ZM5.3 13.675h.955c.106-.742.318-1.378.106-1.908-.212-.636-.954-1.272-1.484-1.803-.318-.424-.53-.848-.53-1.378 0-.636.424-1.166 1.166-1.166.848 0 1.06.742 2.12.742v-.848c-.636-.106-.954-.742-2.12-.742-.636 0-1.166.212-1.59.636-.318.318-.53.848-.53 1.378 0 .848.424 1.378.848 1.909.53.636 1.06 1.484 1.06 3.18ZM10.282 8.163c.954 0 1.272-.742 2.12-.742.742 0 1.166.53 1.166 1.166 0 .53-.212.954-.636 1.378-.53.53-1.272 1.166-1.484 1.802-.212.53 0 1.166.106 1.908h.954c0-1.802.53-2.544 1.06-3.18.424-.53.848-1.06.848-1.908 0-.53-.212-1.06-.53-1.484-.424-.424-.954-.636-1.59-.636-1.166 0-1.484.742-2.12.742v.954h.106ZM7.42 4.134c0 .848.636 1.484 1.484 1.484s1.484-.636 1.484-1.484c0-.636-.424-1.272-1.06-1.378v-.954h.954V.954h-.954V0H8.48v.954h-.954v.848h.954v.848c-.636.212-1.06.848-1.06 1.484Zm1.484-.742c.424 0 .742.318.742.742a.725.725 0 0 1-.742.742.725.725 0 0 1-.742-.742c0-.424.318-.742.742-.742Z"></path></g><defs><clipPath id="logo-toldst-dark_svg__a"><path fill="#fff" d="M0 0h107.597v30H0z"></path></clipPath></defs></svg>
                </div>
             <button class="text-midnight text-sm flex top-0 bottom-0 md:flex-row items-center justify-center align-center w-[3rem] h-[5.6rem] gap-2 p-3 transition-all duration-300 border border-[2px] border-white hover:border-[#14143c] hover:border-[2px]"  @click="closeMenu()">
             <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="12.7" height="12.7" style="enable-background:new 0 0 12.7 12.7"><path d="M12.7 1.4 11.3 0 6.4 4.9 1.4 0 0 1.4l4.9 5L0 11.3l1.4 1.4 5-4.9 4.9 4.9 1.4-1.4-4.9-4.9z" style="fill:#14143c"></path></svg>
            </button>
        </div>
        <div class="border-t border-gray-300 mt-[-1rem] mb-2"></div>
        <div class="flex flex-col gap-4 px-6">
        <router-link to="/" class="hover:text-yellow-600">Home</router-link>
        <router-link to="/about" class="hover:text-yellow-600" >About Us</router-link>
        <router-link to="/contact" class="hover:text-yellow-600" >Contact</router-link>
        </div>
        <div class="border-t border-gray-300 my-2"></div>

        <div class="flex flex-col gap-2 px-6">
            <p class="text-sm font-semibold text-gray-500 uppercase">Languages</p>
            <router-link to="/" class="hover:text-yellow-600">Dansk</router-link>
            <router-link to="/" class="hover:text-yellow-600" >English</router-link>
        </div>
        </div>

    </transition>
<div class="p-7 sm:px-7">
  <div class="bg-white shadow-sm border">
    <div class="flex flex-row overflow-x-auto lg:grid lg:grid-cols-5 lg:overflow-visible">
      <router-link to="/Vat">
         <div class="group flex-shrink-0 min-w-[16rem] sm:min-w-[18rem] lg:min-w-0 flex flex-col justify-start items-start p-4 rounded-lg transition">
        <img src="/refund.svg" alt="VAT refunds" class="w-[10rem] h-auto mb-4" />
        <a href="#" class="font-semibold text-midnight underline underline-offset-4 hover:decoration-[3px] group-hover:decoration-[3px] transition-all duration-150">
          VAT refunds
        </a>
      </div>
      </router-link>
     <router-link to="/Travel">
       <div class="group flex-shrink-0 min-w-[16rem] sm:min-w-[18rem] lg:min-w-0 flex flex-col justify-start items-start p-4 rounded-lg transition">
        <img src="/travel.svg" alt="Travel" class="w-[10rem] h-auto mb-4" />
        <a href="#" class="font-semibold text-midnight underline underline-offset-4 hover:decoration-[3px] group-hover:decoration-[3px] transition-all duration-150">
          Travel
        </a>
      </div>
     </router-link>
     <router-link to="/Online">
          <div class="group flex-shrink-0 min-w-[16rem] sm:min-w-[18rem] lg:min-w-0 flex flex-col justify-start items-start p-4 rounded-lg transition">
        <img src="/shopping.svg" alt="Online shopping" class="w-[10rem] h-auto mb-4" />
        <a href="#" class="font-semibold text-midnight underline underline-offset-4 hover:decoration-[3px] group-hover:decoration-[3px] transition-all duration-150">
          Online shopping
        </a>
      </div>
     </router-link>
     <router-link to="/gift">
        <div class="group flex-shrink-0 min-w-[16rem] sm:min-w-[18rem] lg:min-w-0 flex flex-col justify-start items-start p-4 rounded-lg transition">
        <img src="/gift.svg" alt="Gifts" class="w-[10rem] h-auto mb-4" />
        <a href="#" class="font-semibold text-midnight underline underline-offset-4 hover:decoration-[3px] group-hover:decoration-[3px] transition-all duration-150">
          Gifts
        </a>
      </div>
     </router-link>
     <router-link to="/move">
          <div class="group flex-shrink-0 min-w-[16rem] sm:min-w-[18rem] lg:min-w-0 flex flex-col justify-start items-start p-4 rounded-lg transition">
        <img src="/personal.svg" alt="If you move to Denmark" class="w-[10rem] h-auto mb-4" />
        <a href="#" class="font-semibold text-midnight underline underline-offset-4 hover:decoration-[3px] group-hover:decoration-[3px] transition-all duration-150">
          If you move to Denmark
        </a>
      </div>
     </router-link>
    </div>
  </div>
</div>


    <section class="relative px-4 sm:px-7">
      <div
        class="h-[15rem] sm:h-[22rem] bg-cover bg-center rounded-md"
        style="background-image: url('/custom.png');"
      ></div>

      <div
        class="lg:absolute md:absolute relative left-1/2 transform -translate-x-1/2 -bottom-16 sm:-bottom-20 bg-white shadow-lg w-full rounded-sm w-[90%] md:w-[70%] p-6 sm:p-8"
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
        <h3 class="text-midnight font-black text-xl mb-2 mt-3">
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
const showMenu = ref(false);
function toggleSearch() {
  showSearch.value = !showSearch.value;
}
function toggleMenu() {
  showMenu.value = !showMenu.value;
}
function closeMenu() {
  showMenu.value = false;
}


const aboutItems = [
  { title: "What we do", link: "About our task" },
  { title: "How we are organised", link: "Organisational structure" },
  { title: "How to reach us", link: "Get in touch" },
  { title: "Where to find us", link: "Opening hours and offices" },
];
</script>
