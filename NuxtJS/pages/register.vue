<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white max-w-md w-full p-8 rounded shadow-md">
      <div class="mb-6 text-center">
        <h3 class="text-2xl font-bold">S'inscrire </h3>
        <p>Veuillez saisir vos données d'identification pour vous inscrire.</p>
      </div>
      <form id="register-form" @submit.prevent="registerUser">
        <input
          id="email"
          type="text"
          placeholder="Email"
          class="w-full py-2 px-4 mb-4 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <input
          id="password"
          type="password"
          placeholder="Mot de passe"
          class="w-full py-2 px-4 mb-4 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <input
          id="fullname"
          type="text"
          placeholder="Nom complet"
          class="w-full py-2 px-4 mb-4 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          class="w-full py-2 px-4 bg-gray-800 hover:bg-blue-700 text-white font-bold rounded-md"
        >
          Register
        </button>
        <p id="error" class="text-red-500 mt-2"></p>
        <p class="mt-4 text-sm ">
          <span>Vous avez déjà un compte ?</span>
          <router-link to="/login" class="text-gray-800 ml-1">
            Se connecter à la vôtre
          </router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  // Your component options here
};
</script>

<style scoped>
/* Your component styles here */
</style>
