<template lang="pug">
.sf-vue-background-animation(
  v-bind="$attrs",
  v-if="show",
  :class="animation",
  :style="styles"
)
  slot
    svg#circle(
      xmlns="http://www.w3.org/2000/svg",
      width="60",
      height="60",
      viewBox="0 0 60 60",
      fill="none"
    )
      path(
        fill-rule="evenodd",
        clip-rule="evenodd",
        d="M30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60ZM30 48C39.9411 48 48 39.9411 48 30C48 20.0589 39.9411 12 30 12C20.0589 12 12 20.0589 12 30C12 39.9411 20.0589 48 30 48Z",
        fill="#E45447",
        fill-opacity="0.26"
      )
</template>

<script setup>
import { defineProps, computed } from 'vue';

// properties
const props = defineProps({
  animation: { type: String, default: 'default' },
  top: { type: Number, default: 18 },
  left: { type: Number, default: 58 },
  rotate: { type: Number, default: 0 },
  show: { type: Boolean, default: true },
  zIndex: { type: Number, default: 10 },
  position: { type: String, default: 'absolute' },
  transition: { type: String, default: 'all 7s ease' },
});

// valid animations
const validAnimations = ['float', 'pulse'];

// the validated animation
const animation = computed(() =>
  validAnimations.includes(props.animation) ? props.animation : 'default'
);

// computed styles
const styles = computed(() => ({
  top: `${props.top}%`,
  left: `${props.left}%`,
  rotate: `${props.rotate}deg`,
  zIndex: props.zIndex,
  position: props.position,
  transition: props.transition,
}));
</script>

<style lang="scss" scoped>
@import'./sf-vue-background-animation.scss';
</style>
