<script setup>
import comments from "~/comments.json";
definePageMeta({
  layout: 'default'
});
</script>

<template>
  <div>
    <Comment :comments="comments"></Comment>    
  </div>
</template>
