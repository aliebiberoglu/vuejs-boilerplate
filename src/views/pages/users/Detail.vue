<template>
  <div class="user-detail-page">
    <table v-if="!userDetailPending">
      <tr>
        <td align="right">Name</td>
        <td>:</td>
        <td>{{ userDetail.name }}</td>
      </tr>
      <tr>
        <td align="right">Username</td>
        <td>:</td>
        <td>{{ userDetail.username }}</td>
      </tr>
      <tr>
        <td align="right">Email</td>
        <td>:</td>
        <td>{{ userDetail.email }}</td>
      </tr>
      <tr>
        <td align="right">Address</td>
        <td>:</td>
        <td>
          {{ userDetail.address.suite }}
          {{ userDetail.address.street }}
          {{ userDetail.address.zipcode }}
          {{ userDetail.address.city }}
        </td>
      </tr>
      <tr>
        <td align="right">Phone</td>
        <td>:</td>
        <td>{{ userDetail.phone }}</td>
      </tr>
      <tr>
        <td align="right">Web Site</td>
        <td>:</td>
        <td>{{ userDetail.website }}</td>
      </tr>
    </table>
    <div v-else>Loading...</div>
  </div>
</template>
<style>
  .user-detail-page table {
    width: 320px;
    margin: 0px auto;
    text-align: left;
  }

  .user-detail-page table tr td {
    padding: 5px;
  }
</style>
<script>

// ## Store Inc.
import { mapState, mapActions } from 'vuex';

export default {
  name: 'UserDetail',

  // -----------------------------------------------------------------------------------------------
  // ## Data
  // -----------------------------------------------------------------------------------------------
  data() {
    return {
    };
  },

  // -----------------------------------------------------------------------------------------------
  // ## Computed
  // -----------------------------------------------------------------------------------------------
  computed: {
    // User module state.
    ...mapState('UserModule', [
      'userDetail',
      'userDetailPending',
    ]),
  },

  // -----------------------------------------------------------------------------------------------
  // ## Created
  // -----------------------------------------------------------------------------------------------
  created() {
    this.getUserDetail(this.$route.params.id);
  },

  // -----------------------------------------------------------------------------------------------
  // ## Watch
  // -----------------------------------------------------------------------------------------------
  watch: {
  },

  // -----------------------------------------------------------------------------------------------
  // ## Methods
  // -----------------------------------------------------------------------------------------------
  methods: {
    // User module methods.
    ...mapActions('UserModule', [
      'getUserDetail',
    ]),
  },
};
</script>
