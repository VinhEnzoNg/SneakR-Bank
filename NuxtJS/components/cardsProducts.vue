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

<template>
  <div>
    <p v-if="pending">Fetching... Please (._.')</p>
    <pre v-else-if="error">Could not fetch Sneakers: {{ error.data }}</pre>
    <div v-for="sneaker in fetchPlease" :key="sneaker.id" class="card">
      <img :src="sneaker.attributes.small_image_url" alt="Sneaker Image" class="card-image">
      <p>{{ sneaker.attributes.brand }}</p>
      <p>{{ sneaker.attributes.name }}</p>
      <p>{{ sneaker.attributes.releaseYear }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  text-align: center;
}

.card-image {
  max-width: 100%;
  border-radius: 4px;
}
</style>
