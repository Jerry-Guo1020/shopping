<template>
  <div class="login-container">
    
    <el-card class="login-card">
      <el-button type="success"  @click="LoginToHome"  class="backhome">返回
      
    </el-button>
      <strong><h1 class="login-title">用户登录👋</h1></strong>
      <el-form :model="loginForm" :rules="rules" ref="loginFormRef">
        
    
       <el-form-item prop="mail"label="邮箱地址">
          
            <el-input  placeholder="📪请输入邮箱地址"
            v-model="loginForm.mail" ></el-input>
        </el-form-item>
        
        <el-form-item   prop="password" label="登录密码">
          <el-input placeholder="🔒请输入密码" 
          v-model="loginForm.password"
          type="password"></el-input>
        </el-form-item>
        <el-form-item class="flex">
                <div class="fcheckbox-container">
                    <el-checkbox>记住我</el-checkbox><br>
                    <!--忘记密码的一个跳转链接-->
                    <el-link type="primary" :underline="false" @click="$router.push('/register')">忘记密码?</el-link>
                </div>
              </el-form-item> 
        <el-form-item>
          <el-button type="success" @click="handleLogin">登录</el-button>
          <el-button  @click="$router.push('/register')">注册账号</el-button>
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
const loginFormRef = ref(null)

const loginForm = reactive({
  username: '',
  password: ''
})

const rules = {
  mail: [{ required: true, message: '请输入邮箱地址', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' },
  { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
  ]
}

const handleLogin = () => {
  loginFormRef.value.validate((valid) => {
    if (valid) {
      // 从 localStorage 获取用户信息
      const storedEmail = localStorage.getItem('userEmail');
      const storedPassword = localStorage.getItem('userPassword');

      // 验证输入的邮箱和密码
      if (loginForm.mail === storedEmail && loginForm.password === storedPassword) {
        router.push('/PersonalHomepage');
      } else {
        ElMessage.error('邮箱或密码错误');
      }
    }
  })
}

function LoginToHome(){
      router.push('/1')
}

</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxzdW5zZXQlMjBjbG91ZHN8ZW58MHx8fHwxNjA5MjY0NzY0&ixlib=rb-1.2.1&q=80&w=1080');
  background-size: cover;
  background-position: center;
}

.login-card {
  width: 400px;
}

.login-title {
  text-align: center;
  margin-bottom: 30px;
  font-size: 24px;
  color: #303133;
  font-weight: 500;
}

/* 表单整体居中 */
:deep(.el-form) {
  width: 85%;
  margin: 0 auto;
}

/* 标签文字居中 */
:deep(.el-form-item__label) {
  justify-content: center;
}

/* 移除默认的左边距 */
:deep(.el-form-item__content) {
  margin-left: 0 !important;
}

/* 按钮居中 */
:deep(.el-form-item:last-child .el-form-item__content) {
  display: flex;
  justify-content: center;
  gap: 20px;  /* 按钮之间的间距 */
}

/* 可选：美化按钮样式 */
:deep(.el-button) {
  width: 120px;  /* 统一按钮宽度 */
}

.backhome{
  width: 20%;
  box-shadow: 0 0px 0px rgba(0, 0, 0, 0.1);
}


    /*知识复习的东西：
    1、在temple中，关于<el-form>/<el-item>/等类似的标签使用是要引用现成的element-plus的组件，而不是自己写html标签。
    2、在JavaScript中，使用ref属性可以获取到组件的实例
    3、在JavaScript中，使用const、let、var声明变量时，最后是用function来初始化变量的。
    4、 router的作用是用来控制页面的跳转，可以用$router.push()方法跳转到指定页面。
    5、在style中，：deep()可以选择到element-plus的组件样式，“.el-form”选择到el-form组件的样式，“.el-form-item__label”选择到el-form-item组件的label样式”*/
</style>

