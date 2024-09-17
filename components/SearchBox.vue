<template>
    <div class="search-box-container">
        <input v-model="query" @input="onInput" @keydown.enter="debouncedSearch" @focus="onFocus"
            v-keyboard-shortcut="focusInput" @blur="onBlur" :class="{ 'active': isActive, 'disabled': isDisabled }"
            type="text" placeholder="Search for places..." />
        <div class="shortcut-indicator">CMD + /</div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import debounce from 'lodash/debounce'
const query = ref('');
const isActive = ref(false);
const isDisabled = ref(false);
const emit = defineEmits();
const props = defineProps(['loading']);

const focusInput = () => {
    onFocus()
}

function search() {
    if(!props.loading){
        emit('search', query.value);
    } 
}

const debouncedSearch = debounce(search, 300)

function onFocus() {
    isActive.value = true;
}

function onBlur() {
    isActive.value = false;
}

function onInput() {}
</script>

<style scoped>
.search-box-container {
    position: relative;
    display: inline-block;
}

.search-box-container input {
    width: 241px;
    height: 38px;
    font-size: 16px;
    color: rgb(33, 37, 41);
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(206, 212, 218);
    padding: 6px 12px;
    border-radius: 4px;
    transition: border-color 0.2s, box-shadow 0.2s;
    outline: none;
}

.search-box-container input.active {
    border-color: #7952b3;
    box-shadow: 0 0 0 3px rgba(121, 82, 179, 0.25);
}

.search-box-container input.disabled {
    background-color: rgb(233, 236, 239);
}

.shortcut-indicator {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    font-size: 12px;
    border: 1px solid rgb(222, 226, 230);
    border-radius: 2px;
    height: 24px;
    padding: 0 4px;
    background-color: #f8f9fa;
    color: rgb(116, 120, 123);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
