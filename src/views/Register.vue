<template>
  <div class="register-wrap">
    <p class="register-title">Registration</p>

    <RegisterForm />
  </div>
</template>

<script>
import RegisterForm from '@/components/RegisterForm';

export default {
  name: 'Register',
  components: {
    RegisterForm
  }
};
</script>

<style lang="scss" scoped>
.register-wrap {
  padding-top: 50px;
  width: 350px;
  margin: auto;

  .register-title {
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 20px;
  }
}
</style>
