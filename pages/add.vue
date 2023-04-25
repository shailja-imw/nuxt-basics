<script setup>
import Form from '~/components/Form.vue';
const userDetails = reactive({
    firstName:'',
    lastName:''
})

//emitted event from child
function onSubmit(lastName, firstName) {
  if (firstName != "" && lastName != "") {
    alert("Welcome!! " + " " + lastName + " " + firstName);
  }
}

const route = useRouter();

console.log("route",route);
</script>

<template>
    <div>{{ userDetails.lName }}</div>
    <Form :userDetails='userDetails' @on-submit="onSubmit"></Form>
</template>
