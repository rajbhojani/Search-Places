<template>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span>Page {{ currentPage }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    currentPage: Number,
    totalPages: Number,
  });
  
  const emit = defineEmits(['pageChange']);
  
  function prevPage() {
    if (props.currentPage > 1) {
      emit('pageChange', props.currentPage - 1);
    }
  }
  
  function nextPage() {
    if (props.currentPage < props.totalPages) {
      emit('pageChange', props.currentPage + 1);
    }
  }
  </script>
  
  <style scoped>
  .pagination {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 16px;
  }
  </style>
  