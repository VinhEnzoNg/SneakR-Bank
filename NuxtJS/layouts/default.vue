<template>
  <header>
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
      <div class="flex justify-between items-center mx-auto max-w-screen-xl">
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center">
            <img src="../img/shoes.png" class="mr-3 h-6 sm:h-9" alt="Sneaker Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">SneakR Bank</span>
          </NuxtLink>
        </div>

        <!-- Burger Menu for Mobile -->
        <div class="block lg:hidden">
          <button @click="toggleMobileMenu" class="text-gray-800 dark:text-white focus:outline-none">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div :class="mobileMenuOpen ? 'block' : 'hidden'" class="lg:hidden absolute top-16 right-0 left-0 bg-white z-50 shadow-md">
          <ul class="px-4 py-2">
            <li>
              <NuxtLink to="/" class="block py-2 text-gray-800 hover:bg-gray-100 text-center">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/filterPannel" class="block py-2 text-gray-800 hover:bg-gray-100 text-center">Filter</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/clientPannel" class="block py-2 text-gray-800 hover:bg-gray-100 text-center">Wishlist</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden lg:flex lg:w-auto lg:order-1" id="desktop-menu">
          <ul class="flex space-x-8 justify-center">
            <li>
              <NuxtLink
                to="/"
                class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                >Home</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/filterPannel"
                class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >Filter</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/clientPannel"
                class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >Wishlist</NuxtLink
              >
            </li>
          </ul>
        </div>

        <!-- Buttons -->
        <div class="flex items-center lg:order-3">
          <NuxtLink to="/login" class="bg-blue-100 border-blue-900 text-black rounded-lg py-2 px-6 text-base font-medium mx-2">
            Se connecter
          </NuxtLink>
          <NuxtLink to="/register" class="bg-blue-600 border-white text-white rounded-lg py-2 px-6 text-base font-medium mx-2">
            S'inscrire 
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobileMenuOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
  },
};


</script>

<style scoped>
/* Your component styles here */
</style>
