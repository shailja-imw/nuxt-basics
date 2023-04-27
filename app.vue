<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Site Title` : 'Site Title';
  }
})
const appConfig = useAppConfig();
console.log("theme", appConfig.theme);
const runtimeConfig = useRuntimeConfig();
console.log(runtimeConfig.public.apiBase);
const getColor = useColor();
console.log("getColor",getColor);
</script>

<template>
  <div>
      <NuxtLayout>
      <NuxtPage></NuxtPage>
      </NuxtLayout>
  </div>
</template>
