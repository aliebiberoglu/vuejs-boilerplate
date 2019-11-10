<template>
  <div class="product-layout-wrapper">
    <router-view></router-view>
    <ul>
      <li><router-link :to="{ path: '/product/list' }">List</router-link></li>
      <li><router-link :to="{ path: '/product/detail/234234' }">Detail</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProductLayout',
};
</script>
