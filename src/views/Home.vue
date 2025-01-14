<template>
  <el-col :span="24" class="form">
    <div class="home">
      <!-- 轮播图组件 -->
      <div class="carousel-container">
        <el-carousel interval="4000" type="card"height="300px">
          <el-carousel-item v-for="item in carouselItems" :key="item.id">
            <img :src="item.imgUrl" :alt="item.title">
          </el-carousel-item>
        </el-carousel>
      </div>
      

      <!-- 分类导航 -->
      <div class="form">
        <div><h2>图书分类</h2></div>
        <br>
        <el-row :gutter="20">
          <el-col :span="4" v-for="category in categories" :key="category.id">
            
            <el-card class="category-card" style="justify-items: auto;">
              <el-icon size="24px">
                <component :is="category.icon"></component>
              </el-icon>
              <span>{{ category.name }}</span>
            </el-card>

          </el-col>
        </el-row>
      </div>
      <br>


      <!-- 新书推荐 -->
      <div class="form">
        
        <h2>新书推荐</h2>
        <br>
        <el-row>
          <el-col :span="6" v-for="book in newBooks" :key="book.id">
            <book-card :book="book"></book-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </el-col>


  
  <el-backtop :right="10" :bottom="150" />


</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BookCard from '../components/BookCard.vue'
import { 
  CollectionTag,
  Coffee,
  Basketball,  
  VideoCamera,
  Reading
} from '@element-plus/icons-vue'

const router = useRouter()

const carouselItems = ref([
  { id: 1, title: '新书上架', imgUrl: '/public/cefc1e178a82b901a5c8f0107d8da9773912efa8.png' },
  { id: 2, title: '特价促销', imgUrl: '/public/微信图片_20241210202522.png' },
  { id: 3, title: '畅销榜单', imgUrl: '/public/微信图片_20241210202824.png' }
])

const categories = ref([
  { id: 1, name: '文学', icon: CollectionTag},
  { id: 2, name: '生活', icon: Coffee },
  { id: 3, name: '运动', icon: Basketball },
  { id: 4, name: '艺术', icon: VideoCamera },
  { id: 5, name: '教育', icon: Reading },

])

const newBooks = ref([
  {
    id: 1,
    title: '三体',
    author: '刘慈欣',
    price: 99.00,
    cover: '/public/三体.jpeg'
    
  },
  // ... 更多书籍
])

const navigateToCategory = (categoryId) => {
  router.push(`/books?category=${categoryId}`)
}
</script>

<style lang="scss" scoped>
.home {
  .carousel-container {
    width: 1600px;
    margin: 0 auto;
  }

  .el-carousel {
    margin-bottom: 20px;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  user-select: none;
  max-width: 3000px;
  padding: 20px;
  box-sizing: border-box;
}
</style> 