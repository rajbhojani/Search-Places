import { defineNuxtPlugin } from '#app';
import axios from 'axios';

export default defineNuxtPlugin(nuxtApp => {
    const runtimeConfig = useRuntimeConfig()
    const axiosInstance = axios.create({
        baseURL: 'https://wft-geo-db.p.rapidapi.com/v1/geo/',
        headers: {
            'x-rapidapi-key': runtimeConfig.public.RAPIDAPI_KEY,
            'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
        },
    });
    nuxtApp.provide('axios', axiosInstance);
});
