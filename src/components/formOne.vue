<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>Formulaire 1:</h3>
        <p>Voilà les infos à remplir</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required>
        <label>Ton message:</label>
        <textarea></textarea>
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">Envoyer</button>
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
    return {};
  },
  methods: {}
};
</script>

<style>
</style>
      