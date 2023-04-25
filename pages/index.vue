<script setup>
import Comment from "~/components/Comment.vue";
import comments from "~/comments.json";
</script>

<template>
  <div>
    <Comment :comments="comments"></Comment>    
  </div>
</template>
