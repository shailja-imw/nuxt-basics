<script setup>

console.time('time');
const { data: comments } = await useFetch(
  `http://localhost:5000/comments`,
  {server:false}
);
console.timeEnd('time')
</script>

<template>
   <div>
    <Comment :comments="comments"></Comment>    
  </div>
</template>
