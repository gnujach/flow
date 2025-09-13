<script setup>
import { ref } from 'vue';

const imageUrl = ref('');
const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);
imageUrl.value = `/assets/img/d${randomNumber}.jpg`;
</script>

<template>
    <div class="flex justify-center items-center m-2">
        <img :src="imageUrl" alt="Decálogo de Buenas Prácticas" class="bg-cover rounded-2xl w-full " />
    </div>
</template>

