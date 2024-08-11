<template>
  <header
    class="bg-gray-800 text-white p-6 sticky top-0 w-full z-50 h-20 flex items-center justify-between"
  >
    <!-- Ícone do menu hamburguer -->
    <div class="flex items-center space-x-4">
      <button @click="toggleMenu" class="lg:hidden">
        <!-- Ícone do menu -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    <nav class="hidden lg:flex justify-center flex-grow">
      <ul class="flex space-x-8 text-lg font-semibold">
        <li>
          <a
            href="#home"
            :class="{
              'text-gray-400': activeSection === 'home',
              'text-white': activeSection !== 'home',
            }"
            @click="setActiveSection('home')"
            >Home</a
          >
        </li>
        <li>
          <a
            href="#about"
            :class="{
              'text-gray-400': activeSection === 'about',
              'text-white': activeSection !== 'about',
            }"
            @click="setActiveSection('about')"
            >About</a
          >
        </li>
        <li>
          <a
            href="#projects"
            :class="{
              'text-gray-400': activeSection === 'projects',
              'text-white': activeSection !== 'projects',
            }"
            @click="setActiveSection('projects')"
            >Projects</a
          >
        </li>
        <li>
          <a
            href="#contact"
            :class="{
              'text-gray-400': activeSection === 'contact',
              'text-white': activeSection !== 'contact',
            }"
            @click="setActiveSection('contact')"
            >Contact</a
          >
        </li>
      </ul>
    </nav>

    <!-- Menu dropdown -->
    <div
      v-if="isMenuOpen"
      class="absolute top-0 left-0 w-full h-screen bg-gray-900 flex flex-col items-center justify-center space-y-8 text-2xl"
    >
      <button @click="toggleMenu" class="absolute top-4 right-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <ul class="space-y-4">
        <li>
          <a
            @click="
              setActiveSection('home');
              toggleMenu();
            "
            href="#home"
            :class="{
              'text-gray-400': activeSection === 'home',
              'text-white': activeSection !== 'home',
            }"
            >Home</a
          >
        </li>
        <li>
          <a
            @click="
              setActiveSection('about');
              toggleMenu();
            "
            href="#about"
            :class="{
              'text-gray-400': activeSection === 'about',
              'text-white': activeSection !== 'about',
            }"
            >About</a
          >
        </li>
        <li>
          <a
            @click="
              setActiveSection('projects');
              toggleMenu();
            "
            href="#projects"
            :class="{
              'text-gray-400': activeSection === 'projects',
              'text-white': activeSection !== 'projects',
            }"
            >Projects</a
          >
        </li>
        <li>
          <a
            @click="
              setActiveSection('contact');
              toggleMenu();
            "
            href="#contact"
            :class="{
              'text-gray-400': activeSection === 'contact',
              'text-white': activeSection !== 'contact',
            }"
            >Contact</a
          >
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const isMenuOpen = ref(false);
const activeSection = ref<string>("home"); // Default active section

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function setActiveSection(section: string) {
  activeSection.value = section;
}

function handleScroll() {
  const sections = ["home", "about", "projects", "contact"];
  const scrollY = window.scrollY;

  sections.forEach((section) => {
    const element = document.querySelector(`#${section}`) as HTMLElement | null;

    if (element) {
      const { offsetTop, offsetHeight } = element;
      if (scrollY >= offsetTop - 50 && scrollY < offsetTop + offsetHeight) {
        activeSection.value = section;
      }
    }
  });
}
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
nav ul li a {
  padding: 10px 20px;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;
}

nav ul li a:hover {
  background-color: #6b7280;
  color: white;
}

nav ul li a.text-gray-400 {
  color: rgb(162 119 255); /* Cor de texto para o item ativo */
}
</style>
