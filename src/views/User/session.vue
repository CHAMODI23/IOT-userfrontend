<template>
  <div class="flex flex-col gap-10">
    <h3 class="font-black text-3xl text-[var(--common-theme)]">Sessions</h3>
        <!-- upcomming events -->
        <div class="flex flex-col gap-4 rounded-md shadow-md p-5 sm:p-6 md:p-10">
            <h3 class="text-black font-bold text-lg">Upcoming Bookings</h3>
            <table class="w-full border-collapse">
                <thead class="hidden sm:table-header-group bg-orange-100">
                    <tr class="text-left">
                        <th class="pl-6 py-2 text-orange-400 uppercase text-sm">Vehicle Number</th>
                        <th class="pl-6 py-2 text-orange-400 uppercase text-sm">Entry</th>
                        <th class="pl-6 py-2 text-orange-400 uppercase text-sm">Parking Slot</th> 
                        <th class="pl-6 py-2 text-orange-400 uppercase text-sm">Reservation Fee</th>
                        <th class="pl-6 py-2 text-orange-400 uppercase text-sm"></th>
                    </tr>
                </thead>
                <tbody class="sm:table-row-group flex flex-col gap-4">
                    <tr class="sm:table-row flex flex-col sm:even:bg-gray-50 sm:odd:bg-white bg-gray-50 hover:bg-gray-100 sm:p-0 p-4 sm:rounded-none rounded-md" v-for="item in upcomming">
                        <td class="sm:table-cell flex flex-row py-2 pl-6 font-bold text-gray-400 uppercase text-sm">{{ item.vahicleId }}</td>
                        <td class="sm:table-cell flex flex-row py-2 pl-6">{{ item.enter }}</td>
                        <td class="sm:table-cell flex flex-row py-2 pl-6"><p class="bg-[var(--common-theme-two)] text-white h-10 w-10 flex items-center justify-center font-bold rounded-md">{{ item.slot }}</p></td>
                        <td class="sm:table-cell flex flex-row py-2 pl-6">Rs. {{ item.feese }}.00</td>
                        <td class="sm:table-cell flex flex-row py-2 pl-6"><button class="bg-[var(--common-theme)] hover:bg-[var(--common-theme-light)] active:bg-[#62383b] text-white w-full rounded-sm py-2">Cancel</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- ongoing events -->
        <div class="flex flex-col gap-4 rounded-md shadow-md p-10">
            <h3 class="text-base text-black font-bold text-lg">Ongoing Parkings</h3>
            <table class="w-full border-collapse">
                <thead class="sm:table-header-group hidden bg-blue-100">
                    <tr class="text-left">
                        <th class="pl-6 py-2 text-[var(--common-theme)] uppercase text-sm">Vehicle Number</th>
                        <th class="pl-6 py-2 text-[var(--common-theme)] uppercase text-sm">Entry</th>
                        <th class="pl-6 py-2 text-[var(--common-theme)] uppercase text-sm">Duration</th>
                        <th class="pl-6 py-2 text-[var(--common-theme)] uppercase text-sm">Parking slot</th>
                        <th class="pl-6 py-2 text-[var(--common-theme)] uppercase text-sm">Fee</th>
                    </tr>
                </thead>
                <tbody class="sm:table-row-group flex flex-col gap-4">
                    <tr class="sm:table-row flex flex-col sm:even:bg-gray-50 sm:odd:bg-white bg-gray-50 hover:bg-gray-100 sm:p-0 p-4 sm:rounded-none rounded-md" v-for="item in ongoin">
                        <td class="sm:table-cell flex flex-row py-2 pl-6 font-bold text-gray-400 uppercase text-sm">{{ item.vahicleId }}</td>
                        <td class="sm:table-cell flex flex-row py-2 pl-6">{{ item.enter }}</td>
                        <td class="sm:table-cell flex flex-row py-2 pl-6">{{ item.duration }}</td>
                        <td class="sm:table-cell flex flex-row py-2 pl-6"><p class="bg-[#48CF58] h-10 w-10 flex items-center justify-center text-white font-bold rounded-md">{{ item.slot }}</p></td>
                        <td class="sm:table-cell flex flex-row py-2 pl-6">Rs. {{ item.feese }}.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- upcomming events -->
        <div class="flex flex-col gap-4 rounded-md shadow-md p-10">
            <h3 class="text-base text-black font-bold text-lg">Completed Transactions</h3>
            <table class="w-full border-collapse">
                <thead class="sm:table-header-group hidden bg-gray-100">
                    <tr class="text-left">
                        <th class="pl-6 py-2 text-gray-400 uppercase text-sm">Vehicle Number</th>
                        <th class="pl-6 py-2 text-gray-400 uppercase text-sm">Entry</th>
                        <th class="pl-6 py-2 text-gray-400 uppercase text-sm">Exit</th>
                        <th class="pl-6 py-2 text-gray-400 uppercase text-sm">Parking Slot</th>
                        <th class="pl-6 py-2 text-gray-400 uppercase text-sm">Fee</th>
                    </tr>
                </thead>
                <tbody class="sm:table-row-group flex flex-col gap-4">
                    <tr class="sm:table-row flex flex-col sm:even:bg-gray-50 sm:odd:bg-white bg-gray-50 hover:bg-gray-100 sm:p-0 p-4 sm:rounded-none rounded-md" v-for="item in completed">
                        <td class="sm:table-cell flex flex-row py-2 pl-6 font-bold text-gray-400 uppercase text-sm">{{ item.vahicleId }}</td>
                        <td class="sm:table-cell flex flex-row py-2 pl-6">{{ item.enter }}</td>
                        <td class="sm:table-cell flex flex-row py-2 pl-6">{{ item.leave }}</td>
                        <td class="sm:table-cell flex flex-row py-2 pl-6"><p class="bg-[#00000080] h-10 w-10 flex items-center justify-center text-white font-bold rounded-md">{{ item.slot }}</p></td>
                        <td class="sm:table-cell flex flex-row py-2 pl-6">Rs. {{ item.feese }}.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script setup>
import {onMounted, ref } from 'vue';

const upcomming = ref([])
const ongoin = ref([])
const completed = ref([])

const allActivities = ref([
    {
        'vahicleId' : 'spNB-2020',
        'enter' : '2025-06-20 20:00',
        'leave' : '2025-06-20 22:00',
        'feese' : 380,
        'slot' : 'E01',
        'status' : 'completed'
    },
    {
        'vahicleId' : 'spNB-2021',
        'enter' : '2025-06-21 18:00',
        'leave' : '2025-06-21 22:00',
        'feese' : 580,
        'slot' : 'E01',
        'status' : 'completed'
    },
    {
        'vahicleId' : 'spNB-2020',
        'enter' : '2025-06-24 15:00',
        'leave' : '-',
        'feese' : 980,
        'slot' : 'E01',
        'status' : 'upcomming'
    },
    {
        'vahicleId' : 'spNB-2020',
        'enter' : '2025-06-22 20:00',
        'duration' : '2h 30min',
        'feese' : 380,
        'slot' : 'E01',
        'status' : 'ongoing'
    },
])

onMounted(() => {
    for (let i = 0; i < allActivities.value.length; i++) {
        console.log(allActivities.value[i])
        if (allActivities.value[i].status == 'ongoing') {
            ongoin.value.push(allActivities.value[i])   
        }else if(allActivities.value[i].status == 'upcomming'){
            upcomming.value.push(allActivities.value[i])
        }else if(allActivities.value[i].status == 'completed'){
            completed.value.push(allActivities.value[i])
        }
        
    }
})

</script>