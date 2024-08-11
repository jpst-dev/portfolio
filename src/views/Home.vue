<template>
  <main class="container mx-auto">
    <section class="flex flex-col md:flex-row items-center">
      <div class="md:w-1/2 text-center md:text-left p-4">
        <div id="title" data-aos-duration="1000">
          <h1
            data-aos="fade-left"
            class="text-4xl md:text-6xl font-extrabold text-glow"
          >
            OLÁ, EU SOU O
          </h1>
          <h2
            data-aos="fade-right"
            class="text-4xl md:text-5xl text-gradient mt-2 text-gradient mt-2 py-2"
          >
            JOÃO PEDRO <span class="waveHand">👋🏼</span>
          </h2>
        </div>

        <Typewriter
          text="Desenvolvedor front-end especializado em Vue.js, React e Tailwind CSS."
          class="text-lg md:text-xl text-gray-300 mt-6"
        />

        <div class="flex justify-center md:justify-start mt-8 space-x-6">
          <button
            @click="downloadCV()"
            data-aos="fade-right"
            class="btn-space bg-gray-800 flex items-center text-white px-6 py-3 rounded-lg border border-gray-600 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-transform transform hover:scale-105 shadow-lg"
          >
            <i class="fas fa-download mr-2"></i> Download CV
          </button>

          <button
            data-aos="fade-left"
            class="btn-space bg-transparent flex items-center text-white px-6 py-3 rounded-lg border border-gray-600 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-transform transform hover:scale-105 shadow-lg"
            @click="contactMe()"
          >
            <i class="fas fa-envelope mr-2"></i> Entrar em contato
          </button>
        </div>
      </div>

      <div class="md:w-1/2 p-4 flex justify-center animated-custom">
        <img
          data-aos="fade-up"
          :src="astronaut"
          alt="João Pedro"
          class="rounded-full mx-auto md:mx-0"
        />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import astronaut from "../assets/astronaut.png";
import Typewriter from "../components/Typewriter.vue";
import curriculo from "../assets/curriculo.pdf";

const downloadCV = () => {
  window.open(curriculo);
};

const contactMe = () => {
  window.open("https://www.linkedin.com/in/jpst-dev/", "_blank");
};
</script>

<style scoped>
.waveHand {
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  animation-name: wave-animation;
  display: inline-block;
  font-size: 4rem;
  transform-origin: 70% 70%;
}

@keyframes wave-animation {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.text-glow {
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.8),
    0 0 20px rgba(255, 255, 255, 0.5);
}

.btn-space {
  position: relative;
  font-size: 1rem;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.btn-space::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.1),
    transparent 70%
  );
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.5s ease;
  z-index: 1;
}

.btn-space:hover::before {
  transform: translate(-50%, -50%) scale(1);
}

.btn-space:hover {
  border-color: #c0c0c0; /* Alterando a cor da borda no hover */
}

.btn-space:focus {
  outline: none;
  box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.8);
}

.btn-space i {
  color: #c0c0c0; /* Cores mais suaves para ícones */
}

.btn-space:hover i {
  color: white;
}

#title {
  font-family: "Orbitron", sans-serif;
}

.text-gradient {
  background: linear-gradient(to right, #a18cd1 0%, #fbc2eb 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  & span {
    -webkit-text-fill-color: #a277ff;
  }
}

.animated-custom {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-100px);
  }
}
</style>
