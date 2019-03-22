<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>Formulaire 2:</h3>
        <p>Entre les détails de connexion</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required>
        <input type="password" placeholder="password" required>
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">Login</button>
      </div>
    </form-helper>
  </div>
</template>
<script>
import formHelper from "./formHelper";
export default {
  components: {
    "form-helper": formHelper
  },
  data() {
    return {
    };
  },
  methods: {}
};
</script>

<style>
</style>