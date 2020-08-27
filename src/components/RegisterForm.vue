<template>
  <el-form
    :model="formData"
    :rules="rules"
    ref="registerForm"
    @submit.native.prevent="submitHandler"
  >
    <el-form-item label="Email" prop="email" size="small">
      <el-input v-model="formData.email" />
    </el-form-item>

    <el-form-item label="Phone" prop="phone" size="small">
      <el-input v-model="formData.phone" />
    </el-form-item>

    <el-form-item label="Password" prop="pass_1" size="small">
      <el-input v-model="formData.pass_1" type="password" :show-password="true" />
    </el-form-item>

    <el-form-item prop="pass_2" size="small">
      <el-input v-model="formData.pass_2" type="password" :show-password="true" />
    </el-form-item>

    <div>
      <el-button
        class="register-btn"
        type="success"
        plain
        size="small"
        native-type="submit"
      >Register</el-button>
    </div>
  </el-form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'RegisterForm',
  data() {
    const validatePhone = (rule, value, callback) => {
      if (!Number.isInteger(+value)) {
        callback(new Error('Phone must be a number'));
      } else if (value.length < 10) {
        callback(new Error('Min length phone number 10'));
      } else {
        callback();
      }
    };

    const validatePass = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('Password should be at least 6 characters'));
      } else if (value !== this.formData.pass_2) {
        callback(new Error('Passwords must match'));
      } else {
        callback();
      }
    };

    const validatePass2 = (rule, value, callback) => {
      if (value !== this.formData.pass_1) {
        callback(new Error('Passwords must match'));
      } else {
        if (this.formData.pass_1 !== '') {
          this.$refs.registerForm.validateField('pass_1');
        }
        callback();
      }
    };

    return {
      formData: {
        email: '',
        phone: '',
        pass_1: '',
        pass_2: ''
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
        phone: [
          {
            required: true,
            message: 'Please input phone',
            trigger: 'blur'
          },
          { validator: validatePhone, trigger: 'blur' }
        ],
        pass_1: [
          { required: true, message: 'Please input password', trigger: 'blur' },
          { validator: validatePass, trigger: 'blur' }
        ],
        pass_2: [
          { required: true, message: 'Please input password', trigger: 'blur' },
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    };
  },

  methods: {
    ...mapActions('auth', ['register']),
    submitHandler() {
      this.$refs.registerForm.validate(isValid => {
        if (!isValid) return;
        console.log(this.formData);

        this.register(true);

        this.$router.push({ name: 'Dashboard' });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.register-btn {
  margin-top: 20px;
}
</style>
