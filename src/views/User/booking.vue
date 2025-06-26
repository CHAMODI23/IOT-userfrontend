<template>
  <div class="flex flex-col gap-10">
    <h3 class="font-black text-3xl text-[var(--common-theme)]">Booking</h3>
    <div class="flex flex-col gap-4 justify-center items-center">
      <!-- form box -->
      <div class="flex flex-col gap-6 rounded-md shadow-md py-10 justify-center w-full max-w-3xl mx-auto p-4 sm:p-6 md:p-10">
        <!-- Vehicle -->
        <div class="flex flex-col md:flex-row gap-2 md:gap-5 items-center">
          <label for="vehicle" class="text-base text-black font-semibold w-full md:w-2/6">Vehicle</label>
          <select name="vehicle" id="vehicle" class="w-full md:w-4/6 h-12 px-4 md:px-10 py-2 rounded-md focus:outline-none bg-gray-200">
            <option value="option1">spNB-2020</option>
            <option value="option2">spNB-5020</option>
          </select>
        </div>

        <!-- Date -->
        <div class="flex flex-col md:flex-row gap-2 md:gap-5 items-center">
          <p class="text-base text-black font-semibold w-full md:w-2/6">Date</p>
          <input type="date" class="w-full md:w-4/6 h-12 px-4 md:px-10 py-2 rounded-md text-center focus:outline-none bg-gray-200">
        </div>

        <!-- Time -->
        <div class="flex flex-col md:flex-row gap-2 md:gap-5 items-center">
          <p class="text-base text-black font-semibold w-full md:w-2/6">Time</p>
          <input type="time" class="w-full md:w-4/6 h-12 px-4 md:px-10 py-2 rounded-md text-center focus:outline-none bg-gray-200">
        </div>

        <!-- Fee -->
        <div class="flex flex-col md:flex-row gap-2 md:gap-5 items-center mt-6">
          <p class="text-base text-black font-semibold w-full md:w-2/6">Reservation Fee</p>
          <input type="number" placeholder="Rs." class="w-full md:w-4/6 h-12 px-4 md:px-10 py-2 rounded-md focus:outline-none bg-gray-200">
        </div>

        <!-- Buttons -->
        <div class="flex flex-col md:flex-row gap-2 md:gap-5 items-center justify-end mt-8">
          <div class="w-full md:w-2/6"></div>
          <div class="flex flex-col sm:flex-row gap-4 w-full md:w-4/6">
            <button class="bg-[#62383b] hover:bg-[var(--common-theme-light)] active:bg-[#62383b] text-white w-full sm:w-2/5 rounded-sm py-2">
              Cancel
            </button>
            <button class="bg-[var(--common-theme)] hover:bg-[var(--common-theme-light)] active:bg-[#62383b] text-white w-full sm:w-3/5 rounded-sm py-2">
              Confirm & Pay
            </button>
          </div>
        </div>
      </div>

    </div>
    <!-- not availability message -->
    <div class="flex flex-row justify-between p-6 rounded-md bg-[#ffa6b8]">
      <p class="text-white">sorry. any parking slot not available for you provided date and time !</p>
      <i class="fi fi-rr-circle-xmark text-white hover:text-black"></i>
    </div>
    <!-- available message with booking action button -->
    <div class="flex flex-row justify-between mb-20 p-6 rounded-md bg-[#81d3d0]">
      <p class="text-white">there are few parking slot available. don't be late !</p>
      <button class="bg-[#039591] py-1 px-4 rounded-sm text-white border-white border-2 hover:bg-[#1cafaa]">Book Now</button>
    </div>
  </div>
</template>
<script setup>

</script>
