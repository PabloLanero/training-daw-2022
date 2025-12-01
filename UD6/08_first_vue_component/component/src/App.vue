<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue';

const miVariable = ref(5)
const lista = ref(new Array<number>())

function aumentar(){
  //if(miVariable.value<8) 
    miVariable.value++
}
function disminuir(){
  //if(miVariable.value>3) 
  
  miVariable.value--
}

function guardarNumero(){
  lista.value.push( miVariable.value)
  console.log(lista.value);
  
}
</script>

<template>
  <main>
    <p>{{ miVariable }}</p>
    <br>
    <button v-on:click=aumentar()>Este es mi button para aumentar</button>
    <br>
    <br>
    <br>
    <button v-on:click=disminuir()>Este es mi button para disminuir</button>
    <br>
    <br>
    <button v-on:click=guardarNumero()>Este es mi button para añadirlo a la lista</button>
    <ul>
      <li v-for="(item,index) in lista" :key="index">
        {{ item }}
      </li>
    </ul>
  </main>

  
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
