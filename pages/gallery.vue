<script setup>
console.time("time");
const { data: gallery, pending } = await useLazyFetch(
  "https://jsonplaceholder.typicode.com/posts"
);
console.timeEnd("time");
console.log("use lazyFetch", gallery);

</script>

<template>
  <div>
    <div v-if="pending">Loading ..</div>

    <div class="row" v-else>
      <GalleryCard :gallery-data="gallery"></GalleryCard>
    </div>
  </div>
</template>
