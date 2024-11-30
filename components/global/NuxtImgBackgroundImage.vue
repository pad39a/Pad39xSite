<template>
    <div :style="backgroundStyles">
        <slot />
    </div>
</template>


<script lang="ts" setup>
interface Props {
    src: string
}
const props = defineProps<Props>()
const img = useImage()
const backgroundStyles = computed(() => {
    const imgUrl = img(props.src, { format: 'webp' })
    return { backgroundImage: `url('${imgUrl}')` }
})
</script>