<template>
  <div class="user-layout-wrapper">
    <router-view></router-view>
    <ul>
      <li><router-link :to="{ path: '/user/list' }">List</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UserLayout',
};
</script>
