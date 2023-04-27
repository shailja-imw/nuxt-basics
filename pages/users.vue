<script setup>
const { pending, data: users } = await useLazyAsyncData("users",
  () => $fetch("https://jsonplaceholder.typicode.com/users"),
  {
    transform: (users) =>
      users.map((user) => ({
        id: user.id,
        name: user.name,
        username: user.username,
        address: `${user.address.street} ${user.address.city} ${user.address.zipcode} `,
      })),
  },
  
);
console.log("users",users);
</script>

<template>
  <div>
    <div v-if="pending">Loading...</div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">name</th>
          <th scope="col">username</th>
          <th scope="col">address</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) of users" :key="index">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.name }}</td>
          <td>@{{ user.username }}</td>
          <td>{{ user.address }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
