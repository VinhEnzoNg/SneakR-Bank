<template>
  <header>
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
      <div
        class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"
      >
        <NuxtLink to="/" class="flex items-center">
          <img
            src="../img/shoes.png"
            class="mr-3 h-6 sm:h-9"
            alt="Sneaker Logo"
          />
          <span
            class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
            >SneakR Bank</span
          >
        </NuxtLink>
        <div class="flex items-center lg:order-2">
          <NuxtLink
            to="/login"
            class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
          >
            Log in
          </NuxtLink>
        </div>
        <div
          class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul
            class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
          >
            <li>
              <NuxtLink
                to="/"
                class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                >Home</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/filterPannel"
                class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >Filter</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/clientPannel"
                class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >WishList</NuxtLink
              >
            </li>
          </ul>
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
  // Your component options here
};
</script>

<style scoped></style>
