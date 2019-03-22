<template>
  <header>
    <h1 v-on:click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
import { bus } from "../main.js";

export default {
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      title: "jvous nik au pluriel"
    };
  },
  methods: {
    changeTitle() {
      //   this.$emit('changeTitle', 'je vous baise tous un par un')
      this.title = "je vous baise tous un par un";
      bus.$emit("titleChanged", "je vous baise tous un par un");
    }
  }
};
</script>

<style scooped>
header {
  background: grey;
  padding: 15px;
}
h1 {
  color: #222;
  text-align: center;
}
</style>
