<template>
  <div class="flex flex-col gap-10">
    <h1 class="font-semibold text-2xl">Booking</h1>
    <div class="flex flex-col gap-10 border-gray-400 border-1 rounded-sm p-6">
      <p class="text-center text-gray-500">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        ullam aperiam nemo, doloribus tenetur ea suscipit sapiente inventore
        enim vero eligendi ipsam architecto necessitatibus totam officia non
        incidunt recusandae velit!
      </p>
      <!-- search box -->
      <div class="flex flex-row gap-6 justify-center items-center">
        <div class="flex flex-row gap-4 items-center">
          <label for="cars">Vehicle</label>  
          <select name="cars" id="cars" class="border py-1 px-4 rounded-sm">
              <option value="volvo">spNB-2020</option>
          </select>
        </div>
        <div class="flex flex-row gap-4 items-center">
            <p class="text-lg">Date</p>
            <input type="date" class="border py-1 px-4 rounded-sm">
        </div>
        <div class="flex flex-row gap-4 justify-center items-center">
            <p class="text-lg">Time</p>
            <input type="time" class="border py-1 px-4 rounded-sm">
        </div>
        <button class="bg-[#3b060a] hover:bg-[#62383b] active:bg-[#62383b] text-white hover:text-white active:text-white border-0 rounded-sm py-1 px-6">Check Availability</button>
      </div>
    </div>
    <!-- not availability message -->
    <div class="flex flex-row justify-between border border-[#ff6383] p-6 rounded-sm bg-[#ffa6b8]">
      <p class="text-white">sorry. any parking slot not available for you provided date and time !</p>
      <i class="fi fi-rr-circle-xmark text-white hover:text-black"></i>
    </div>
    <!-- available message with booking action button -->
    <div class="flex flex-row justify-between border border-[#4fc1bd] p-6 rounded-sm bg-[#81d3d0]">
      <p class="text-white">there are few parking slot available. don't be late !</p>
      <button class="bg-[#039591] py-1 px-4 rounded-sm text-white border-white border-2 hover:bg-[#1cafaa]">Book Now</button>
    </div>
  </div>
</template>
<script setup></script>
