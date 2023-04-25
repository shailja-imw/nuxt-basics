<script setup>
const { pending,data: users } = await useAsyncData(
  "users",
  () => $fetch("https://jsonplaceholder.typicode.com/users"),
  {
    transform: (users) =>
      users.map((user) => ({
        id: user.id,
        name: user.name,
        username: user.username,
        address: `${user.address.street} ${user.address.city} ${user.address.zipcode} `,
      })),
  }
);
</script>

<template>

</template>
