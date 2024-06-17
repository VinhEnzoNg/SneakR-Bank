<template>
  <div>
    <CardsProducts :page="pageNumber" />

    <div class="p-4 flex justify-center">
      <div class="flex items-center space-x-4">

        <div class="flex space-x-2">
          <template v-if="pageNumber > 1">
            <button @click="setPage(pageNumber - 1)" class="bg-gray-200 text-gray-600 px-4 py-2 rounded">
              Précédent
            </button>
          </template>

          <!-- Affichage des boutons de pagination selon la logique spécifiée -->
          <template v-for="n in visiblePages" :key="n">
            <button @click="setPage(n)" :class="{ 'bg-gray-300': pageNumber === n }" class="px-4 py-2 rounded">
              {{ n }}
            </button>
          </template>

          <template v-if="pageNumber < totalPages">
            <button @click="setPage(pageNumber + 1)" class="bg-gray-200 text-gray-600 px-4 py-2 rounded">
              Suivant
            </button>
          </template>
        </div>

      </div>
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
      totalPages: 20, // Remplacez par le nombre total de pages obtenu dynamiquement
    };
  },
  computed: {
    visiblePages() {
      const pageNumbers = [];
      let start = Math.max(1, this.pageNumber - 2);
      let end = Math.min(this.totalPages, start + 4);

      if (end - start < 4) {
        start = Math.max(1, end - 4);
      }

      for (let i = start; i <= end; i++) {
        pageNumbers.push(i);
      }

      return pageNumbers;
    },
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
      if (this.pageNumber < this.totalPages) {
        this.pageNumber++;
        this.scrollToTop();
      }
    },
    setPage(page) {
      this.pageNumber = page;
      this.scrollToTop();
    },
  },
};
</script>

<style scoped>
/* Your component styles here */
</style>
