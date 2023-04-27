<script setup>

const description = ref('My amazing Gallery site.')
useHead({
  meta: [
    { name: 'description', content: description }
  ],
  title:'Gallery'
})


console.time("time");
const { data: gallery, pending } = await useLazyFetch(
  "https://jsonplaceholder.typicode.com/posts"
);
console.timeEnd("time");

</script>

<template>
  <div>
    <div v-if="pending">Loading ..</div>

    <div class="row" v-else>
      <GalleryCard :gallery-data="gallery"></GalleryCard>
    </div>
  </div>
</template>
