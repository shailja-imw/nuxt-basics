<script setup>
import Form from "~/components/Form.vue";
const route = useRoute();
const id = route.params.id;
const addUpdateForm = ref(null);
const {data:user} = await useLazyFetch(('user'), $fetch(`http://localhost:5001/users/${id}`))

console.log(user);
const userDetails = reactive({
  firstName: 'abc',
  lastName: 'kjdkn',
});

console.log(userDetails);

//emitted event from child
function onSubmit(lastName, firstName) {
  if (firstName != "" && lastName != "") {
    alert("Your new name is" + " " + lastName + " " + firstName);
  }
}

//from child component by the ref and epose
onUpdated(()=>{
   addUpdateForm.value.handleSubmit()
})

</script>

<template>
  <Form :userDetails="userDetails" @on-submit="onSubmit" ref="addUpdateForm"></Form>
</template>
