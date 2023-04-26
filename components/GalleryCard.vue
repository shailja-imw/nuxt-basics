<script setup>
const props = defineProps(["galleryData"]);

const posts = ref(props.galleryData);
console.log("props",posts);

</script>

<template>
  <div v-for="(gallery, index) of posts" class="col-md-4 col-lg-3 col-sm-10 mt-4" :key="index">
    <div class="card">
      <img src="http://placekitten.com/200/300" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title text-truncate">{{ gallery.title }}</h5>
        <p class="card-text text-truncate">
         {{ gallery.body }}
        </p>
        <NuxtLink :to="`/update_${gallery.id}`" class="btn btn-primary">Go somewhere</NuxtLink>
      </div>
    </div>
  </div>
</template>
