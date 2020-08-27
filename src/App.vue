<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import FrontLayout from '@/layouts/FrontLayout';
import DashboardLayout from '@/layouts/DashboardLayout';

export default {
  components: {
    FrontLayout,
    DashboardLayout
  },

  computed: {
    layout() {
      return (this.$route.meta.layout || 'front') + '-layout';
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Merriweather', serif;
}
</style>
