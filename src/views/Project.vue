<template>
  <div class="project-wrap">
    <p class="project-title">{{ currentCountry }}</p>
    <ProjectContent />
  </div>
</template>

<script>
import ProjectContent from '@/components/ProjectContent';

export default {
  name: 'Project',
  components: {
    ProjectContent
  },

  computed: {
    currentCountry() {
      return this.$route.params.curr_project;
    }
  }
};
</script>

<style lang="scss" scoped>
.project-wrap {
  margin: 30px;

  .project-title {
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 30px;
  }
}
</style>