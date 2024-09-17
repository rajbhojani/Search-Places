<template>
    <div class="place-table">
        <div v-if="loading" class="spinner">Loading...</div>
        <table v-else>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Place Name</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="!places.length">
                    <td colspan="3">Start searching</td>
                </tr>
                <tr v-for="(place, index) in places" :key="place.id">
                    <td>{{ index + 1 +((currentPage-1)*itemsPerPage)}}</td>
                    <td>{{ place.name }}</td>
                    <td class="flag">
                        <img :src="`https://flagsapi.com/${place.countryCode}/shiny/24.png`" alt="flag" />
                        <span>{{ place.country }}</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps(['places', 'loading','currentPage','itemsPerPage']);

const tableData = ref([]);
watch(() => props.places, (newPlaces) => {
    tableData.value = newPlaces;
});
</script>

<style scoped>
.place-table {
    margin-top: 16px;
}

.place-table table {
    width: 100%;
    border-collapse: collapse;
}

.place-table th,
.place-table td {
    padding: 8px;
    border: 1px solid rgb(222, 226, 230);
}

.place-table th {
    font-weight: 700;
}

.spinner {
    text-align: center;
    font-size: 16px;
}

.flag{
    display: flex;
     align-items: center;
}
</style>