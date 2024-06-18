<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
    <div v-for="sneaker in fetchPlease" :key="sneaker.id" class="card mx-2 transition-transform transform hover:scale-105">
      <img :src="sneaker.attributes.small_image_url" alt="Sneaker Image" class="card-image">
      <p class="font-bold">{{ sneaker.attributes.brand }}</p>
      <p class="text-sm">{{ sneaker.attributes.silhouette }}</p>
      <p class="text-sm">{{ sneaker.attributes.colorway }}</p>
      <p class="text-sm">Valeur estimée : ${{ sneaker.attributes.estimatedMarketValue }}</p>
      <p class="text-xs">{{ sneaker.attributes.releaseYear }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useFetch } from '#app';  // Import correct des composables Nuxt

const props = defineProps(['page']);
const fetchPlease = ref([]);
const pending = ref(false);
const error = ref(null);

const fetchData = async (page) => {
  pending.value = true;
  try {
    const { data } = await useFetch(`http://localhost:1337/api/sneak-rs?pagination[page]=${page}`, {
      transform: (data) => data.data,
    });
    fetchPlease.value = data.value;
  } catch (err) {
    error.value = err;
  } finally {
    pending.value = false;
  }
};

watch(() => props.page, (newPage) => {
  fetchData(newPage);
});

fetchData(props.page);
</script>

<style scoped>
.card {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.card-image {
  max-width: 100%;
  border-radius: 4px;
  transition: transform 0.3s ease;
}

.card:hover .card-image {
  transform: scale(1.05);
}
</style>
