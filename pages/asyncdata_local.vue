<script setup>
console.time('time');
const { data: comments } = await useAsyncData('comments',() =>
  $fetch(`http://localhost:5000/comments`)
);
console.timeEnd('time')
</script>

<template>
   <div>
    <Comment :comments="comments"></Comment> 
  </div>
</template>
