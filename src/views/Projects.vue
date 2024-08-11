<!-- src/views/Home.vue -->
<template>
  <main>
    <!-- <h2 class="text-4xl font-bold text-center">Welcome to My Portfolio</h2>
    <p class="text-center text-gray-700 mt-4">
      Explore my projects and learn more about me.
    </p> -->

    <CardSlider />
    <SkillsCard />
  </main>
</template>

<script setup lang="ts">
import CardSlider from "../components/CardSlider.vue";
import SkillsCard from "../components/SkillsCard.vue";

const portfolioItems = [
  {
    title: "Project 1",
    description: "Description of project 1",
    image: "https://via.placeholder.com/400",
    link: "#",
  },
  {
    title: "Project 2",
    description: "Description of project 2",
    image: "https://via.placeholder.com/400",
    link: "#",
  },
  {
    title: "Project 3",
    description: "Description of project 3",
    image: "https://via.placeholder.com/400",
    link: "#",
  },
  // Adicione mais itens conforme necessário
];
</script>
