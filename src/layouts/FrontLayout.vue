<template>
  <el-container>
    <el-header>
      <NavBar />
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
import NavBar from '@/components/NavBar';

export default {
  name: 'FrontLayout',
  components: {
    NavBar
  }
};
</script>

<style lang="scss" scoped>
.el-header {
  padding: 0;
}
</style>
