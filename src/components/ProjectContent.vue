<template>
  <div class="project-content-wrap">
    <router-link :to="{ name: 'Step' }" class="link">
      <div class="project-item">
        <div>Project Vue</div>
        <img width="200" height="200" src="@/assets/logo.png" alt="map" />
        <div>
          <span>Tesk task</span>
          <span>Krock</span>
        </div>
      </div>
    </router-link>

    <router-link :to="{ name: 'Step' }" class="link">
      <div class="project-item">
        <div>Project Vue</div>
        <img width="200" height="200" src="@/assets/logo.png" alt="map" />
        <div>
          <span>Tesk task</span>
          <span>Krock</span>
        </div>
      </div>
    </router-link>

    <router-link :to="{ name: 'Step' }" class="link">
      <div class="project-item">
        <div>Project Vue</div>
        <img width="200" height="200" src="@/assets/logo.png" alt="map" />
        <div>
          <span>Tesk task</span>
          <span>Krock</span>
        </div>
      </div>
    </router-link>

    <router-link :to="{ name: 'Step' }" class="link">
      <div class="project-item">
        <div>Project Vue</div>
        <img width="200" height="200" src="@/assets/logo.png" alt="map" />
        <div>
          <span>Tesk task</span>
          <span>Krock</span>
        </div>
      </div>
    </router-link>

    <router-link :to="{ name: 'Step' }" class="link">
      <div class="project-item">
        <div>Project Vue</div>
        <img width="200" height="200" src="@/assets/logo.png" alt="map" />
        <div>
          <span>Tesk task</span>
          <span>Krock</span>
        </div>
      </div>
    </router-link>

    <router-link :to="{ name: 'Step' }" class="link">
      <div class="project-item">
        <div>Project Vue</div>
        <img width="200" height="200" src="@/assets/logo.png" alt="map" />
        <div>
          <span>Tesk task</span>
          <span>Krock</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ProjectContent'
};
</script>

<style lang="scss" scoped>
.project-content-wrap {
  display: flex;
  flex-wrap: wrap;

  .link {
    text-decoration: none;
    color: #000;
  }

  .project-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px;
    justify-content: center;
    width: max-content;
    border: 2px solid rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    font-size: 18px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);

    &:hover {
      cursor: pointer;
      transform: scale(1.05);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.7);
    }

    span {
      margin: 0 3px;
    }
  }
}
</style>
