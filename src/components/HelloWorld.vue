<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Change Route</h3>
    <ul>
      <li><router-link :to="{ name: 'home' }">Home Page</router-link></li>
      <li><router-link :to="{ name: 'login' }">Login Page</router-link></li>
      <li><router-link :to="{ name: 'signup' }">Sing Up Page</router-link></li>
      <li><router-link :to="{ name: 'product-list' }">Product Page</router-link></li>
      <li><router-link :to="{ name: 'user-list' }">User Page</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

