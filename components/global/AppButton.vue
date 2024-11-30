<script lang="ts" setup>
type ButtonColor = 'menu' | 'dark' | 'white' | 'gray' | 'thm2' | 'thm3' | 'light-gray' | 'transparent' | 'success'
const props = defineProps<{
  to?: string
  color?: ButtonColor
  size?: 'sm' | 'md' | 'lg'
  icon?: string
  iconClass?: string
}>()
const buttonElement = computed(() => {
  return props.to ? 'router-link' : 'button'
})

const colorClass = computed<string>(() => {
  switch (props.color) {
    case 'success':
      return 'bg-green-400 hover:bg-green-600 text-white before:bg-green-600 before:border-green-600'
    case 'menu':
      return 'menu-btn'
    case 'dark':
      return 'btn-dark'
    case 'white':
      return 'white-btn'
    case 'gray':
      return 'btn-gray'
    case 'thm2':
      return 'btn-thm2'
    case 'thm3':
      return 'btn-thm3'
    case 'light-gray':
      return 'btn-light-gray'
    case 'transparent':
      return 'btn-transparent'
    default:
      return ''
  }
})

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'btn-sm'
    case 'lg':
      return 'btn-lg'
    default:
      return 'btn-md'
  }
})

const classes = computed(() => {
  return `${colorClass.value} ${sizeClass.value}`
})
</script>

<template>
  <component
    :is="buttonElement" v-ripple class="ud-btn inline-flex items-center" :class="classes"
    v-bind="{
      ...(to && { to }),
    }"
  >
    <slot />
    <Icon v-if="icon" :class="iconClass ?? ''" class="inline-flex h-full items-center ml-1.5" :name="icon" />
  </component>
</template>


