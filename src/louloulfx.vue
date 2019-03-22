<template>
  <ul>
    <li v-for="perso in persos" :key="perso"> {{ perso }} </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      persos: ["Ahri", "Jinx", "Lucian"]
    };
  }
};
</script>

<style>
</style>
