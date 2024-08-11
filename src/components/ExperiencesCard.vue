<template>
  <div>
    <div
      data-aos="fade-right"
      class="rounded-lg overflow-hidden p-6 mt-8 md:flex md:flex-row max-w-6xl mx-auto bg-gray-800 shadow-lg gap-4 h-min min-h-80"
    >
      <div
        class="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-items-center gap-4 p-4 mt-6 md:mt-0"
      >
        <article
          v-for="experience in experiences"
          :key="experience.company"
          @click="selectExperience(experience)"
          :class="{
            'h-max w-full flex flex-col justify-center items-start p-4 rounded-lg hover:border-[#a277ff] hover:scale-105 bg-gray-950 border transition duration-300 cursor-pointer': true,
            'border-[#a277ff] scale-105': selectedExperience === experience,
            'border-gray-700': selectedExperience !== experience,
          }"
        >
          <h4 class="text-xl font-semibold text-gray-300">
            {{ experience.company }}
            <br />
          </h4>
          <p class="text-sm text-gray-400">
            {{ experience.role }}
            <br />
            {{ experience.period }}
          </p>
        </article>
      </div>
      <div
        class="md:w-1/2 flex flex-col items-center md:items-start pr-6"
        data-aos="fade-down-right"
      >
        <h3
          class="text-2xl font-bold text-center md:text-left text-gray-400 mb-4"
        >
          Experiências Profissionais
        </h3>
        <p class="text-gray-300 text-center md:text-left">
          {{ experienceValue.role }}
          <br />
          {{ experienceValue.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const experiences = ref([
  {
    company: "ViaRondon",
    role: "Aprendiz de T.I",
    period: "2020 - 2022",
    description:
      "Responsável por suporte técnico e manutenção de hardware. Além disso eu era responsável pelo controle de requisições através do software SAP (ERP), além de oferecer suporte de hardware e realizar a manutenção de máquinas. Também lidava com a análise de sistemas e o monitoramento de dados, controlava o estoque e desempenhava diversas outras funções relacionadas.",
  },
  {
    company: "Mercado Eletrônico",
    role: "Programador front-end",
    period: "2022 - Atualmente",
    description:
      "Atualmente, atuo como Programador Front-End com foco em Vue.js e Nuxt, participando de projetos que envolvem desde o desenvolvimento de produtos até a componentização de interfaces. Trabalhei em dois times principais: um voltado ao produto, onde colaborei no desenvolvimento de funcionalidades essenciais, e outro dedicado à evolução do nosso design system (toolkit ou eletro design system), garantindo a consistência e reutilização de componentes em escala. Durante minha jornada, participei de diversos projetos de grande impacto, contribuindo significativamente para a qualidade e a performance dos produtos finais da empresa.",
  },
]);

const selectedExperience = ref(experiences.value[1]); // Seleciona o trabalho atual por padrão
const experienceValue = ref(selectedExperience.value);

const selectExperience = (experience: any) => {
  selectedExperience.value = experience;
  experienceValue.value = experience;
};
</script>

<style scoped></style>
