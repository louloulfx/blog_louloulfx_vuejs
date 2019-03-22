<template>
  <div>
    <keep-alive>
    <component v-bind:is="component"></component>
    </keep-alive>
    <button v-on:click="component = 'form-one'">Montrez le formulaire 1</button>
    <button v-on:click="component = 'form-two'">Montrez le formulaire 2</button>
  </div>
</template>

<script>
import formOne from "./components/formOne";
import formTwo from "./components/formTwo";

export default {
  components: {
    'form-one': formOne,
    'form-two': formTwo
  },
  data() {
    return {
        component: 'form-two'
    };
  },
  methods: {
  }
};
</script>

<style>
</style>
