<template>
  <div class="flex flex-row w-full h-screen relative">
    <!-- sidebase -->
    <div
      class="flex flex-col gap-10 max-w-[275px] min-w-[250px] w-full items-center py-12 bg-[var(--common-background-two)] drop-shadow-xl sticky left-0 top-0 bottom-0 h-screen">
      <!-- header -->
      <h1 class="font-black text-2xl">SMART PARKING</h1>
      <!-- content -->
      <div class="flex flex-col w-full gap-1 px-2">
        <button
          class="rounded-sm border-[#b3a99d] border w-full py-2 hover:bg-[#62383b] active:bg-[#3b060a] hover:text-white active:text-white hover:border-[#3b060a] active:border-[#3b060a]"
          @click="router.push({ name: 'profile' })">
          My Profile
        </button>
        <button
          class="rounded-sm border-[#b3a99d] border w-full py-2 hover:bg-[#62383b] active:bg-[#3b060a] hover:text-white active:text-white hover:border-[#3b060a] active:border-[#3b060a]"
          @click="router.push({ name: 'booking' })">
          Bookings
        </button>
        <button
          class="rounded-sm border-[#b3a99d] border w-full py-2 hover:bg-[#62383b] active:bg-[#3b060a] hover:text-white active:text-white hover:border-[#3b060a] active:border-[#3b060a]"
          @click="router.push({ name: 'session' })">
          Sessions
        </button>
      </div>
      <!-- footer -->
    </div>
    <!-- content page -->
    <div class="w-full h-screen py-12 px-8">
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup>
import router from '@/router';

</script>
