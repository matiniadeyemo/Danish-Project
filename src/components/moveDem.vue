<template>
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
 
    <div class="flex flex-wrap w-80% gap-4 lg:flex md:flex sm:flex p-4  text-sm md:text-base text-midnight "
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
    <p>Individuals</p>
  </router-link>

  <router-link
    to="/gift"
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
    <p>If you move to Denmark</p>
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
    <section class="lg:p-7 p-0 mt-6 sm:px-7 flex  gap-[2rem] lg:gap-0 flex-col lg:flex-row justify-between md:gap-[3rem]">
        <div class="bg-white shadow-sm border flex flex-col gap-2  min-h-[25rem lg:w-[58rem] lg:min-h-[86rem]" >
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
          <div class="border-t border">
                <article class="relative p-3 pl-5 flex flex-col gap-4 text-midnight">
                <div class="absolute top-0 left-5 h-2 w-10 bg-midnight"></div>
                <div class="lg:px-5 px-3 flex flex-col justify-between gap-3">
                     <h1 class="text-4xl  lg:w-[70%]  font-extrabold text-midnidnight mt-[1rem]">If you move to Denmarks</h1>
                     <p class="lg:text-[1.5rem] text-[1.3rem] line text-base">You must pay customs duties and VAT on your personal belongings if you have lived outside the EU and move to Denmark. However, if you and your belongings meet a number of requirements, you may bring them across the border without having to pay customs duties and VAT.</p>
                </div>
                    <div class="lg:p-7 p-3 flex flex-col justify-between gap-4 mb-2">
                    <p class="lg:text-[1.2rem] text-base">If you move to Denmark from a non-EU country, you risk having to pay customs duties and VAT on the personal belongings that you bring with you when moving to Denmark. You may bring your personal belongings with you to Denmark duty-free and VAT-free if you meet a number of requirements.</p>
                    <p class="lg:text-[1.2rem] text-base">Personal belongings (personal property) include ordinary household effects such as furniture, clothing, bicycles, motor vehicles for private use, kitchenware and white goods.</p>
                    <p class="lg:text-[1.1rem] text-base">When moving to Denmark, you must make sure that your carrier or shipping agent completes a customs clearance declaration for your personal belongings. In addition, you must remember to fill in a declaration of personal property yourself and submit it to the Danish Customs Agency (Toldstyrelsen).</p>
                </div>
                <div class="lg:p-7 p-4 p-3 flex flex-col justify-between gap-4">
                        <div
                        class="flex items-center lg:w-[25rem] w-[20rem] h-[5rem] bg-midnight text-white group border border-midnight
                                hover:border-[3px] hover:scale-105 "
                        >
                        <div class="flex flex-row w-full h-full items-center  gap-7 group-hover:border group-hover:border-white">
                            <div class="border-r p-4 h-full items-center flex border-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-6 h-6 flex-shrink-0 font-bold align-middle stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"
                                />
                            </svg>
                            </div>
                            <p>Fill in declaration of personal property</p>
                        </div>
                        </div>
                        <p class="lg:text-[1.1rem] text-base">There may be situations where you bring personal belongings with you to Denmark and where this is not connected with you moving to Denmark. You can read more about this further down the page.</p>
                </div>
                </article>
                <div class="">

               <div class="group relative border-t border-midnight transition-all duration-500 ease-in-out"
                    :class="{ 'border-t-[4px] border-gray-500': Accord === 1 }"
                  >
                    <button
                    class="w-full flex gap-[0.7rem] items-center p-5 text-left lg:text-2xl text-[1.3rem] lg:font-extrabold text-bold text-midnight  transition"
                    @click="toggleAccordion(1)":aria-expanded="Accord === 1"
                    >
                    <svg
                        id="arrow-1"
                        class="w-[2rem] h-10 lg:w-5 lg:h-5 transform transition-transform duration-300"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                    <span>Bring personal property with you to Denmark duty-free and VAT-free</span>

                    </button>
                    <div id="content-1" v-if="Accord  === 1" class="p-7 text-lg  flex flex-col gap-[0.5rem] text-[#0A0A3D]/80 overflow-hidden transition-all duration-500 ease-in-out"
>
                    <p>
                        You can bring your personal belongings with you to Denmark duty-fee and VAT-free if you are changing your normal place of residence to Denmark from a country outside the EU and meet these requirements:
                    </p>
                    <ul class="list-disc p-7">
                        <li>You must have lived in a country outside the EU for a minimum of 12 consecutive months.</li>
                        <li>You intend to use your belongings for the same purpose as previously after you have moved to Denmark.</li>
                        <li>You must have brought your belongings to Denmark no later than 12 months after you moved to Denmark</li>
                        <li>Your belongings must have been brought to Denmark no earlier than six months before your move to Denmark. If you bring your belongings to Denmark before moving to Denmark, you will need to provide security for the customs duty and VAT amounts.</li>
                    </ul>
                    <p>Your ‘normal place of residence’ is determined based on an assessment of a number of factors, including your personal and occupational ties to Denmark.</p>
                    <p>If you choose to lend out, pledge or rent out your belongings during the first 12 months after you have brought them to Denmark, you must pay customs duties and VAT on them.</p>
                    <p>Please note that you must pay customs duties, VAT and excise duties on alcoholic beverages, tobacco products, commercial motor vehicles and equipment for use in the exercise of a trade or profession (except for tools, equipment and instruments which are effectively portable).</p>
                </div>
                </div>
                <div class="group relative border-t border-midnight transition-all duration-500 ease-in-out"
                    :class="{ 'border-t-[4px] border-gray-500': Accord === 2 }">
                    <button
                    class="w-full flex gap-[0.7rem] items-center p-5 text-left lg:text-2xl text-[1.3rem] lg:font-extrabold text-bold text-midnight  transition"
                     @click="toggleAccordion(2)":aria-expanded="Accord === 2"
                    >
                    <svg
                        id="arrow-2"
                        class="w-[2rem] h-10 lg:w-5 lg:h-5 transform transition-transform duration-300"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                    <span>You must declare your personal property to the Customs Agency</span>
                    
                    </button>
                    <div id="content-2" v-if="Accord === 2" class="p-7 text-base flex flex-col gap-[1rem]  text-[#0A0A3D]/80 overflow-hidden transition-all duration-500 ease-in-out"
>
                    <p>When you move to Denmark, you must make sure that an customs clearance declaration of your personal property is submitted. Your carrier or a shipping agent can fill in the customs clearance declaration for you.</p>
                    <p>In addition, you must yourself fill in a declaration of personal property and either submit it to the Customs Agency or have your shipping agent do it for you. The form is used to declare which personal belongings you are bringing with you to Denmark and whether they meet the requirements for exemption from customs duties and VAT.</p>
                    <p>You must also document that you meet the requirements for the above exemption from customs duties and VAT. Documentation may be in the form of, for example:</p>
                    <p>There are three things you must do to obtain a VAT refund if you live in Norway or on the Aaland Islands:</p>
                    <ul class="list-disc p-7">
                        <li>a tenancy agreement or house purchase contract; <br> an employment contract;</li>
                        <li>a certificate of residence; <br> other documentation showing the duration of your stay abroad and that you are changing your residence to Denmark;</li>
                        <li>receipts showing that you have owned your belongings for six months (this applies especially to belongings of a significant value).</li>
                    </ul>
                    <p class="text-midnight text-[1.05rem] leading-relaxed tracking-[0.01em] flex items-start gap-2 hover:underline">
                        <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 mt-[0.25rem] flex-shrink-0 text-midnight font-bold align-middle stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                    />
                </svg>
                   Fill in declaration of personal property
                    </p>
                <strong class="text-xl font-extrabold text-midnight">Where are you to submit the declaration and documentation?</strong>
                <p>You or your shipping agent can hand in the form and other documentation physically or submit the documents electronically to the customs office stated in the customs clearance declaration. On the customs clearance declaration in box A, you will find four digits referring to the customs office where you are to hand in the form.</p>
                <p class="text-midnight text-[1.05rem] leading-relaxed tracking-[0.01em] flex items-start gap-2 hover:underline">
                        <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 mt-[0.25rem] flex-shrink-0 text-midnight font-bold align-middle stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                    />
                </svg>
                    See a list of the customs offices’ numbers.
                    </p>
                <p class="text-midnight text-[1.05rem] leading-relaxed tracking-[0.01em] flex items-start gap-2 hover:underline">
                        <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 mt-[0.25rem] flex-shrink-0 text-midnight font-bold align-middle stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                    />
                </svg>
                  Find the customs office’s email address.
                    </p>
            </div>
                </div>
                <div class="group relative border-t border-midnight transition-all duration-500 ease-in-out"
                    :class="{ 'border-t-[4px] border-gray-500': Accord === 3 }">
                    <button
                     class="w-full flex gap-[0.7rem] items-center p-5 text-left lg:text-2xl text-[1.3rem] lg:font-extrabold text-bold text-midnight  transition"
                     @click="toggleAccordion(3)":aria-expanded="Accord === 3"
                    >
                    <svg
                        id="arrow-3"
                        class="w-[2rem] h-10 lg:w-5 lg:h-5 transform transition-transform duration-300"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                    <span>If you have lived outside the EU for less than 12 months</span>
                    
                    </button>
                    <div id="content-3" v-if="Accord  === 3" class="p-7 flex flex-col gap-[0.5rem] text-[#0A0A3D]/80 text-base overflow-hidden transition-all duration-500 ease-in-out"
>
                    <p>You must pay customs duties and VAT on your belongings if you have lived in a country outside the EU for less than 12 months and move back home to Denmark.</p>    
                    <p>However, if you intended to stay for more than 12 months in a country outside the EU, you may apply to bring your personal belongings with you back to Denmark duty-free and VAT-free. For this to be possible, you must document that you had planned a stay of more than one year, but that your stay has been interrupted. This documentation may, for example, be an employment contract and/or a tenancy agreement.</p>
                </div>
                </div>

                <div class="group relative border-t border-midnight transition-all duration-500 ease-in-out"
                    :class="{ 'border-t-[4px] border-gray-500': Accord ===  4}">
                    <button
                    class="w-full flex gap-[0.7rem] items-center p-5 text-left lg:text-2xl text-[1.3rem] lg:font-extrabold text-bold text-midnight  transition"
                     @click="toggleAccordion(4)":aria-expanded="Accord === 4"
                    >
                    <svg
                        id="arrow-4"
                        class="w-[2rem] h-10 lg:w-5 lg:h-5 transform transition-transform duration-300"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                    <span>If you marry, inherit or are going to study in Denmark</span>
                    
                    </button>
                    <div id="content-4" v-if="Accord === 4" class="pt-0 lg:pl-8 p-6 flex flex-col gap-[1rem] text-lg text-[#0A0A3D]/80 overflow-hidden transition-all duration-500 ease-in-out"
>
                    <strong class="lg:text-2xl text-[1.1rem] lg:font-extrabold font-bold text-midnight">If you marry a person who lives in Denmark</strong>
                    <p>If you want to bring personal equipment, movable property and household effects (also new) with you to Denmark duty-free and VAT-free in connection with your entry into marriage, you must meet these conditions:If you want to bring personal equipment, movable property and household effects (also new) with you to Denmark duty-free and VAT-free in connection with your entry into marriage, you must meet these conditions:</p>    
                    <p></p>
                    <ul class="list-disc pl-[3rem]">
                        <li>You must have lived outside the EU for a minimum period of 12 consecutive months.</li>
                        <li>You must be able to document that you are getting married.</li>
                        <li>Your personal effects etc. must have been brought into Denmark no later than four months after your wedding day and no earlier than two months before your wedding day. If you bring personal effects etc. into Denmark before your wedding, you must provide security for the customs duty and VAT amounts.</li>
                    </ul>
                    <p>In connection with your marriage, you can bring your presents with you to Denmark duty-free and VAT-free if they are usual wedding presents and if the giver lives in a country outside the EU. However, the value of the individual present must not exceed EUR 1,000 (approx. DKK 7,500).</p>
                    <p>Please note that alcoholic beverages and tobacco products are not covered by the exemption from customs duties and VAT.</p>
                    <p>If you choose to lend out, pledge or rent out the personal effects etc. during the first 12 months after bringing them into Denmark, you must pay customs duties and VAT on them.</p>
                    <strong class="lg:text-2xl text-[1.1rem] lg:font-extrabold font-bold text-midnight">If you inherit personal belongings from a person outside the EU</strong>
                    <p>As a general rule, you do not have to pay customs duties and VAT on personal belongings that you inherit. However, it is a requirement that your normal place of residence is in Denmark.</p>
                    <div class="mt-5 flex flex-col gap-5">
                        <p>The exemption does not apply to the following items:</p>
                        <ul class="list-disc p-7">
                            <li>Alcoholic products;</li>
                            <li>Tobacco and tobacco products;</li>
                            <li>Commercial vehicles;</li>
                            <li>Equipment for use in the exercise of a trade or profession, except for portable tools, equipment and instruments that were necessary for the deceased’s occupation;</li>
                            <li>Stocks of raw materials and finished products or semi-manufactures;</li>
                            <li>Livestock and stocks of agricultural products exceeding the normal needs of a family.</li>
                    </ul>
                    <p>You must bring the personal belongings into Denmark no later than two years after the final settlement of the estate.</p>
                    <p>You must document that you have inherited the belongings.</p>
                    <strong class="lg:text-2xl text-[1.1rem] lg:font-extrabold font-bold text-midnight">If you come to Denmark to study</strong>
                    <p>If you come to Denmark from a country outside the EU to study on a full-time basis, you are not liable to pay customs duties and VAT on personal equipment and teaching aids and materials that you bring with you if you need these items during your studies.</p>
                    <p>This also applies to personal equipment, movable property and household effects that form part of the normal furnishing of a home for a student.</p>
                    </div>
                </div>
                </div>

                <div class="group relative border-t border-midnight transition-all duration-500 ease-in-out"
                    :class="{ 'border-t-[4px] border-gray-500': Accord ===  5}">
                    <button
                    class="w-full flex gap-[0.7rem] items-center p-5 text-left lg:text-2xl text-[1.3rem] lg:font-extrabold text-bold text-midnight  transition"
                     @click="toggleAccordion(5)" :aria-expanded="Accord === 5"
                    >
                    <svg
                        id="arrow-5"
                        class="w-[2rem] h-10 lg:w-5 lg:h-5 transform transition-transform duration-300"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                    <span>If you choose to transport your personal belongings yourself</span>
                    </button>
                    <div id="content-5" v-if="Accord === 5" class="pt-3 pl-9 pb-5 flex flex-col gap-[1rem] text-[#0A0A3D]/80 overflow-hidden transition-all duration-500 ease-in-out"
>
                    <p>If you transport your belongings yourself, for example from Norway or Switzerland, it may be a good idea to ask a shipping agent or carrier to fill in the customs clearance documents for you.</p>
                    <P>You can also choose to declare your belongings yourself by filling in the declaration of personal property and pages 6, 7 and 8 of the so-called Single Administrative Document.</P>
                    <p class="underline hover:decoration-[3px] underline-offset-4 ">Fill in Single Administrative Document (pages 6, 7 and 8 only).</p>
                  </div>
                </div>
                <div class="border-t border-midnight p-7">
                  <div class=" border-l border-midnight border-l-[6px]  flex flex-col gap-[1rem] lg:w-[45rem] h-[17rem] lg:h-[12rem] bg-[#e8e2e1] p-4 text-xl text-midnight">
                    <h1 class="text-2xl font-bold">Cars and motor cycles</h1>
                    <p class="text-base">Are you bringing a car or motor cycle with you from outside the EU? Special rules apply if you want to bring your motor vehicle with you to Denmark.</p>
                    <p class="text-midnight flex items-center gap-4 group cursor-pointer hover:underline group-hover:underline transition-all duration-200"
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
                      /></svg>
                      <a href="" class="text-base no-underline">Read more at the website of the Danish Motor Vehicle Agency (Motorstyrelsen).</a>
                    </p>
                  </div>
                </div>
                </div>
            </div>
        </div>
        <div class="bg-white shadow-sm border flex flex-col gap-2 w-full lg:w-[21rem] h-[23rem] relative">
            <div class="flex flex-col gap-3 p-5">
            <span class="text-midnight text-xl font-bold">More about Individuals</span>
            <div class="flex flex-col gap-[0.7rem]">
            <router-link to="/Travel" class="flex items-center underline text-midnight hover:decoration-[3px] underline-offset-4">Travel</router-link>
            <router-link to="/Online" class="flex items-center underline text-midnight hover:decoration-[3px] underline-offset-4">Online shopping</router-link>
            <div class="flex flex-row items-center">
              <div class="absolute lg:top-[8.8rem] top[2rem]  left-0 right-0 h-5 w-2 bg-midnight "></div>
              <h1 class="text-lg text-midnidnight lg:mt-[0.5rem]">If you move to Denmark</h1>
              </div>
            <router-link to="/gift" class="flex items-center underline text-midnight hover:decoration-[3px] underline-offset-4">Gifts dispatched from countries outside the EU</router-link>
            <router-link to="/Special" class="flex items-center underline text-midnight hover:decoration-[3px] underline-offset-4">Special rules for special items</router-link>
            <router-link  to="/Vat" class="flex items-center underline text-midnight hover:decoration-[3px] underline-offset-4">VAT refund</router-link>
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
const Accord = ref(false);
const cord = ref(null)
const showSearch = ref(false);
function toggleSearch() {
  showSearch.value = !showSearch.value;
}
function toggleMenu() {
  showMenu.value = !showMenu.value;
}
function closeMenu() {
  showMenu.value = false;
}
function toggleAccordion(index){
     Accord.value = Accord.value === index ? false : index;
}
const sectionToggle = (index) => {
  cord.value = cord.value === index ? null : index;
}
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
button[aria-expanded="true"] svg {
  transform: rotate(180deg);
}
</style>