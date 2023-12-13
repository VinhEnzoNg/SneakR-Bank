<script setup>

const page = 3;
const { data: fetchPlease, pending, error } = await useFetch( `http://localhost:1337/api/sneak-rs?pagination[page]=${page}`, {
  transform: (_fetchPlease) => _fetchPlease.data,
});
console.log(toRaw(fetchPlease.value)); // Log the fetched data to the console
</script>

<template>
<div>
  <p v-if="pending">Fetching... Please (._.')</p>
  <pre v-else-if="error">Could not Sneakers: {{ error.data }}</pre>
  <div v-for="fetchPlease in fetchPlease" :key="fetchPlease.id">
      <img :src="fetchPlease.small_image_url" alt="Sneaker Image">
      <p>Brand: {{ fetchPlease.brand }}</p>
      <p>Silhouette: {{ fetchPlease.silhouette }}</p>
    </div>
</div>
<!-- <div>
  <p>
    {{ fetchPlease }}
  </p>
</div> -->
</template>

<style scoped>

</style>
