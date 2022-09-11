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
/* Common */
.sf-vue-background-animation {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-animation-delay: 1s;
            animation-delay: 1s;
    -ms-user-select: none;
        user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
  }
  
  /* Animation classes */
  .default {
    animation: default-animation 9s ease-in-out 2s infinite alternate;
    -moz-animation: default-animation 9s ease-in-out 2s infinite alternate;
    -webkit-animation: default-animation 9s ease-in-out 2s infinite alternate;
    -o-animation: default-animation 9s ease-in-out 2s infinite alternate;
  }
  
  .float {
    animation: float-animation 12s ease-in-out 2s infinite alternate;
    -moz-animation: float-animation 12s ease-in-out 2s infinite alternate;
    -webkit-animation: float-animation 12s ease-in-out 2s infinite alternate;
    -o-animation: float-animation 12s ease-in-out 2s infinite alternate;
  }
  
  .pulse {
    animation: pulse-animation 2s infinite;
    -moz-animation: pulse-animation 2s infinite;
    -webkit-animation: pulse-animation 2s infinite;
    -o-animation: pulse-animation 2s infinite;
  
  }
  
  /* Animations */
  @-webkit-keyframes default-animation {
    0% {
      transform: translateY(10px) translateX(0) rotate(0) scale(1);
      opacity: 0.9;
    }
  
    20% {
      transform: translateY(20px) translateX(10px) rotate(-20deg) scale(0.8);
      opacity: 0.8;
    }
  
    40% {
      transform: translateY(15px) translateX(-15px) rotate(10deg) scale(0.75);
      opacity: 0.8;
    }
  
    40% {
      transform: translateY(-15px) translateX(-25px) rotate(10deg) scale(0.5);
      opacity: 1;
    }
  
    80% {
      transform: translateY(-30px) translateX(20px) rotate(-20deg) scale(0.75);
      opacity: 0.6;
    }
  
    100% {
      transform: translateY(15px) translateX(15px) rotate(0) scale(0.95);
      opacity: 0.7;
    }
  }
  @keyframes default-animation {
    0% {
      transform: translateY(10px) translateX(0) rotate(0) scale(1);
      opacity: 0.9;
    }
  
    20% {
      transform: translateY(20px) translateX(10px) rotate(-20deg) scale(0.8);
      opacity: 0.8;
    }
  
    40% {
      transform: translateY(15px) translateX(-15px) rotate(10deg) scale(0.75);
      opacity: 0.8;
    }
  
    40% {
      transform: translateY(-15px) translateX(-25px) rotate(10deg) scale(0.5);
      opacity: 1;
    }
  
    80% {
      transform: translateY(-30px) translateX(20px) rotate(-20deg) scale(0.75);
      opacity: 0.6;
    }
  
    100% {
      transform: translateY(15px) translateX(15px) rotate(0) scale(0.95);
      opacity: 0.7;
    }
  }
  
  @-webkit-keyframes float-animation {
    0% {
      transform: translateY(-10px) translateX(0) rotate(0) scale(1);
      opacity: 0.9;
    }
  
    20% {
      transform: translateY(-20px) translateX(-10px) rotate(20deg) scale(0.8);
      opacity: 0.8;
    }
  
    40% {
      transform: translateY(-15px) translateX(15px) rotate(-10deg) scale(0.75);
      opacity: 0.8;
    }
  
    40% {
      transform: translateY(15px) translateX(25px) rotate(-10deg) scale(0.5);
      opacity: 1;
    }
  
    80% {
      transform: translateY(30px) translateX(-20px) rotate(20deg) scale(0.75);
      opacity: 0.6;
    }
  
    100% {
      transform: translateY(-15px) translateX(-15px) rotate(0) scale(0.95);
      opacity: 0.7;
    }
  }
  
  @keyframes float-animation {
    0% {
      transform: translateY(-10px) translateX(0) rotate(0) scale(1);
      opacity: 0.9;
    }
  
    20% {
      transform: translateY(-20px) translateX(-10px) rotate(20deg) scale(0.8);
      opacity: 0.8;
    }
  
    40% {
      transform: translateY(-15px) translateX(15px) rotate(-10deg) scale(0.75);
      opacity: 0.8;
    }
  
    40% {
      transform: translateY(15px) translateX(25px) rotate(-10deg) scale(0.5);
      opacity: 1;
    }
  
    80% {
      transform: translateY(30px) translateX(-20px) rotate(20deg) scale(0.75);
      opacity: 0.6;
    }
  
    100% {
      transform: translateY(-15px) translateX(-15px) rotate(0) scale(0.95);
      opacity: 0.7;
    }
  }
  
  @-webkit-keyframes pulse-animation {
    0% {
      transform: scale(0.9);
    }
  
    70% {
      transform: scale(1);
    }
  
    100% {
      transform: scale(0.9);
    }
  }
  
  @keyframes pulse-animation {
    0% {
      transform: scale(0.9);
    }
  
    70% {
      transform: scale(1);
    }
  
    100% {
      transform: scale(0.9);
    }
  }
</style>
