<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{name:'Home'}">Home</router-link> |
      <router-link :to="{name:'Cart'}">Cart</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #08519b;
}

#nav a.router-link-exact-active {
  color: #db5b10;
}

.side-color {
  color: #c04e0b;
}

.sub-color {
  color: #566371;
}

.post-title {
  color: #343F4A;
}

.post-sub-title {
  color: #566371;
}

.button-color {
  background-color: #50BE8C;
}
</style>
