<template>
  <div id="single-blog">
    <h1 v-rainbow>{{ blog.title }}</h1>
    <article>{{ blog.content }}</article>
    <p>Auteur: {{ blog.auteur }}</p>
    <ul>
      <li v-for="category in blog.categories" :key="category">{{category}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  created() {
    this.$http
      .get("https://vuejs1-be24d.firebaseio.com/posts/" + this.id + ".json")
      .then(function(data) {
        return data.json();
      })
      .then(function(data) {
        this.blog = data;
      });
  },
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color =
          "#" +
          Math.random()
            .toString()
            .slice(2, 8);
      }
    }
  }
};
</script>
<style>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
}
</style>