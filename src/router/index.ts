import { createRouter, createWebHistory } from "vue-router";

// Importar componentes de página
import Home from "../views/Home.vue";
import About from "../views/About.vue";

// Definir as rotas
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  // Adicione mais rotas conforme necessário
];

// Criar o roteador
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
