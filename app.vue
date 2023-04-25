<script setup>
import Simple from "~/layout/Simple.vue";
const appConfig = useAppConfig();
console.log("theme", appConfig.theme);
const runtimeConfig = useRuntimeConfig();
console.log(runtimeConfig.public.apiBase);
</script>

<template>
  <div>
    <Simple>
      <NuxtPage></NuxtPage>
    </Simple>
  </div>
</template>
