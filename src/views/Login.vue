<template>
  <div class="login-wrap">
    <p class="login-title">Log in</p>

    <LoginForm />
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm';

export default {
  name: 'Login',
  components: {
    LoginForm
  }
};
</script>

<style lang="scss" scoped>
.login-wrap {
  padding-top: 50px;
  width: 350px;
  margin: auto;

  .login-title {
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 20px;
  }
}
</style>
