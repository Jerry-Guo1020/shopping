<template>
  <div class="homepage-container">
    <el-card class="homepage-card">
      <h1 class="homepage-title">个人主页</h1>
      <el-row>
        <el-col :span="8">
          <el-avatar size="100" src="https://via.placeholder.com/100" />
          <h2>{{ user.name }}</h2>
          <p>{{ user.email }}</p>
        </el-col>
        <el-col :span="16">
          <el-button type="primary" @click="editProfile">编辑个人资料</el-button>
          <el-button type="danger" @click="logout">登出</el-button>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <h3>我的帖子</h3>
      <br>
      <el-list>
        <el-list-item v-for="post in userPosts" :key="post.id">
          <h4>{{ post.title }}</h4>
          <p>{{ post.content }}</p>
        </el-list-item>
      </el-list>
    </el-card>
  </div>
</template>

<script setup>

import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const user = ref({
  name: '哈哈哈',
  email: 'hahaha@qq.com'
})



const editProfile = () => {
  // 编辑个人资料的逻辑
}

const logout = () => {
    router.push('/login')
  // 登出的逻辑
}



</script>

<style scoped>
.homepage-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.homepage-card {
  width: 600px;
  padding: 20px;
}

.homepage-title {
  text-align: center;
  margin-bottom: 20px;
}
</style>