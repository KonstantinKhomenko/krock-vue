<template>
  <div>
    <ul class="list" v-for="(el, index) in projects" :key="index">
      <router-link :to="`/project/${el.country}`" class="link">
        <li class="list-item">
          <i class="el-icon-collection icon"></i>
          {{ el.country }}
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ProjectList',
  computed: {
    ...mapGetters('dashboard', ['projects'])
  }
};
</script>

<style lang="scss" scoped>
.list {
  .link {
    text-decoration: none;
    color: black;

    .list-item {
      margin: 20px;
      list-style-type: none;
      padding: 10px;
      width: 100%;

      &:hover {
        cursor: pointer;
        transform: scale(1.08);
        background-color: #eefbee;
        border-left: 3px solid grey;
      }

      .icon {
        margin: 5px;
      }
    }
  }
}
</style>
