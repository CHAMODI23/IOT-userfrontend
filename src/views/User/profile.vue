<template>
    <div class="flex flex-col gap-10">
        <h3 class="font-black text-3xl text-[var(--common-theme)]">Profile</h3>
        <!-- personal data -->
        <div class="flex flex-col gap-4 rounded-md shadow-md p-10">
            <div class="flex flex-row justify-between items-center">
                <h3 class="text-base text-black font-bold text-lg">Personal Details</h3>
                <PencilSquareIcon  class="h-5 w-5 cursor-pointer hover:text-[var(--common-theme)]" />
            </div>
            <table class="w-full border-collapse">
                <tbody class="sm:table-row-group flex flex-col gap-4" >
                    <tr class="sm:table-row flex flex-col sm:odd:bg-gray-50 sm:even:bg-white bg-gray-50 hover:bg-gray-100 sm:p-0 p-4 sm:rounded-none rounded-md" v-for="(value, key) in profileData">
                        <td class="sm:table-cell w-1/3 flex flex-row py-2 pl-6 font-bold text-gray-400 uppercase text-sm">{{ key }}</td>
                        <td class="sm:table-cell w-2/3 flex flex-row py-2 pl-6">{{ value }}</td>
                    </tr>
                </tbody>
            </table>
            <button class="bg-[var(--common-theme)] hover:bg-[var(--common-theme-light)] active:bg-[#62383b] text-white hover:text-white active:text-white w-[200px] ml-auto pl-10 pr-10 border-0 rounded-sm py-1">Reset Password</button>
        </div>

        <!-- vehicle data -->
        <div class="flex flex-col gap-4 rounded-md shadow-md p-10">
            <div class="flex flex-row justify-between items-center">
                <h3 class="text-base text-black font-bold text-lg">Vehicle Details</h3>
                <PencilSquareIcon  class="h-5 w-5 cursor-pointer hover:text-[var(--common-theme)]" />
            </div>
            <table class="w-full border-collapse">
                <thead class="sm:table-header-group hidden bg-gray-100">
                    <tr class="text-left">
                        <th class="min-w-[130px] w-[300px] pl-6 py-2 text-gray-400 uppercase text-sm">Register Number</th>
                        <th class="min-w-[130px] w-[150px] pl-6 py-2 text-gray-400 uppercase text-sm">Vehicle type</th>
                        <th class="min-w-[130px] w-[150px] pl-6 py-2 text-gray-400 uppercase text-sm">Added Date</th>
                    </tr>
                </thead>
                <tbody class="sm:table-row-group flex flex-col gap-4" >
                    <tr class="sm:table-row flex flex-col sm:even:bg-gray-50 sm:odd:bg-white bg-gray-50 hover:bg-gray-100 sm:p-0 p-4 sm:rounded-none rounded-md" v-for="item in vehicleData">
                        <td class="sm:table-cell flex flex-row py-2 pl-6">{{ item.regNumber }}</td>
                        <td class="sm:table-cell flex flex-row py-2 pl-6">{{ item.vehicleType }}</td>
                        <td class="sm:table-cell flex flex-row py-2 pl-6">{{ item.addedDate }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- payment data -->
        <div class="flex flex-col gap-4 rounded-md shadow-md p-10">
            <div class="flex flex-row justify-between items-center">
                <h3 class="text-base text-black font-bold text-lg">Payment Details</h3>
                <PencilSquareIcon  class="h-5 w-5 cursor-pointer hover:text-[var(--common-theme)]" />
            </div>
            <table class="w-full border-collapse">
                <tbody class="sm:table-row-group flex flex-col gap-4" >
                    <tr class="sm:table-row flex flex-col sm:odd:bg-gray-50 sm:even:bg-white bg-gray-50 hover:bg-gray-100 sm:p-0 p-4 sm:rounded-none rounded-md" v-for="(value, key) in paymentData">
                        <td class="sm:table-cell w-1/3 flex flex-row py-2 pl-6 font-bold text-gray-400 uppercase text-sm">{{ key }}</td>
                        <td class="sm:table-cell w-2/3 flex flex-row py-2 pl-6">{{ value }}</td>
                    </tr>
                </tbody>
            </table>
            <button class="bg-[var(--common-theme)] hover:bg-[var(--common-theme-light)] active:bg-[#62383b] text-white hover:text-white active:text-white w-[200px] ml-auto pl-10 pr-10 border-0 rounded-sm py-1">Remove Card</button>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { PencilSquareIcon } from '@heroicons/vue/24/solid'

const profileData = ref({
    'Name' : 'Gayashan Gamage',
    'Mobile Number' : '0787389913',
    'Account Create' : '2025-06-12 6:00',
})

const vehicleData = ref([
    {
        'regNumber' : 'spNB-2020',
        'vehicleType' : 'general',
        'addedDate' : '2025-06-12 6:00'
    }
])

const paymentData = ref({
    'Card Type' : 'VISA',
    'Card Number' : 'XXX XXX XX9 123',
    'Expiry Date' : '2026-07'
})
</script>