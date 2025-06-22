<template>
    <div class="flex flex-col gap-10">
        <h1 class="font-semibold text-2xl">My Profile</h1>
        <!-- personal data -->
        <div class="flex flex-col gap-4 rounded-sm">
            <h3 class="font-semibold text-lg text-gray-400">Personal Details</h3>
            <table class="w-full border-collapse">
                <tbody class="sm:table-row-group flex flex-col gap-4" >
                    <tr class="sm:table-row flex flex-col sm:border-1 sm:border-b sm:border-gray-200 border-2 border-gray-200 sm:odd:bg-gray-50 sm:even:bg-white bg-gray-50 hover:bg-gray-100 sm:p-0 p-4 sm:rounded-none rounded-md" v-for="(value, key) in profileData">
                        <td class="sm:table-cell flex flex-row py-2 pl-6 font-bold text-gray-400 uppercase text-sm">{{ key }}</td>
                        <td class="sm:table-cell flex flex-row py-2 pl-6">{{ value }}</td>
                    </tr>
                </tbody>
            </table>
            <button class="border py-1 px-4 rounded-sm bg-[var(--button-one)] border-[var(--button-one)] text-white active:bg-[var(--button-two)] w-fit ml-auto">Reset Password</button>
        </div>

        <!-- vehicle data -->
        <div class="flex flex-col gap-4 rounded-md">
            <h3 class="font-semibold text-lg text-gray-400">Vehicle Details</h3>
            <table class="w-full border-collapse">
                <thead class="sm:table-header-group hidden bg-gray-100">
                    <tr class="text-left">
                        <th class="min-w-[130px] w-[300px] pl-6 py-2 text-gray-400 uppercase text-sm">Register Number</th>
                        <th class="min-w-[130px] w-[150px] pl-6 py-2 text-gray-400 uppercase text-sm">Vehicle type</th>
                        <th class="min-w-[130px] w-[150px] pl-6 py-2 text-gray-400 uppercase text-sm">Added Date</th>
                    </tr>
                </thead>
                <tbody class="sm:table-row-group flex flex-col gap-4" >
                    <tr class="sm:table-row flex flex-col sm:border-1 sm:border-b sm:border-gray-200 border-2 border-gray-200 sm:even:bg-gray-50 sm:odd:bg-white bg-gray-50 hover:bg-gray-100 sm:p-0 p-4 sm:rounded-none rounded-md" v-for="item in vehicleData">
                        <td class="sm:table-cell flex flex-row py-2 pl-6">{{ item.regNumber }}</td>
                        <td class="sm:table-cell flex flex-row py-2 pl-6">{{ item.vehicleType }}</td>
                        <td class="sm:table-cell flex flex-row py-2 pl-6">{{ item.addedDate }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- payment data -->
        <div class="flex flex-col gap-4 rounded-sm">
            <h3 class="font-semibold text-lg text-gray-400">Payment Details</h3>
            <table class="w-full border-collapse">
                <tbody class="sm:table-row-group flex flex-col gap-4" >
                    <tr class="sm:table-row flex flex-col sm:border-1 sm:border-b sm:border-gray-200 border-2 border-gray-200 sm:odd:bg-gray-50 sm:even:bg-white bg-gray-50 hover:bg-gray-100 sm:p-0 p-4 sm:rounded-none rounded-md" v-for="(value, key) in paymentData">
                        <td class="sm:table-cell flex flex-row py-2 pl-6 font-bold text-gray-400 uppercase text-sm">{{ key }}</td>
                        <td class="sm:table-cell flex flex-row py-2 pl-6">{{ value }}</td>
                    </tr>
                </tbody>
            </table>
            <button class="border py-1 px-4 rounded-sm bg-[var(--button-one)] border-[var(--button-one)] text-white active:bg-[var(--button-two)] w-fit ml-auto">Remove Card</button>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

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
    'Bank' : 'Commercial bank'
})
</script>