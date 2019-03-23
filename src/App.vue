<template>
<add-blog></add-blog></template>

<script>
import addBlog from './components/addBlog'
export default {
  components: {
    'add-blog': addBlog
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
body{
  margin: 0;
  font-family:'Nunito SemiBold';
}
</style>
