<!-- src/App.vue -->
<template>
  <div class="relative">
    <section class="relative min-h-screen" id="home">
      <div class="container mx-auto px-8 min-h-[90vh] pt-24">
        <Home />
      </div>
      <link
        href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
        rel="stylesheet"
        type="text/css"
      />
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <a
        class="arrow-wrap"
        href="#about"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <span class="arrow"></span>
      </a>
    </section>

    <Header />

    <section
      id="about"
      class="container mx-auto px-8 min-h-screen pt-20 -mt-20"
    >
      <About />
    </section>

    <section id="projects" class="container mx-auto px-8 min-h-screen pt-24">
      <Projects />
    </section>

    <section
      id="contact"
      class="container mx-auto px-8 min-h-screen pt-24 content-center"
    >
      <Contact />
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import About from "./views/About.vue";
import Home from "./views/Home.vue";
import Projects from "./views/Projects.vue";
import Contact from "./views/Contact.vue";
import { onMounted, onUnmounted } from "vue";

const handleScroll = () => {
  const topWindow = window.scrollY || 0;
  const scaledTop = topWindow * 1.5;
  const windowHeight = window.innerHeight || 0;
  let position = scaledTop / windowHeight;
  position = 1 - position;

  const arrowWrap = document.querySelector(".arrow-wrap") as HTMLElement;
  if (arrowWrap) {
    arrowWrap.style.opacity = position.toString();
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);

  // Implementar smooth scroll para âncoras
  const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
  anchorLinks.forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const target = e.target as HTMLElement; // Add a type assertion
      const href = target?.getAttribute("href"); // Use optional chaining
      if (href) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          const targetElement = document.querySelector(href) as HTMLElement;

          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
        }
      }
    });
  });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);

  const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
  anchorLinks.forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const target = e.target as HTMLElement; // Add a type assertion
      const href = target?.getAttribute("href"); // Use optional chaining
      if (href) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          const targetElement = document.querySelector(href) as HTMLElement;

          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
        }
      }
    });
  });
});
</script>

<style scoped>
.arrow-wrap {
  position: absolute;
  z-index: 1;
  left: 50%;
  bottom: 5em;
  margin-left: -5em;
  width: 10em;
  height: 10em;
  padding: 4em 2em;
  border-radius: 50%;
  font-size: 0.5em;
  display: block;
  box-shadow: 0px 0px 5px 0px #333;
  background: radial-gradient(circle, #1b2735 30%, #090a0f 100%);
}

.arrow {
  float: left;
  position: relative;
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 3em 3em 0 3em;
  border-color: #ffffff transparent transparent transparent;
  transform: rotate(360deg);
  -webkit-transform: rotate(360deg);
}

.arrow:after {
  content: "";
  position: absolute;
  top: -3.2em;
  left: -3em;
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 3em 3em 0 3em;
  border-color: #1b2735 transparent transparent transparent;
  transform: rotate(360deg);
  -webkit-transform: rotate(360deg);
}

@-webkit-keyframes arrows {
  0% {
    top: 0;
  }
  10% {
    top: 12%;
  }
  20% {
    top: 0;
  }
  30% {
    top: 12%;
  }
  40% {
    top: -12%;
  }
  50% {
    top: 12%;
  }
  60% {
    top: 0;
  }
  70% {
    top: 12%;
  }
  80% {
    top: -12%;
  }
  90% {
    top: 12%;
  }
  100% {
    top: 0;
  }
}

.arrow-wrap .arrow {
  -webkit-animation: arrows 2.8s 0.4s;
  -webkit-animation-delay: 3s;
}
</style>
