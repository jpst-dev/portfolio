<template>
  <swiper
    :slides-per-view="1"
    :loop="true"
    :pagination="true"
    :modules="[Pagination]"
    class="swiper-container mt-4"
  >
    <swiper-slide
      v-for="(experience, index) in experiences"
      :key="index"
      class="swiper-slide"
    >
      <div
        :class="['exp-card', { expanded: expandedIndex === index }]"
        @click="handleClick(index)"
      >
        <div
          data-aos="fade-up"
          class="exp-image"
          :style="{ backgroundImage: `url(${experience.image})` }"
        >
          <div
            class="w-full h-full flex flex-col items-center justify-center"
            :class="{ 'bg-black bg-opacity-50': expandedIndex === index }"
          >
            <div class="experience-title">{{ experience.title }}</div>
            <div
              class="experience-desc max-w-3xl"
              v-if="expandedIndex === index"
            >
              {{ experience.description }}
            </div>
            <a
              :href="experience.private ? undefined : experience.link"
              target="_blank"
              :class="{
                'border-gray-700 text-gray-300 hover:text-gray-300':
                  experience.private,
              }"
              class="mt-4 text-[#a277ff] z-10 hover:underline hover:scale-105 transition duration-300 hover:text-[#a277ff] border-2 border-[#a277ff] rounded-lg px-4 py-2"
              :style="{ display: expandedIndex === index ? '' : 'none' }"
            >
              {{ experience.private ? "Projeto privado" : "Ver projeto" }}
            </a>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import bethehero from "../assets/bethehero.png";
import thunderskins from "../assets/thunderskins.jpg";
import meetsync from "../assets/meetsync.png";

import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const experiences = [
  {
    title: "Be The Hero",
    image: bethehero,
    private: false,
    link: "https://github.com/jpst-dev/be-the-hero",
    description:
      "Projeto Be The Hero feito com React e NodeJs. O intuito desse projeto é criar um site onde ONGs possam se registrar e de maneira facil e rapida conseguir um meio de arrecadaçao.",
  },
  {
    title: "Thunder Skins",
    image: thunderskins,
    private: true,
    description:
      "Estou participando do desenvolvimento desse projeto, um site de compra e venda de skins de Counter-Strike, onde estamos criando uma plataforma completa para os usuários realizarem transações seguras e rápidas. O projeto envolve a implementação de todo o fluxo de compra e venda de skins, tanto no front-end quanto no back-end.",
  },
  {
    title: "MeetSync",
    image: meetsync,
    private: true,
    description:
      "Estou trabalhando no desenvolvimento de um sistema de agendamento online SaaS (Software as a Service) que facilita a gestão de compromissos para empresas e profissionais. A plataforma permite que os clientes escolham o serviço desejado e agendem o horário diretamente através do sistema, simplificando todo o processo de marcação de compromissos.",
  },
];

const expandedIndex = ref<number | null>(null);

const handleClick = (index: number) => {
  expandedIndex.value = expandedIndex.value === index ? null : index;
};
</script>

<style scoped lang="scss">
::v-deep .swiper-pagination-bullet {
  background-color: #fff;
  opacity: 1;

  &-active {
    scale: 1.2;
    background-color: #a277ff !important;
  }
}
.swiper-container {
  width: 100%;
  height: 320px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
}

.exp-card {
  height: 100%;
  position: relative;
  transition: all 0.4s ease-in-out;
  overflow: hidden;
  cursor: pointer;
}

.exp-image {
  margin: 0 15px 60px;
  width: 100%;
  height: 320px;
  display: flex;
  display: -webkit-flex;
  align-items: flex-end;
  -webkit-align-items: flex-end;
  background: #343434 no-repeat center center / cover;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    position: absolute;
    z-index: 0;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  }
}

.exp-card.expanded {
  width: 100%;
  box-shadow: 6px 10px 10px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 6px 10px 10px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
}

.exp-card.expanded .experience-desc {
  position: relative;
  z-index: 1;
  transform: translateY(0);
  padding: 16px 24px 16px 16px;
}

.experience-title {
  position: relative;
  color: #a277ff;
  font-size: 1.5rem;
  font-weight: 700;
  padding: 10px;
  z-index: 1;
}

.exp-card:not(.expanded) {
  border-radius: 16px;
  width: 80%;
}
</style>
