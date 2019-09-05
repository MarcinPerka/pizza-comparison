<template>
  <div id="app">
    <b-container>
      <b-row class="justify-content-center">
        <PizzaBox />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import PizzaBox from "./components/PizzaBox.vue";

export default {
  name: "app",
  components: {
    PizzaBox
  }
};
</script>

<style>
#app {
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #eef0f1;
}

input {
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 300;
  line-height: 1.5em;
}

html,
body,
#app {
  height: 100%;
  width: 100%;
  margin: 0px;
  padding: 0px;
  background-color: #4b357c;
}
</style>
