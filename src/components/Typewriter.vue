<!-- src/components/Typewriter.vue -->
<template>
  <div id="title" class="relative inline-block">
    <!-- Texto a ser digitado -->
    <p class="text-xl text-gray-300 mt-4">{{ displayText }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

// Definição das props
const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  speed: {
    type: Number,
    default: 50, // Velocidade do efeito typewriter em milissegundos
  },
});

const displayText = ref("");
const textLength = ref(0);

// Inicia o efeito typewriter e o cursor piscante
onMounted(() => {
  // Intervalo para o efeito typewriter
  const typingInterval = setInterval(() => {
    if (textLength.value < props.text.length) {
      displayText.value += props.text[textLength.value];
      textLength.value += 1;
    } else {
      clearInterval(typingInterval);
    }
  }, props.speed);

  // Limpar intervalos quando o componente for destruído
  onUnmounted(() => {
    clearInterval(typingInterval);
  });
});
</script>

<style scoped></style>
