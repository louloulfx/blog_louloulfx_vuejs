<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>Bonsoir à tous, remplissez les champs svp</h3>
        <p>Voilà les infos à remplir</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required>
        <input type="password" placeholder="password" required>
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">Envoyer</button>
      </div>
    </form-helper>
    <!-- <app-header v-bind:title="title" v-on:changeTitle='updateTitle($event)'></app-header>
    <app-dieux v-bind:dieux="dieux"></app-dieux>
    <app-footer v-bind:title="title"></app-footer>-->
  </div>
</template>

<script>
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Dieux from "./components/Dieu";
import formHelper from "./components/formHelper.vue";

export default {
  components: {
    // "app-header": Header,
    // "app-footer": Footer,
    // "app-dieux": Dieux
    "form-helper": formHelper
  },
  data() {
    return {
      title: "je suis dynamique"
      // dieux: [
      //   { name: "Elouan", speciality: "Tout", show: false },
      //   { name: "Romain", speciality: "feeding", show: false },
      //   { name: "Camille", speciality: "La rage", show: false },
      //   { name: "Alexandre", speciality: "Trash Talk", show: false },
      //   { name: "Pierre", speciality: "Dormir", show: false },
      //   { name: "Valentin", speciality: "Dealer", show: false }
      // ],
      // title: "Vue Dieux"
    };
  },
  methods: {
    // updateTitle(updateTitle) {
    //   this.title = updateTitle;
    // }
  }
};
</script>

<style>
</style>
