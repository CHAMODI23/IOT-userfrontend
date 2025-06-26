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
                <h3 class="font-black text-3xl text-[var(--common-theme)]">Payment Details</h3>
                <p class="text-base text-black">Payment Set Up</p>
            </div>
            <!-- card info section -->
            <div class="flex flex-col gap-2">
                <div class="flex flex-col gap-5">
                    <p class="text-base text-black font-semibold">Card Type</p>
                    <div class="flex flex-row gap-10 justify-center">
                        <div class="flex flex-col gap-1 w-30 justify-center">
                            <img src="@/assets/Visa.png" alt="Logo" class="h-20 shadow-md rounded-lg" />
                            <div class="flex flex-row gap-3 justify-center items-center">
                                <input type="radio" id="Visa" name="cardType" value="true">
                                <label for="Visa">Visa</label><br>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1 w-30">
                            <img src="@/assets/Mastercard.png" alt="Logo" class="h-20 shadow-md rounded-lg" />
                            <div class="flex flex-row gap-3 justify-center items-center">
                                <input type="radio" id="Mastercard" name="cardType" value="false">
                                <label for="Mastercard">Mastercard</label><br>
                            </div>
                        </div>
                    </div> 
                </div>

                <div class="flex flex-col gap-5">
                    <p class="text-base text-black font-semibold">Card Number</p>
                    <input class="border px-4 py-1 rounded-sm focus:outline-none border-[var(--common-theme)]" type="text" placeholder="Card Number" maxlength="19">
                </div> 

                <div class="flex flex-row gap-5 mt-3 justify-between">
                    <div class="flex flex-col gap-5">
                        <p class="text-base text-black font-semibold">Expiration Date:</p>
                        <input class="border px-4 py-1 rounded-sm focus:outline-none border-[var(--common-theme)] w-[250px]" type="month" placeholder="Expiry Date" maxlength="19">
                    </div> 
                    <div class="flex flex-col gap-5">
                        <p class="text-base text-black font-semibold">CVC</p>
                        <input class="border px-4 py-1 rounded-sm focus:outline-none border-[var(--common-theme)] w-[100px]" type="number" placeholder="CVC" maxlength="19">
                    </div> 
                </div>
            </div>
            <!-- footer section -->
            <button class="bg-[var(--common-theme)] hover:bg-[var(--common-theme-light)] active:bg-[#62383b] text-white hover:text-white active:text-white w-full border-0 rounded-sm py-1" @click="router.push('/successRegister')">Next</button>
        </div>
    </div>  
</template>
<script setup>
    import router from '@/router';
</script> 