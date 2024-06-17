<template>
  <CardsProducts :page="pageNumber" />

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
import CardsProducts from '@/components/cardsProducts.vue';

export default {
  components: {
    CardsProducts,
  },
  data() {
    return {
      pageNumber: 1,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    decrementPage() {
      if (this.pageNumber > 1) {
        this.pageNumber--;
        this.scrollToTop();
      }
    },
    incrementPage() {
      this.pageNumber++;
      this.scrollToTop();
    },
  },
};
</script>

<style scoped>
/* Your component styles here */
</style>
