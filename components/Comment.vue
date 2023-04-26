<script setup>
const props = defineProps(["comments"]);
const isShow = ref(false);
</script>
<template>
  <div>
    <div v-for="(comment, index) of props.comments" :key="index">
        <div class="border-comment align-items-center px-3 py-2" >
          <div class="d-flex align-items-center">
          <img
            src="~/assets/img/nuxt.webp"
            alt="Discover Nuxt 3"
            class="img-fuild img-avatar"
          />
          <NuxtLink
                :to="`/${comment._id}/update`"
                class="nav-link active"
                aria-current="page"
                ><h4 class="cursor-pointer mb-0 mx-3">{{ comment.auther }}</h4></NuxtLink> 
          </div>
          <div class="col-11 offset-1">
            {{ comment.comment }}
          </div>
        </div>
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
  height: 48px;
  width: 44px;
}
a{
  text-decoration: none;
  color: grey;
}
a:hover{
  color: black;
}
</style>
