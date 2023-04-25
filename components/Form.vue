<script setup>
const props = defineProps(["userDetails"]);

const lastName = ref(props.userDetails.lastName);
const firstName = ref(props.userDetails.firstName);

//with Emit (parent to child)
const emit = defineEmits({
  onSubmit: (firstName, lastName) => {
    if (firstName && lastName) {
      return true;
    } else {
      alert("please enter the first name and last name");
      return false;
    }
  },
});
function submitForm(firstName, lastName) {
  emit("onSubmit", firstName, lastName);
}


//ref from child to parent
function handleSubmit(firstName, lastName) {
  if (firstName && lastName) {
    alert("Hello " + " " + lastName + " " + firstName);
    refreshNuxtData()
  } else {
    alert("please enter the first name and last name");
  }
}

defineExpose({handleSubmit})
</script>

<template>
  <div class="container">
    <div class="input-control">
      <label>First Name :</label> <input v-model="firstName" />
    </div>
    <div class="input-control">
      <label>Last Name: </label><input v-model="lastName" />
    </div>
    <div class="input-control">
      <!-- <button
        class="btn-success"
        @click.prevent="submitForm(lastName, firstName)"
      >
        Submit
      </button> -->
      <button
        class="btn btn-success"
        @click.prevent="handleSubmit(lastName, firstName)"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<style>

.input-control {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
input {
  width: 25%;
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid grey;
}
label {
  text-transform: capitalize;
  display: flex;
  align-items: center;
  padding: 0px 4px;
}
</style>
