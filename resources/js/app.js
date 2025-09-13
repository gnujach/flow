import "./bootstrap";
import "../css/app.css";

import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ZiggyVue } from "../../vendor/tightenco/ziggy/dist/vue.m";
import store from "./store";
// import "@themesberg/flowbite";
import { VueReCaptcha, useReCaptcha } from "vue-recaptcha-v3";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText ||
    "Flujo de Trabajo";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue")
        ),
    progress: {
        color: "#29d",
        showSpinner: true,
        delay: 250,
        includeCSS: true,
    },
    setup({ el, App, props, plugin }) {
        const captcheKey = props.initialPage.props.recaptcha_site_key;
        return (
            createApp({ render: () => h(App, props) })
                .use(plugin)
                .use(store)
                .use(VueReCaptcha, {
                    siteKey: captcheKey,
                    loaderOptions: {
                        autoHideBadge: true,
                    },
                })
                .use(ZiggyVue, Ziggy)
                // .mixin({ methods: { route } })
                .mount(el)
        );
    },
});

// InertiaProgress.init({ color: "#4B5563" });
