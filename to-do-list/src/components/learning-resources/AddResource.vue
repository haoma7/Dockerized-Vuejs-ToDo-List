<template>
  <base-dialog v-if="inputIsInvalid" title="Input is Invalid" @close="confirmError">

    <template #default>
      <p>At least one input is invalid, please re-enter.</p>
    </template>

    <template #actions>
      <base-button @click="confirmError">OK</base-button>
    </template>

  </base-dialog>

  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" ref="titleInput" />
      </div>

      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="3"
          ref="descInput"
        ></textarea>
      </div>

      <div>
        <base-button type="submit">Add new activity</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
export default {
  components: { BaseButton },
  props: ['updateResource','addResource'],
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    submitData() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDescription = this.$refs.descInput.value;
     
      if (
        enteredTitle.trim() === '' ||
        enteredDescription.trim() === ''      ) {
        this.inputIsInvalid = true;
        return;
      }
  
      this.addResource(enteredTitle, enteredDescription);


    
    },
    
    confirmError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
