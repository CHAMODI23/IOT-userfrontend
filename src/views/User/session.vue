<template>
    <div class="flex flex-col gap-10">
        <h1 class="font-semibold text-2xl">Sessions</h1>
        <!-- upcomming events -->
        <div class="flex flex-col gap-4 rounded-sm">
            <h3 class="font-semibold text-lg text-gray-400">Upcomming bookings</h3>
            <table class="w-full border-collapse">
                <thead class="sm:table-header-group hidden bg-gray-100">
                    <tr class="text-left">
                        <th class="min-w-[130px] w-[300px] pl-6 py-2 text-gray-400 uppercase text-sm">Vehicle number</th>
                        <th class="min-w-[130px] w-[150px] pl-6 py-2 text-gray-400 uppercase text-sm">Enter</th>
                        <th class="min-w-[130px] w-[150px] pl-6 py-2 text-gray-400 uppercase text-sm">Leave</th>
                        <th class="min-w-[130px] w-[150px] pl-6 py-2 text-gray-400 uppercase text-sm">Parking slot</th>
                        <th class="min-w-[130px] w-[150px] pl-6 py-2 text-gray-400 uppercase text-sm">Free</th>
                    </tr>
                </thead>
                <tbody class="sm:table-row-group flex flex-col gap-4" >
                    <tr class="sm:table-row flex flex-col sm:border-1 sm:border-b sm:border-gray-200 border-2 border-gray-200 sm:odd:bg-gray-50 sm:even:bg-white bg-gray-50 hover:bg-gray-100 sm:p-0 p-4 sm:rounded-none rounded-md" v-for="item in upcomming">
                        <td class="sm:table-cell flex flex-row py-2 pl-6 font-bold text-gray-400 uppercase text-sm">{{ item.vahicleId }}</td>
                        <td class="sm:table-cell flex flex-row py-2 pl-6">{{ item.enter }}</td>
                        <td class="sm:table-cell flex flex-row py-2 pl-6">{{ item.leave }}</td>
                        <td class="sm:table-cell flex flex-row py-2 pl-6">{{ item.slot }}</td>
                        <td class="sm:table-cell flex flex-row py-2 pl-6">Rs. {{ item.feese }}.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- ongoing events -->
        <div class="flex flex-col gap-4 rounded-sm">
            <h3 class="font-semibold text-lg text-gray-400">Ongoing parkings</h3>
            <table class="w-full border-collapse">
                <thead class="sm:table-header-group hidden bg-gray-100">
                    <tr class="text-left">
                        <th class="min-w-[130px] w-[300px] pl-6 py-2 text-gray-400 uppercase text-sm">Vehicle number</th>
                        <th class="min-w-[130px] w-[150px] pl-6 py-2 text-gray-400 uppercase text-sm">Enter</th>
                        <th class="min-w-[130px] w-[150px] pl-6 py-2 text-gray-400 uppercase text-sm">Leave</th>
                        <th class="min-w-[130px] w-[150px] pl-6 py-2 text-gray-400 uppercase text-sm">Parking slot</th>
                        <th class="min-w-[130px] w-[150px] pl-6 py-2 text-gray-400 uppercase text-sm">Free</th>
                    </tr>
                </thead>
                <tbody class="sm:table-row-group flex flex-col gap-4" >
                    <tr class="sm:table-row flex flex-col sm:border-1 sm:border-b sm:border-gray-200 border-2 border-gray-200 sm:odd:bg-gray-50 sm:even:bg-white bg-gray-50 hover:bg-gray-100 sm:p-0 p-4 sm:rounded-none rounded-md" v-for="item in ongoin">
                        <td class="sm:table-cell flex flex-row py-2 pl-6 font-bold text-gray-400 uppercase text-sm">{{ item.vahicleId }}</td>
                        <td class="sm:table-cell flex flex-row py-2 pl-6">{{ item.enter }}</td>
                        <td class="sm:table-cell flex flex-row py-2 pl-6">{{ item.leave }}</td>
                        <td class="sm:table-cell flex flex-row py-2 pl-6">{{ item.slot }}</td>
                        <td class="sm:table-cell flex flex-row py-2 pl-6">Rs. {{ item.feese }}.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- upcomming events -->
        <div class="flex flex-col gap-4 rounded-sm">
            <h3 class="font-semibold text-lg text-gray-400">Compleated trasactions</h3>
            <table class="w-full border-collapse">
                <thead class="sm:table-header-group hidden bg-gray-100">
                    <tr class="text-left">
                        <th class="min-w-[130px] w-[300px] pl-6 py-2 text-gray-400 uppercase text-sm">Vehicle number</th>
                        <th class="min-w-[130px] w-[150px] pl-6 py-2 text-gray-400 uppercase text-sm">Enter</th>
                        <th class="min-w-[130px] w-[150px] pl-6 py-2 text-gray-400 uppercase text-sm">Leave</th>
                        <th class="min-w-[130px] w-[150px] pl-6 py-2 text-gray-400 uppercase text-sm">Parking slot</th>
                        <th class="min-w-[130px] w-[150px] pl-6 py-2 text-gray-400 uppercase text-sm">Free</th>
                    </tr>
                </thead>
                <tbody class="sm:table-row-group flex flex-col gap-4" >
                    <tr class="sm:table-row flex flex-col sm:border-1 sm:border-b sm:border-gray-200 border-2 border-gray-200 sm:odd:bg-gray-50 sm:even:bg-white bg-gray-50 hover:bg-gray-100 sm:p-0 p-4 sm:rounded-none rounded-md" v-for="item in completed">
                        <td class="sm:table-cell flex flex-row py-2 pl-6 font-bold text-gray-400 uppercase text-sm">{{ item.vahicleId }}</td>
                        <td class="sm:table-cell flex flex-row py-2 pl-6">{{ item.enter }}</td>
                        <td class="sm:table-cell flex flex-row py-2 pl-6">{{ item.leave }}</td>
                        <td class="sm:table-cell flex flex-row py-2 pl-6">{{ item.slot }}</td>
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
        'leave' : '2025-06-24 22:00',
        'feese' : 980,
        'slot' : 'E01',
        'status' : 'upcomming'
    },
    {
        'vahicleId' : 'spNB-2020',
        'enter' : '2025-06-22 20:00',
        'leave' : '2025-06-22 22:00',
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