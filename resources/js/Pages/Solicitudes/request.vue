<template>
    <Head title="Log in" />

    <jet-authentication-card>
        <template #logo>
            <jet-authentication-card-logo />
        </template>

        <jet-validation-errors class="mb-4" />

        <form @submit.prevent="recaptcha">
            <div class="mt-4">
                <jet-label for="email" value="Correo Electrónico" />
                <jet-input
                    id="email"
                    type="email"
                    class="mt-1 block w-full"
                    v-model="form.email"
                    required
                    autofocus
                />
            </div>
            <div>
                <jet-label for="email" value="Número de Folio" class="pt-2" />
                <jet-input
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.folio"
                    required
                    minlength="7"
                    maxlength="12"
                    pattern="[Dd][Rr][Ii][Ii]-\d{2,4}"
                />
            </div>
            <jet-input-error
                :message="form.errors.captcha_token"
                class="mt-2"
            />
            <jet-button
                class="mt-4"
                :class="{ 'opacity-25': form.processing }"
                :disabled="form.processing"
            >
                Buscar
            </jet-button>
        </form>
    </jet-authentication-card>
</template>

<script setup>
import { useForm } from "@inertiajs/inertia-vue3";
import JetAuthenticationCard from "@/Jetstream/AuthenticationCard.vue";
import JetAuthenticationCardLogo from "@/Jetstream/AuthenticationCardLogo.vue";
import JetInputError from "@/Jetstream/InputError";
import JetButton from "@/Jetstream/Button.vue";
import JetInput from "@/Jetstream/Input.vue";
import JetCheckbox from "@/Jetstream/Checkbox.vue";
import JetLabel from "@/Jetstream/Label.vue";
import JetValidationErrors from "@/Jetstream/ValidationErrors.vue";
import { Head, Link } from "@inertiajs/inertia-vue3";
import { onMounted } from "vue";

import { VueReCaptcha, useReCaptcha } from "vue-recaptcha-v3";

onMounted(() => {
    setTimeout(() => {
        const recaptcha = this.$recaptcha;
        recaptcha.showBadge();
    }, 5000);
});

const form = useForm({
    folio: "",
    email: "",
    message: null,
    captcha_token: null,
});
// console.log($this.recaptch);
const { executeRecaptcha, recaptchaLoaded } = useReCaptcha();
const recaptcha = async () => {
    await recaptchaLoaded();
    form.captcha_token = await executeRecaptcha("login");
    console.log(form.captcha_token);
    submit();
};

function submit() {
    form.post(route("requests/login"), {
        preserveScroll: true,
        onSuccess: () => console.log("success"),
    });
}
</script>
