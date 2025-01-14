<template>
    
  <el-card class="book-card" :body-style="{ padding: '0px' }">
    <img :src="book.cover" class="book-image">
    <div class="book-info">
      <h3>{{ book.title }}</h3>
      <p class="author">{{ book.author }}</p>
      <div class="price-row">
        <span class="price">¥{{ book.price }}</span>
        <el-button type="primary" size="small" @click="Carthah">加入购物车</el-button>
      </div>
    </div>
  </el-card>
</template>

<script setup>
import { defineProps } from 'vue'
import Cart from '../views/Cart.vue';
import router from '../router';
import { useRouter } from 'vue-router';

const props = defineProps({
  book: {
    type: Object,
    required: true
  }
})



const Carthah =() =>{
  router.push({name:'Cart'});
}

</script>

<style lang="scss" scoped>
.book-card {
  width: 240px;
  margin: 10px;
  
  .book-image {
    width: 100%;
    height: 280px;
    object-fit: cover;
  }
  
  .book-info {
    padding: 14px;
    
    h3 {
      margin: 0;
      font-size: 16px;
    }
    
    .author {
      color: #666;
      font-size: 14px;
      margin: 8px 0;
    }
    
    .price-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      .price {
        color: #f56c6c;
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
}
</style> 