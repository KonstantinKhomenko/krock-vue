<template>
  <div class="project-list-wrap">
    <router-link :to="{ name: 'Dashboard' }">
      <el-button type="primary" plain size="small">All projects</el-button>
    </router-link>
    <p class="list-title">Projects</p>

    <ProjectList />

    <el-button size="small" class="btn" type="success" plain @click="addNewProject">Create project</el-button>

    <router-link class="link-btn" :to="{ name: 'FrontPage' }">
      <el-button size="mini" plain type="info">Front page</el-button>
    </router-link>

    <router-link class="link-btn" :to="{ name: 'Step' }">
      <el-button size="mini" plain type="primary">Step page</el-button>
    </router-link>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import ProjectList from '@/components/ProjectList';

export default {
  name: 'Aside',
  components: {
    ProjectList
  },
  methods: {
    ...mapActions(['fetchAllCountries']),
    ...mapActions('dashboard', ['addProject']),

    addNewProject() {
      this.addProject();
    }
  },

  async mounted() {
    await this.fetchAllCountries();
  }
};
</script>

<style lang="scss" scoped>
.project-list-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90%;
  align-items: flex-start;
  margin-left: 20px;
  padding-top: 30px;

  .list-title {
    margin-top: 20px;
    font-size: 26px;
    color: #546e7a;
    font-weight: 500;
  }

  .btn {
    margin: 20px 0;
    align-self: center;
  }

  .link-btn {
    margin-top: 20px;
  }
}
</style>
