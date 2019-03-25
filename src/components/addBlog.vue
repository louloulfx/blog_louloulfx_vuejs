<template>
  <div id="add-blog">
    <h2>Ajout d'un nouveau poste blog</h2>
    <form v-if="!submitted">
      <label>Titre du Blog:</label>
      <input type="text" v-model.lazy="blog.title" required>
      <label>Contenu</label>
      <textarea v-model.lazy="blog.content"></textarea>
      <div id="checkboxes">
        <label>Dieu</label>
        <input type="checkbox" value="dieu" v-model="blog.categories">
        <label>Louloulfx</label>
        <input type="checkbox" value="louloulfx" v-model="blog.categories">
        <label>Jvousnik</label>
        <input type="checkbox" value="jvousnik" v-model="blog.categories">
        <label>Bangbang</label>
        <input type="checkbox" value="bangbang" v-model="blog.categories">
      </div>
      <label>Auteurs:</label>
      <select v-model="blog.auteur">
        <option v-for="auteur in auteurs" :key="auteur">{{auteur}}</option>
      </select>
      <button v-on:click.prevent="post">Ajout d'un Blog</button>
    </form>
    <div v-if="submitted">
      <h3>Merci pour votre ajout de blog</h3>
    </div>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Titre du blog: {{blog.title}}</p>
      <p>Contenu:</p>
      <p>{{blog.content}}</p>
      <p>Categories:</p>
      <ul>
        <li v-for="category in blog.categories" :key="category">{{category}}</li>
      </ul>
      <p>Auteur du blog: {{blog.auteur}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        auteur: ""
      },
      auteurs: ["louloulfx", "xi6xi6xi6", "Elouan Lfx"],
      submitted: false
    };
  },
  methods: {
    post() {
      this.$http
        .post("https://vuejs1-be24d.firebaseio.com/posts.json", this.blog)
        .then(function(data) {
          console.log(data);
          this.submitted = true;
        });
    }
  }
};
</script>

<style>
#add-blog * {
  box-sizing: border-box;
}

#add-blog {
  margin: 20px auto;
  max-width: 500px;
}

label {
  display: block;
  margin: 20px 0 10px;
}

input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}

#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}

#checkboxes label {
  display: inline-block;
}
h3 {
  margin-top: 10px;
}
</style>
