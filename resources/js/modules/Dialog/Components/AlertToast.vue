<template>
    <!-- start toasted -->
    <div id="toast-message-cta"
         class="p-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-400 mx-auto"
         role="alert" v-show="isOpenCreate">
        <div class="flex">
            <LightningBoltIcon class="h-5 w-5"/>
            <div class="ml-3 text-sm font-normal">
                <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Alert</span>
                <div class="mb-2 text-sm font-normal">Nueva actualización realizada
                </div>
            </div>
            <button id="btnClose" type="button" v-bind="$attrs" @click="closeToasted"
                    class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                    data-dismiss-target="#toast-message-cta" aria-label="Close">
                <span class="sr-only">Close</span>
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clip-rule="evenodd"></path>
                </svg>
            </button>
        </div>
    </div>
    <!-- fin toasted-->
</template>

<script setup>
import {
    LightningBoltIcon
} from "@heroicons/vue/outline";
import {computed} from "vue";
import {useStore} from "vuex";

const store = useStore();
const isOpenCreate = computed(
    () => store.getters["solicitudesStore/getUpdateRequest"]
);

const closeToasted = () => {
    store.dispatch("solicitudesStore/closeModalUpdateRequest");
    console.log("Ocultar")
}
</script>

<style scoped>

</style>
