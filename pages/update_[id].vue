<script setup>
const route = useRoute();
const id = route.params.id;
const { data: gallery } = await useFetch(
  `https://jsonplaceholder.typicode.com/posts/${id}`
);
</script>

<template>
    <div class="card">
      <img src="http://placekitten.com/200/300" class="w-50" alt="..." />
      <div class="card-body">
        <h5 class="card-title text-truncate">{{ gallery.title }}</h5>
        <p class="card-text text-truncate">
         {{ gallery.body }}
        </p>
      </div>
    </div>
</template>
