<template>
  <div class="register-container">
    <el-card class="register-card">
      <strong><h1 class="login-title">创建账号✨</h1></strong>
      <el-form :model="registerForm" :rules="rules" ref="registerFormRef">
        <el-form-item prop="username" label="用户名👤">
          <el-input v-model="registerForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>

        <el-form-item prop="mail" label="邮箱地址📧">
          <el-input 
            v-model="registerForm.mail" 
            type="mail" 
            placeholder="请输入邮箱地址">
          </el-input>
        </el-form-item>

        <el-form-item prop="password" label="输入密码 🔒">
          <el-input 
            v-model="registerForm.password" 
            type="password" 
            placeholder="请输入密码 ">
          </el-input>
        </el-form-item>
        
        <el-form-item prop="confirmPassword" label="确认密码 🔒">
          <el-input 
            v-model="registerForm.confirmPassword" 
            type="password" 
            placeholder="请再次输入密码">
          </el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="success" @click="handleRegister" >✨注册</el-button>
          <el-button @click="$router.push('/login')">返回登录</el-button>
        </el-form-item>


      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const router = useRouter()
const registerFormRef = ref(null)

const registerForm = reactive({
  username: '',
  password: '',
  confirmPassword: ''
})

const validatePass2 = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请再次输入密码'))
  } else if (value !== registerForm.password) {
    callback(new Error('两次输入密码不一致!'))
  } else {
    callback()
  }
}

const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
  ],
  confirmPassword: [
    { required: true, validator: validatePass2, trigger: 'blur' }
  ],
  mail: [
    { required: true, message: '请输入邮箱地址',  },
    { min: 6,  message: '长度在 6 以上字符', trigger: 'blur' }
  ]
}

const handleRegister = () => {
  registerFormRef.value.validate((valid) => {
    if (valid) {
      // 保存注册信息到 localStorage
      localStorage.setItem('userEmail', registerForm.mail);
      localStorage.setItem('userPassword', registerForm.password);
      ElMessage.success('注册成功！')
      router.push('/login')
    }
  })
}
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGJhY2tncm91bmR8ZW58MHx8fHwxNjA5MjY1NjY0&ixlib=rb-1.2.1&q=80&w=1080');
  background-size: cover;
  background-position: center;
}

.register-card {
  width: 400px;
  justify-content: center;
  background-color:white;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.login-title {
  text-align: center;
  margin-bottom: 30px;
  font-size: 24px;
  color: #303133;
  font-weight: 500;
}


/*这个是真不会啊*/

/* 按钮居中 */
:deep(.el-form-item:last-child .el-form-item__content) {
  display: flex;
  justify-content: center;
  gap: 20px;  /* 按钮之间的间距 */
}
</style> 