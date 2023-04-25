<script setup>
import Form from "~/components/Form.vue";

const addUpdateForm = ref(null);
const userDetails = reactive({
  firstName: "abc",
  lastName: "pqr",
});


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
