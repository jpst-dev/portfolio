<!-- src/views/About.vue -->
<template>
  <main class="container mx-auto my-8">
    <!-- Card Principal -->
    <div
      class="bg-gray-800 shadow-lg rounded-lg overflow-hidden md:flex p-6 max-w-6xl mx-auto"
      data-aos="fade-right"
    >
      <div
        class="md:w-1/3 flex justify-center items-center"
        data-aos="fade-down-right"
      >
        <img
          src="../assets/eu.jpeg"
          alt="JPST"
          class="w-60 h-60 object-cover rounded-lg border-2 border-[#a277ff] hover:border-[#a277ff] hover:scale-105 transition duration-300"
        />
      </div>

      <div class="md:w-2/3 mt-6 md:mt-0 md:pl-8">
        <h2 class="text-2xl text-[#a277ff] font-bold text-center md:text-left">
          Quem sou
        </h2>
        <p class="text-gray-300 mt-4 text-center md:text-left">
          Sou o João Pedro, um desenvolvedor frontend apaixonado por criar
          websites impressionantes e responsivos.
        </p>
        <p class="text-gray-300 mt-4 text-center md:text-left">
          Tenho especialização em Vue.js, React, Next.js, Nuxt.js, Vuex,
          TypeScript, e Tailwind CSS. Minha prioridade é desenvolver aplicações
          web dinâmicas, intuitivas e de rápido carregamento, sempre buscando
          aprender novas tecnologias e aprimorar minhas habilidades. Além disso,
          possuo experiência com metodologias ágeis e testes unitários, como
          Jest e Cypress.
        </p>

        <div class="flex justify-center md:justify-start mt-4 space-x-6">
          <ul class="flex space-x-4 h-16">
            <a
              data-aos="fade-right"
              href="https://www.linkedin.com/in/jpst-dev/"
              target="_blank"
              class="h-16 w-16 flex justify-center items-center rounded-lg bg-gray-950 border-2 border-gray-700 hover:border-[#a277ff] transition duration-300"
            >
              <li>
                <font-awesome-icon :icon="faLinkedin" class="w-9 h-9" />
              </li>
            </a>
            <a
              data-aos="fade-right"
              data-aos-delay="150"
              href="https://github.com/jpst-dev"
              target="_blank"
              class="h-16 w-16 flex justify-center items-center rounded-lg bg-gray-950 border-2 border-gray-700 hover:border-[#a277ff] transition duration-300"
            >
              <li>
                <font-awesome-icon :icon="faGithub" class="w-9 h-9" />
              </li>
            </a>
            <a
              data-aos="fade-right"
              data-aos-delay="200"
              href="https://gitlab.com/JPSTDev"
              target="_blank"
              class="h-16 w-16 flex justify-center items-center rounded-lg bg-gray-950 hover:text-[#a277ff] border-2 border-gray-700 hover:border-[#a277ff] transition duration-300"
            >
              <li>
                <font-awesome-icon :icon="faGitlab" class="w-9 h-9" />
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>

    <!-- Card de Habilidades -->
    <ExperiencesCard />
    <!-- <SkillsCard /> -->
  </main>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faLinkedin,
  faGithub,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons";
import ExperiencesCard from "../components/ExperiencesCard.vue";
</script>

<style scoped></style>
