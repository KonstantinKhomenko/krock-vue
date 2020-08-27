<template>
  <div class="item" @click="selectItem">
    <p>Project</p>
    <p class="item-description">{{ country }}</p>
  </div>
</template>

<script>
export default {
  name: 'ProjectItem',
  props: {
    country: {
      type: String,
      default: ''
    },
    continent: {
      type: String,
      default: ''
    },
    population: {
      type: Number,
      default: 0
    }
  },
  methods: {
    selectItem() {
      this.$emit('selectProject', this.country);
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
  height: 200px;
  justify-content: center;
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  font-size: 18px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
  width: 200px;

  &:hover {
    cursor: pointer;
    transform: scale(1.08);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.7);
  }

  .item-description {
    margin-top: 10px;
    color: chocolate;
    padding: 10px;
  }
}
</style>
