require("./bootstrap");

import {createApp, h} from "vue";
import {createInertiaApp} from "@inertiajs/inertia-vue3";
import {InertiaProgress} from "@inertiajs/progress";
import store from "./store";
import "@themesberg/flowbite";
import {VueReCaptcha, useReCaptcha} from 'vue-recaptcha-v3'

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Flujo de Trabajo";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => import(`./Pages/${name}.vue`),
    // resolve: (name) => require(`./Pages/${name}.vue`),
    setup({el, app, props, plugin}) {
        const captcheKey = props.initialPage.props.recaptcha_site_key;
        return createApp({render: () => h(app, props)})
            .use(plugin)
            .use(store)
            .use(VueReCaptcha, {
                siteKey: captcheKey,
                loaderOptions: {
                    autoHideBadge: true

                }
            })
            .mixin({methods: {route}})
            .mount(el);
    },
});

InertiaProgress.init({color: "#4B5563"});
