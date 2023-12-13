<template>
  <CardsProducts />

  <!-- <div>
  <p v-if="pending">Fetching... Please (._.')</p>
  <pre v-else-if="error">Could not Sneakers: {{ error.data }}</pre>
</div>
<div>
  <p>
    {{ fetchPlease }}
  </p>
</div> -->

  <div class="p-4 flex justify-center">
    <div class="flex items-center space-x-4">
      <button @click="decrementPage" class="bg-blue-500 text-white px-4 py-2 rounded">
        <img src="../img/fast-forward-double-right-arrows-symbol (1).png" alt="Decrease" />
      </button>
      <p class="text-xl font-bold">{{ pageNumber }}</p>
      <button @click="incrementPage" class="bg-green-500 text-white px-4 py-2 rounded">
        <img src="../img/fast-forward-double-right-arrows-symbol.png" alt="Increase" />
      </button>
    </div>
  </div>
</template>

<script>
// const page = 3;
export default {
  data() {
    return {
      pageNumber: 1
    };
  },
  methods: {
    decrementPage() {
      if (this.pageNumber > 1) {
        this.pageNumber--;
      }
    },
    incrementPage() {
      this.pageNumber++;
    }
  }
};

// const { data: fetchPlease, pending, error } = await useFetch( `http://localhost:1337/api/sneak-rs?pagination[page]=${this.pageNumber}`, {
//   transform: (_fetchPlease) => _fetchPlease.data,
// });
// console.log(toRaw(fetchPlease.value)); // Log the fetched data to the console


</script>

<style scoped>
/* Your component styles here */
</style>
