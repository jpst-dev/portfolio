<template>
  <div>
    <div
      data-aos="fade-up"
      class="rounded-lg overflow-hidden p-6 mt-8 md:flex md:flex-row max-w-6xl mx-auto bg-gray-800 shadow-lg gap-4"
    >
      <div
        class="md:w-1/2 flex flex-col items-center md:items-start pr-6"
        data-aos="fade-down-right"
      >
        <h3
          class="text-2xl font-bold text-center md:text-left text-gray-400 mb-4"
        >
          Conhecimentos
        </h3>
        <p class="text-gray-300 text-center md:text-left">
          {{ skillDescription }}
        </p>
      </div>

      <div
        class="md:w-1/2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-4 mt-6 md:mt-0"
      >
        <article
          data-aos="fade-left"
          @mouseover="
            showDescription(
              'React é uma biblioteca JavaScript para criar interfaces de usuário interativas. Ela facilita a construção de componentes reutilizáveis e o gerenciamento eficiente do estado da aplicação.'
            )
          "
          @mouseout="hideDescription"
          class="h-24 w-24 flex justify-center items-center rounded-lg bg-gray-950 hover:scale-105 hover:text-[#a277ff] border-2 border-gray-700 hover:border-[#a277ff] transition duration-300"
        >
          <font-awesome-icon :icon="faReact" class="w-14 h-14" />
        </article>
        <article
          data-aos="fade-left"
          @mouseover="
            showDescription(
              'Vue.js é um framework JavaScript para construir interfaces de usuário. Ele é fácil de aprender e usar, permitindo criar aplicações com uma estrutura modular e clara.'
            )
          "
          @mouseout="hideDescription"
          class="h-24 w-24 flex justify-center items-center rounded-lg bg-gray-950 hover:scale-105 hover:text-[#a277ff] border-2 border-gray-700 hover:border-[#a277ff] transition duration-300"
        >
          <font-awesome-icon :icon="faVuejs" class="w-14 h-14" />
        </article>
        <article
          data-aos="fade-left"
          @mouseover="
            showDescription(
              'JavaScript é a principal linguagem de programação para adicionar funcionalidades interativas às páginas da web. É usada para criar desde animações simples até aplicativos web complexos.'
            )
          "
          @mouseout="hideDescription"
          class="h-24 w-24 flex justify-center items-center rounded-lg bg-gray-950 hover:scale-105 hover:text-[#a277ff] border-2 border-gray-700 hover:border-[#a277ff] transition duration-300"
        >
          <font-awesome-icon :icon="faJs" class="w-14 h-14" />
        </article>
        <article
          data-aos="fade-left"
          @mouseover="
            showDescription(
              'HTML5 é a versão mais recente do HTML, a linguagem de marcação usada para estruturar e exibir conteúdo na web. Ela introduz novos elementos e APIs para melhorar a semântica e a funcionalidade das páginas web.'
            )
          "
          @mouseout="hideDescription"
          class="h-24 w-24 flex justify-center items-center rounded-lg bg-gray-950 hover:scale-105 hover:text-[#a277ff] border-2 border-gray-700 hover:border-[#a277ff] transition duration-300"
        >
          <font-awesome-icon :icon="faHtml5" class="w-14 h-14" />
        </article>
        <article
          data-aos="fade-left"
          @mouseover="
            showDescription(
              'CSS3 é a versão mais recente do CSS, a linguagem usada para estilizar e criar layouts para páginas web. Ele inclui novos recursos como gradientes, animações e flexbox para criar designs mais avançados e responsivos.'
            )
          "
          @mouseout="hideDescription"
          class="h-24 w-24 flex justify-center items-center rounded-lg bg-gray-950 hover:scale-105 hover:text-[#a277ff] border-2 border-gray-700 hover:border-[#a277ff] transition duration-300"
        >
          <font-awesome-icon :icon="faCss3" class="w-14 h-14" />
        </article>
        <article
          data-aos="fade-left"
          @mouseover="
            showDescription(
              'Next.js é um framework para React que facilita a criação de sites rápidos e aplicações web, oferecendo recursos como renderização do lado do servidor e geração de sites estáticos.'
            )
          "
          @mouseout="hideDescription"
          class="h-24 w-24 flex justify-center items-center rounded-lg bg-gray-950 hover:scale-105 hover:text-[#a277ff] border-2 border-gray-700 hover:border-[#a277ff] transition duration-300"
        >
          <img src="../assets/nextjs.svg" alt="" class="w-14 h-14 icon" />
        </article>
        <article
          data-aos="fade-left"
          @mouseover="
            showDescription(
              'Nuxt.js é um framework para Vue.js que simplifica a criação de aplicações web e sites estáticos, com suporte para renderização do lado do servidor.'
            )
          "
          @mouseout="hideDescription"
          class="h-24 w-24 flex justify-center items-center rounded-lg bg-gray-950 hover:scale-105 hover:text-[#a277ff] border-2 border-gray-700 hover:border-[#a277ff] transition duration-300"
        >
          <img src="../assets/nuxt.svg" alt="" class="w-14 h-14 icon" />
        </article>
        <article
          data-aos="fade-left"
          @mouseover="
            showDescription(
              'Vuex é uma biblioteca para gerenciar o estado global em aplicações Vue.js, ajudando a manter os dados da aplicação organizados e acessíveis a partir de qualquer componente.'
            )
          "
          @mouseout="hideDescription"
          class="h-24 w-24 flex justify-center items-center rounded-lg bg-gray-950 hover:scale-105 hover:text-[#a277ff] border-2 border-gray-700 hover:border-[#a277ff] transition duration-300"
        >
          <img src="../assets/vuex.svg" alt="" class="w-14 h-14 icon" />
        </article>
        <article
          data-aos="fade-left"
          @mouseover="
            showDescription(
              'Node.js é um ambiente que permite executar JavaScript no servidor, facilitando a criação de aplicativos de rede rápidos e escaláveis, como servidores e APIs.'
            )
          "
          @mouseout="hideDescription"
          class="h-24 w-24 flex justify-center items-center rounded-lg bg-gray-950 hover:scale-105 hover:text-[#a277ff] border-2 border-gray-700 hover:border-[#a277ff] transition duration-300"
        >
          <font-awesome-icon :icon="faNodeJs" class="w-14 h-14" />
        </article>
        <article
          data-aos="fade-left"
          @mouseover="
            showDescription(
              'Tailwind CSS é um framework CSS que usa classes utilitárias para estilizar elementos de forma rápida e flexível, facilitando a criação de designs responsivos e personalizados.'
            )
          "
          @mouseout="hideDescription"
          class="h-24 w-24 flex justify-center items-center rounded-lg bg-gray-950 hover:scale-105 hover:text-[#a277ff] border-2 border-gray-700 hover:border-[#a277ff] transition duration-300"
        >
          <img src="../assets/tailwind.svg" alt="" class="w-14 h-14 icon" />
        </article>
        <article
          data-aos="fade-left"
          @mouseover="
            showDescription(
              'Sass é uma linguagem que estende o CSS com recursos adicionais como variáveis e funções, tornando o código de estilo mais organizado e fácil de manter.'
            )
          "
          @mouseout="hideDescription"
          class="h-24 w-24 flex justify-center items-center rounded-lg bg-gray-950 hover:scale-105 hover:text-[#a277ff] border-2 border-gray-700 hover:border-[#a277ff] transition duration-300"
        >
          <img src="../assets/sass.svg" alt="" class="w-14 h-14 icon" />
        </article>
        <article
          data-aos="fade-left"
          @mouseover="
            showDescription(
              'Cypress é uma ferramenta de testes end-to-end para aplicações web. Ela permite escrever testes de forma fácil e rápida, fornecendo uma interface interativa para depuração e verificação do comportamento da aplicação.'
            )
          "
          @mouseout="hideDescription"
          class="h-24 w-24 flex justify-center items-center rounded-lg bg-gray-950 hover:scale-105 hover:text-[#a277ff] border-2 border-gray-700 hover:border-[#a277ff] transition duration-300"
        >
          <img src="../assets/cypress.svg" alt="" class="w-14 h-14 icon" />
        </article>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faReact,
  faVuejs,
  faNodeJs,
  faJs,
  faHtml5,
  faCss3,
} from "@fortawesome/free-brands-svg-icons";

import { ref } from "vue";

const skillDescription = ref(
  "Explore minhas habilidades e conhecimentos técnicos."
);

const showDescription = (description: string) => {
  skillDescription.value = description;
};

const hideDescription = () => {
  skillDescription.value =
    "Explore minhas habilidades e conhecimentos técnicos.";
};
</script>

<style scoped>
article {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}

a {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}

article:hover .icon {
  filter: invert(60%) sepia(45%) saturate(1841%) hue-rotate(232deg)
    brightness(94%) contrast(70%);
}
</style>
