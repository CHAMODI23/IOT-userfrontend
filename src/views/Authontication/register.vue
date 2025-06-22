<template>
    <div class="flex flex-col justify-center items-center w-full h-screen border bg-[var(--common-background)]">
        <div class="flex flex-col gap-4 border rounded-sm w-auto h-auto p-4">
            <!-- heder section -->
            <div class="text-center font-semibold text-xl w-[320px]">
                <h3 class="">Register</h3>
            </div>
            <!-- personal infor section -->
            <div class="flex flex-col gap-2">
                <p class="text-sm">Personal information</p>
                <input type="text" class="border rounded-sm py-1 px-4" placeholder="Full name">
                <input type="text" class="border rounded-sm py-1 px-4" placeholder="Mobile number">
            </div>
            <!-- vehicle infor section -->
            <div class="flex flex-col gap-2">
                <p class="text-sm">vehicle information</p>
                <input type="text" class="border rounded-sm py-1 px-4" placeholder="Licen plate">
                <div class="flex flex-row justify-between">
                    <p class="">Vehicle Type</p>
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
            <button class="bg-[#3b060a] hover:bg-[#62383b] active:bg-[#62383b] text-white hover:text-white active:text-white w-full border-0 rounded-sm py-1" @click="router.push('/otp')">Next</button>
        </div>
    </div>  
</template>

<script setup>
import router from '@/router';
</script>