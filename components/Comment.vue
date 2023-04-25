<script setup>
const props = defineProps(["comments"]);
</script>
<template>
  <div>
    <div v-for="(comment, index) of props.comments" :key="index">
      <NuxtLink :to="`/${comment._id}/update`">
        <div class="d-flex border-comment align-items-center px-3 py-2">
          <img
            src="~/assets/img/nuxt.webp"
            alt="Discover Nuxt 3"
            class="img-fuild img-avatar"
          />
          <p class="cursor-pointer mb-0 mx-3">{{ comment.auther }}</p>
        </div>
      </NuxtLink>
      <Comment
        v-if="comment.comments"
        class="sub-comment"
        :comments="comment.comments"
      />
    </div>
  </div>
</template>

<style>
.sub-comment {
  padding-left: 24px;
}
.border-comment {
  border: 1px solid grey;
  margin: 12px 4px;
}
.cursor-pointer {
  cursor: pointer;
}
.img-avatar {
  height: 24px;
  width: 20px;
}
</style>
