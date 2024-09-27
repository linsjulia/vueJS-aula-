<template>
  <div class="container">
    <nav class="item">
      <router-link to="/triangle">Área do Triângulo Equilátero</router-link>
    </nav>
    <nav class="item">
      <router-link to="/circle"> Área do Círculo </router-link>
    </nav>
    <nav class="item">
      <router-link to="/trapeze">Área do Trapézio</router-link>
    </nav>
  </div>

  <router-view></router-view>
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body{
  background-color: darkorchid;
  background-image: url(https://images.unsplash.com/photo-1725900653710-d1db440048bc?q=80&w=1834&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
}

.container{
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  width: 600px;
  height: 200px;
  background-color: blueviolet;
  flex: 1;
  border-radius: 20px;
  left: 300px;
  position: relative;
}

.item{
  border: 1px solid black;
  flex: 1;
  width: 300px;
  height: 50px;
  background-color: cornflowerblue;
  border-radius: 20px;
  backdrop-filter: blur(20px);
}


</style>
