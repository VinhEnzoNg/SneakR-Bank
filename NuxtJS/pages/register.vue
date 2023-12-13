<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white max-w-md w-full p-8 rounded shadow-md">
      <div class="mb-6 text-center">
        <h3 class="text-2xl font-bold">Register</h3>
        <p>Please enter your credentials to register.</p>
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
          placeholder="Password"
          class="w-full py-2 px-4 mb-4 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <input
          id="fullname"
          type="text"
          placeholder="Full Name"
          class="w-full py-2 px-4 mb-4 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          class="w-full py-2 px-4 bg-gray-800 hover:bg-blue-700 text-white font-bold rounded-md"
        >
          Register
        </button>
        <p id="error" class="text-red-500 mt-2"></p>
        <p class="mt-4 text-sm flex items-center justify-center">
          <span>Already have an account? </span>
          <router-link to="/login" class="text-gray-800 ml-1">
            Connect to yours
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
