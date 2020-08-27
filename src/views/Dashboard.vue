<template>
  <div class="dashboard-wrap">
    <template v-for="(el, index) in projects">
      <ProjectItem
        :key="index"
        :country="el.country"
        :population="el.population"
        :continent="el.continent"
        @selectProject="onSelectProject"
      />
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProjectItem from '@/components/ProjectItem';
export default {
  name: 'Dashboard',
  components: {
    ProjectItem
  },

  computed: {
    ...mapGetters('dashboard', ['projects'])
  },

  methods: {
    onSelectProject(curr_project) {
      this.$router.push({
        name: 'Project',
        params: {
          curr_project
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.dashboard-wrap {
  display: flex;
  flex-wrap: wrap;
}
</style>
