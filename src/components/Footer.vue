<template>
  <footer>
    <p>{{ copyright }} {{title}}</p>
  </footer>
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
      copyright: "louloulfx the french god"
    };
  },
  created() {
    bus.$on("titleChanged", (data) => {
      this.title = data;
    })
  }
};
</script>

<style scooped>
footer {
  background: #222;
  padding: 6px;
}
p {
  color: red;
  text-align: center;
}
</style>
