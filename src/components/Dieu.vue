<template>
  <div id="dieux">
    <ul>
      <li v-for="dieu in dieux" :key="dieu" v-on:click="dieu.show = !dieu.show">
        <h2>{{ dieu.name }}</h2>
        <h3 v-show="dieu.show">{{ dieu.speciality }}</h3>
      </li>
    </ul>
    <button v-on:click="deleteDieu">Supprimer un Dieu</button>
  </div>
</template>

<script>
export default {
  props: {
    dieux: {
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    deleteDieu() {
      this.dieux.pop();
    }
  },
  //lifeCycle hooks
  beforeCreate() {
    alert("beforeCreate");
  },
  created() {
    alert("created");
  },
  beforeMount() {
    alert('beforeMount');
  },
  mounted() {
    alert('mounted');
  },
  beforeUpdate(){
    alert('beforeUpdate');
  },
  updated() {
    alert('updated');
  }
};
</script>

<style scooped>
#dieux {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}

li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>
