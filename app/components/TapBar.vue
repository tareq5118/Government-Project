<template>
    <div class=" flex justify-between items-center sm:w-[92%] h-full mx-auto px-3 py-2  sm:px-5">
        <div >
           <nuxt-link to="/">

               <img class="w-auto h-8 sm:h-9 md:h-12 object-contain" src="/images/logo.svg" alt="">
           </nuxt-link>
         
        </div>
        <div class="flex justify-between items-center  gap-6 sm:gap-6">
            <div class="max-w-full  border rounded-lg sm:rounded-xl  px-4 py-2 flex justify-around items-center">

                <input type="search" placeholder="البحث" class="outline-none text-sm sm:text-base w-14 sm:w-auto">
                <button class="hover:cursor-pointer hidden sm:block"><ion-icon name="search-outline"></ion-icon></button>
        </div>
            <button class="mx-4 hover:cursor-pointer text-sm sm:text-base ">English</button>
            <div class="text-sm sm:text-base hover:cursor-pointer hidden sm:block">icons</div>
        </div>
    </div>
</template>