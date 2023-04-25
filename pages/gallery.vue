<script setup>
const { pending, data: gallery } = await useLazyFetch(
  "https://jsonplaceholder.typicode.com/posts"
);
</script>

<template>
    <div>
        <div v-if="pending">
            Loading ..
        </div>
    
  <div class="row" v-else>
      <GalleryCard :gallery-data="gallery"></GalleryCard>
    </div>
</div>
</template>
