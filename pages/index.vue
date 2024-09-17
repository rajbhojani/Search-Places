<template>
    <div class="container">
        <SearchBox @search="performSearch" :loading="loading"/>
        <PlaceTable :places="places" :itemsPerPage="itemsPerPage" :currentPage="currentPage" :loading="loading" />
        <div v-if="totalItems > 0" class="pagination-container">
            <Pagination :currentPage="currentPage" :totalPages="totalPages" @pageChange="changePage" />
            <input v-model.number="itemsPerPage" @change="changeItemsPerPage" type="number" min="1" max="10"
                placeholder="Items per page" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import SearchBox from '@/components/SearchBox.vue';
import PlaceTable from '~/components/PlaceTable.vue';
import Pagination from '~/components/Pagination.vue';

const query = ref('');
const places = ref([]);
const { $axios } = useNuxtApp();
const loading = ref(false);
const currentPage = ref(1);
const totalItems = ref(0);
const itemsPerPage = ref(5);
const totalPages = ref(1);

const fetchPlaces = async () => {
    loading.value = true;
    try {
        const response = await $axios.get('cities', {
            params: {
                limit: itemsPerPage.value,
                offset: (currentPage.value - 1) * itemsPerPage.value,
                namePrefix: query.value,
            },
        });
        places.value = response.data.data;
        totalItems.value = response.data.metadata.totalCount;
        totalPages.value = Math.ceil(totalItems.value / itemsPerPage.value);
    } catch (error) {
        console.error('Failed to fetch places:', error);
    } finally {
        loading.value = false;
    }
};

const performSearch = (searchQuery) => {
    query.value = searchQuery;
    fetchPlaces();
};

const changePage = (page) => {
    currentPage.value = page;
    fetchPlaces();
};

const changeItemsPerPage = () => {
    if (itemsPerPage.value > 10) {
        itemsPerPage.value = 10;
    }
    currentPage.value = 1;
    fetchPlaces();
};

onMounted(fetchPlaces);
</script>

<style scoped>
.container {
    padding: 16px;
}

.pagination-container {
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>