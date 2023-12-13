<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
      <div class="mb-6 text-center">
        <h3 class="text-2xl font-semibold">LOGIN</h3>
        <p>Please enter your credentials to login.</p>
      </div>
      <form id="login-form">
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
        <button
          type="submit"
          class="w-full py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
        >
          Login
        </button>
        <p id="error" class="text-red-500 mt-2"></p>
        <p class="text-sm text-gray-600 mt-4">
          Not registered ? <NuxtLink to="/register">Create an account</NuxtLink>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  // Add your page options here
};
</script>

<style scoped>
/* Add your page styles here */
</style>
