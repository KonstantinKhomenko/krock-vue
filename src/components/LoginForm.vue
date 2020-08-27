<template>
  <el-form :model="formData" :rules="rules" @submit.native.prevent="submitHandler" ref="loginForm">
    <el-form-item label="Email" prop="email" size="small">
      <el-input v-model="formData.email" />
    </el-form-item>

    <el-form-item label="Password" prop="password" size="small">
      <el-input v-model="formData.password" type="password" :show-password="true" />
    </el-form-item>

    <el-button class="login-btn" type="success" plain size="small" native-type="submit">Login</el-button>
  </el-form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'LoginForm',
  data: () => ({
    formData: {
      email: '',
      password: ''
    },
    rules: {
      email: [
        {
          required: true,
          message: 'Please input email address',
          trigger: 'blur'
        },
        {
          type: 'email',
          message: 'Please input correct email address',
          trigger: 'blur'
        }
      ],
      password: [
        { required: true, message: 'Please input password', trigger: 'blur' }
      ]
    }
  }),

  computed: {
    ...mapGetters('auth', ['isLoggedIn'])
  },

  watch: {
    isLoggedIn: 'redirectToHome'
  },

  methods: {
    ...mapActions('auth', ['login']),
    submitHandler() {
      this.$refs.loginForm.validate(isValid => {
        if (!isValid) return;

        console.log(this.formData);

        this.login(true);
      });
    },

    redirectToHome(bool) {
      if (bool) {
        this.$router.push({ name: 'Dashboard' });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.login-btn {
  margin-top: 20px;
}
</style>
