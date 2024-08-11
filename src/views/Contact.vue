<!-- src/pages/Contact.vue -->
<template>
  <div
    data-aos="fade-up"
    class="max-w-4xl mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-lg"
  >
    <h2 class="text-3xl font-bold mb-6 text-center">Entre em contato</h2>
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label for="name" class="block text-lg font-medium mb-1">Nome</label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          placeholder="Seu Nome"
          required
          class="w-full p-2 border border-gray-700 rounded bg-gray-900 text-white"
        />
      </div>
      <div>
        <label for="email" class="block text-lg font-medium mb-1">Email</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          placeholder="Seu Email"
          required
          class="w-full p-2 border border-gray-700 rounded bg-gray-900 text-white"
        />
      </div>
      <div>
        <label for="subject" class="block text-lg font-medium mb-1"
          >Assunto</label
        >
        <input
          id="subject"
          v-model="form.subject"
          type="text"
          placeholder="Assunto"
          required
          class="w-full p-2 border border-gray-700 rounded bg-gray-900 text-white"
        />
      </div>
      <div>
        <label for="message" class="block text-lg font-medium mb-1"
          >Mensagem</label
        >
        <textarea
          id="message"
          v-model="form.message"
          placeholder="Sua Mensagem"
          required
          rows="4"
          class="w-full p-2 border border-gray-700 rounded bg-gray-900 text-white"
        ></textarea>
      </div>
      <button
        type="submit"
        class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
      >
        Enviar Mensagem
      </button>
      <p
        v-if="message"
        :class="{ 'text-green-400': success, 'text-red-400': !success }"
        class="mt-4"
      >
        {{ message }}
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import emailjs from "emailjs-com";

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const message = ref("");
const success = ref(true);

const handleSubmit = () => {
  const serviceID = "service_0qbobeh";
  const templateID = "template_3ea10dr";
  const userID = "nVbX6jB3Swz9NBgHF";

  emailjs.send(serviceID, templateID, form.value, userID).then(
    () => {
      message.value = "Mensagem enviada com sucesso!";
      success.value = true;
      form.value = { name: "", email: "", subject: "", message: "" };
    },
    () => {
      message.value = "Erro ao enviar mensagem. Tente novamente.";
      success.value = false;
    }
  );
};
</script>

<style scoped>
form input,
form textarea {
  transition: background-color 0.3s, border-color 0.3s;
}

form input:focus,
form textarea:focus {
  background-color: #1f2937;
  border-color: #3b82f6;
}
</style>
