<template>
  <div class="container">
    <div class="container-vue">
      <div class="item">
        <img src="@/assets/logo.png" alt="vue-logo" />
      </div>
      <div class="item">
        <img src="@/assets/logo.png" alt="vue-logo" />
      </div>
      <div class="item">
        <img src="@/assets/logo.png" alt="vue-logo" />
      </div>
      <div class="item">
        <img src="@/assets/logo.png" alt="vue-logo" />
      </div>
    </div>

    <div class="container-react">
      <div class="item">
        <img width="200" height="200" src="@/assets/react.png" alt="vue-logo" />
      </div>
      <div class="item">
        <img width="200" height="200" src="@/assets/react.png" alt="vue-logo" />
      </div>
      <div class="item">
        <img width="200" height="200" src="@/assets/react.png" alt="vue-logo" />
      </div>
      <div class="item">
        <img width="200" height="200" src="@/assets/react.png" alt="vue-logo" />
      </div>
    </div>

    <div class="container-angular">
      <div class="item">
        <img width="200" height="200" src="@/assets/angular.png" alt="vue-logo" />
      </div>
      <div class="item">
        <img width="200" height="200" src="@/assets/angular.png" alt="vue-logo" />
      </div>
      <div class="item">
        <img width="200" height="200" src="@/assets/angular.png" alt="vue-logo" />
      </div>
      <div class="item">
        <img width="200" height="200" src="@/assets/angular.png" alt="vue-logo" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FrontPage'
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  .item {
    margin: 10px;
    border: 2px solid rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    font-size: 18px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);

    &:hover {
      cursor: pointer;
      transform: scale(1.05);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.7);
    }
  }
}
</style>
