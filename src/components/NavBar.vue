<template>
   <el-col :span="24 "class="form" >
  <el-menu  router class="nav-bar">
    
    <el-menu-item index="/">
      <h1>哈哈哈在线书店网站</h1>
   
    </el-menu-item>

    <el-menu-item index="/1">
      <el-icon>
        <House />
      </el-icon>
      首页
    </el-menu-item>
    <el-menu-item index="/books">
      <el-icon>
        <Reading />
      </el-icon>
      图书列表
    </el-menu-item>
    <el-menu-item index="/cart">
      <el-icon>
        <ShoppingCart />
      </el-icon>
      购物车
      <el-badge :value="cartCount" class="nav-bar" v-if="cartCount > 0" />
        
    </el-menu-item>

    <el-button type="success" class="haha" style="margin-left:auto" @click="navigateToLogin">登录</el-button>
  </el-menu>
  
</el-col>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { House, Reading, ShoppingCart, UserFilled } from '@element-plus/icons-vue'

const cartCount = ref(0)
const router = useRouter()


function navigateToLogin(){
      router.push('/login')
}
</script>

<style lang="scss" scoped>
.nav-bar {
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  justify-content: left;
  display: flex;
  align-items: center;
  

}

.haha {
  padding:  10px;
  box-shadow: 0 0px 0px rgba(0, 0, 0, 0.1);
  text-align: center;
  justify-content: center;
}

</style>