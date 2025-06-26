<template>
  <div class="flex flex-row w-full h-screen relative overflow-x-auto">
    <!-- sidebase -->
    <div class="flex flex-col bg-[var(--common-theme)] gap-10 max-w-[275px] min-w-[250px] w-full items-center py-12 bg-[var(--common-background-two)] drop-shadow-xl sticky left-0 top-0 bottom-0 h-screen">
      <!-- header -->
      <div class="flex flex-row justify-center items-end w-full">
          <img src="@/assets/easyParkLogo.svg" alt="Logo" class="h-30 ml-[-50px]" />
          <h1 class="text-[var(--common-theme-two)] tracking-wide text-2xl ml-[-60px]" style="font-family: 'Anton', sans-serif;">EASY PARK</h1>
      </div>
      <!-- content -->
      <div class="flex flex-col w-full gap-5 px-2 mt-10">
        <button
          class="rounded-sm flex flex-row w-full gap-5 font-medium items-center py-2 text-white text-left pl-10 hover:bg-[#FFFFFF80] active:bg-[var(--common-theme-two)] hover:text-white active:text-white hover:border-[#3b060a] active:border-[#3b060a]"
          @click="router.push({ name: 'profile' })"> 
          <UserIcon class="h-5 w-5" />
          My Profile
        </button>
        <button
        class="rounded-sm  w-full py-2 flex flex-row gap-5 font-medium items-center text-white text-left pl-10 hover:bg-[#FFFFFF80] active:bg-[var(--common-theme-two)] hover:text-white active:text-white hover:border-[#3b060a] active:border-[#3b060a]"
        @click="router.push({ name: 'booking' })"
        >
        <CalendarIcon class="h-5 w-5" />
        Bookings
        </button>
        <button
          class="rounded-sm w-full py-2 flex flex-row gap-5 font-medium items-center text-white text-left pl-10 hover:bg-[#FFFFFF80] active:bg-[var(--common-theme-two)] hover:text-white active:text-white hover:border-[#3b060a] active:border-[#3b060a]"
          @click="router.push({ name: 'session' })"
            >
            <ClockIcon class="h-5 w-5" />
            Sessions
          </button>
      </div>
      <!-- footer -->
       <div class="flex flex-col w-full gap-5 px-2 mt-10">
        <button
          class="rounded-sm flex flex-row w-full gap-5 font-medium items-center py-2 text-white text-left pl-10 hover:bg-[#FFFFFF80] active:bg-[var(--common-theme-two)] hover:text-white active:text-white hover:border-[#3b060a] active:border-[#3b060a]"
          > 
          <ArrowRightOnRectangleIcon class="h-5 w-5" />
          Log out
        </button>
      </div>
    </div>
    <!-- content page -->
    <div class="w-full h-screen py-12 px-8">
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup>
import router from '@/router';
import { UserIcon, CalendarIcon, ClockIcon, ArrowRightOnRectangleIcon  } from '@heroicons/vue/24/solid'
</script>
