import { watch } from "vue";
// import { Inertia } from "@inertiajs/inertia";
import { router } from "@inertiajs/vue3";
export function usePrevalidate(form, { method, url }) {
    let touchedFields = new Set();
    let needsValidation = false;
    watch(
        () => form.data(),
        (newData, oldData) => {
            let changedFields = Object.keys(newData).filter(
                (field) => newData[field] !== oldData[field]
            );
            needsValidation = true;
            touchedFields = new Set([...changedFields, ...touchedFields]);
        }
    );

    function validate() {
        if (!needsValidation) return;
        needsValidation = false;
        Inertia.visit(url, {
            method: method,
            data: {
                ...form.data(),
                prevalidate: true,
            },
            preserveState: true,
            preserveScroll: true,
            onSuccess: () => form.clearErrors(),
            onError: (errors) => {
                Object.keys(errors)
                    .filter((field) => !touchedFields.has(field))
                    .forEach((field) => delete errors[field]);
                form.clearErrors().setError(errors);
            },
        });
    }
    return { validate };
}
