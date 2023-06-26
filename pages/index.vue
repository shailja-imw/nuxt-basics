<script setup>

definePageMeta({
  layout: 'default',
})
useHead({
  title:'Home',
})


console.time('time');
const { data:comments} = await useLazyFetch('http://localhost:5500/comments')
console.timeEnd('time')
</script>

<template>
  <div>
    <Comment :comments="comments"></Comment>    
  </div>
</template>
