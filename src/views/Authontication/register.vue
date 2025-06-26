<template>
    <div class="flex flex-row  gap-4 justify-center items-center w-full h-screen p-5 bg-[var(--common-background)]">
        <!-- logo part -->
        <div class="flex flex-col p-3 rounded-sm flex-1 max-w-md h-150 bg-[var(--common-theme)]">
            <div class="flex flex-col justify-center items-center h-full">
                <img src="@/assets/easyParkLogo.svg" alt="Logo" class="max-w-full max-h-full" />
                <h1 class="text-[var(--common-theme-two)] tracking-wide text-4xl" style="font-family: 'Anton', sans-serif;">EASY PARK</h1>
                <p class="text-white tracking-wide text-1xl" style="font-family: 'Anton', sans-serif;">FIND. PARK. GO</p>
            </div>
        </div>
        
        <!-- form part -->
        <div class="flex flex-col p-3 pl-10 pr-10 gap-10 shadow-sm rounded-sm flex-1 max-w-md h-150 justify-center">
            <!-- header section -->
            <div class="flex flex-col text-left font-semibold gap-2 text-xl w-[320px]">
                <h3 class="font-black text-3xl text-[var(--common-theme)]">SIGN UP</h3>
            </div>
            <!-- personal infor section -->
            <div class="flex flex-col gap-5">
                <p class="text-base text-black font-semibold">Personal Information</p>
                <input type="text" placeholder="Full Name" class="border px-4 py-1 rounded-sm focus:outline-none border-[var(--common-theme)]">
                <input type="text" placeholder="Mobile Number" class="border px-4 py-1 rounded-sm focus:outline-none border-[var(--common-theme)]" @input="onNumberInput">
            </div>

            <!-- vehicle infor section -->
            <div class="flex flex-col gap-5">
                <p class="text-base text-black font-semibold">Vehicle Information</p>
                <input type="text" class="border rounded-sm py-1 px-4" placeholder="License Plate Number">
                <div class="flex flex-row justify-between">
                    <p class="">Vehicle Type:</p>
                    <div class="flex flex-row gap-2">
                        <div class="flex flex-row gap-1">
                            <input type="radio" id="radio1" name="electric" value="true">
                            <label for="radio1">Disability</label><br>
                        </div>
                        <div class="flex flex-row gap-1">
                            <input type="radio" id="radio2" name="electric" value="false">
                            <label for="radio2">Electric</label><br>  
                        </div>
                    </div>
                </div>
            </div>
            <!-- footer section -->
            <button class="bg-[var(--common-theme)] hover:bg-[var(--common-theme-light)] active:bg-[#62383b] text-white hover:text-white active:text-white w-full border-0 rounded-sm py-1" @click="router.push('/otp')">Next</button>
        </div>
    </div>  
</template>

<script setup>
import router from '@/router';

// for phone number 
const onNumberInput = (event) => {
  event.target.value = event.target.value.replace(/[^0-9]/g, '');
};
</script>