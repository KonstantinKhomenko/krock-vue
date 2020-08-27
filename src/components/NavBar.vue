<template>
  <nav class="nav-bar" :style="{ 'justify-content': flexStyle }">
    <template v-if="!isLoggedIn">
      <router-link :to="{ name: 'FrontPage' }">
        <el-button type="primary" plain class="btn">Home</el-button>
      </router-link>
      <router-link :to="{ name: 'Login' }">
        <el-button type="primary" plain class="btn">Log in</el-button>
      </router-link>
      <router-link :to="{ name: 'Register' }">
        <el-button type="primary" plain class="btn">Get started</el-button>
      </router-link>
    </template>

    <template v-else>
      <el-button type="primary" plain :icon="asideIcon" circle @click="toggleAside"></el-button>
      <el-button type="danger" plain class="btn" @click="logoutUser">Log out</el-button>
    </template>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'NavBar',
  computed: {
    ...mapGetters('auth', ['isLoggedIn']),
    ...mapGetters('dashboard', ['asideVisible']),
    flexStyle() {
      return this.isLoggedIn ? 'space-between' : 'flex-end';
    },
    asideIcon() {
      return this.asideVisible ? 'el-icon-arrow-left' : 'el-icon-arrow-right';
    }
  },

  methods: {
    ...mapActions('auth', ['logout']),
    ...mapActions('dashboard', ['toggleAside']),
    logoutUser() {
      this.logout(false);
      this.$router.push({ name: 'FrontPage' });
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-bar {
  display: flex;
  background-color: #546e7a;
  align-items: center;
  height: 70px;
  padding: 0 20px;

  .btn {
    margin-left: 20px;
  }
}
</style>
