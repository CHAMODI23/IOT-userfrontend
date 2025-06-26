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
            <div class="flex flex-col text-center gap-5">
                <div class="flex flex-col justify-center items-center w-full">
                    <img src="@/assets/easyParkLogo.svg" alt="Logo" class="w-30" />
                </div>
                <h3 class="font-black text-3xl text-[var(--common-theme)]">Successful Signup!</h3>
                
                <div class="flex flex-col text-center gap-0">
                    <p class="text-base text-black font-semibold">Thank you for registering with us!</p>
                    <p class="text-base text-black">Account Created Successfully Login to Continue..</p>
                </div>
            </div>
            <!-- footer section -->
            <div class="">
                <button class="bg-[var(--common-theme)] hover:bg-[var(--common-theme-light)] active:bg-[#62383b] text-white hover:text-white active:text-white w-full border-0 rounded-sm py-1" @click="router.push('/user/profile')">Log In</button>
            </div>
        </div>
    </div>
</template>
<script setup>
    import router from '@/router';
</script> 