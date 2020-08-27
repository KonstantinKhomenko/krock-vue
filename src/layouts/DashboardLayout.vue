<template>
  <el-container>
    <el-header>
      <NavBar />
    </el-header>
    <el-container>
      <el-aside v-if="asideVisible">
        <Aside />
      </el-aside>
      <el-container>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import { mapGetters } from 'vuex';

import Aside from '@/components/Aside';
import NavBar from '@/components/NavBar';

export default {
  name: 'DashboardLayout',
  components: {
    Aside,
    NavBar
  },

  computed: {
    ...mapGetters('dashboard', ['asideVisible'])
  }
};
</script>

<style lang="scss" scoped>
.el-container {
  min-height: 95vh;

  .el-aside {
    border-right: 2px solid #546e7a;
    margin-top: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  }

  .el-main {
    padding: 0;
  }

  .el-header {
    padding: 0;
  }
}
</style>
