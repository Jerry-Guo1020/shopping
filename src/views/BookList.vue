<template>
  <div class="book-list">
    <!-- 筛选器 -->
    <div class="filters">
      <el-select v-model="selectedCategory" placeholder="选择分类">
        <el-option
          v-for="item in categories"
          :key="item.id"
          :label="item.name"
          :value="item.id">
        </el-option>
      </el-select>
      
      <el-select v-model="sortBy" placeholder="排序方式">
        <el-option label="价格从低到高" value="price-asc"></el-option>
        <el-option label="价格从高到低" value="price-desc"></el-option>
      </el-select>
    </div>
    
    <!-- 图书列表 -->
    <div class="books-grid">
      <book-card
        v-for="book in filteredBooks"
        :key="book.id"
        :book="book"
      >
      </book-card>
     
    </div>
    
    <!-- 分页 -->
    <div class="pagination">
      <el-pagination
        v-model:current-page="currentPage"
        :page-size="12"
        :total="totalBooks"
        layout="prev, pager, next">
      </el-pagination>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import BookCard from '../components/BookCard.vue'

const selectedCategory = ref('')
const sortBy = ref('')
const currentPage = ref(1)
const totalBooks = ref(100)

const categories = ref([
  { id: 1, name: '文学' },
  { id: 2, name: '生活' },
  // ... 更多分类
])

const books = ref([
  {
    id: 1,
    title: '三体',
    author: '刘慈欣',
    price: 99.00,
    category: 1,
    cover: 'http://sq2u5rwaj.hn-bkt.clouddn.com/%E4%B8%89%E4%BD%93.jpeg?e=1736856623&token=8i3YOzNXgv1dAKgnWNwPJlgcbfPcJcTEKfgJpwb5:N0jn-cm8ZELsX6Ag2qIPzlBdO_c='
  },
  {
    id: 2,
    title: '活着',
    author: '余华',
    price: 59.00,
    category: 1,
    cover: 'http://sq2u5rwaj.hn-bkt.clouddn.com/%E6%B4%BB%E7%9D%80.jpeg?e=1736856569&token=8i3YOzNXgv1dAKgnWNwPJlgcbfPcJcTEKfgJpwb5:FqPhleUrzAx401AwOisRrk1S3H8='
  },
  {
    id: 3,
    title: '小王子',
    author: '圣埃克苏佩里',
    price: 39.00,
    category: 1,
    cover: 'http://sq2u5rwaj.hn-bkt.clouddn.com/%E5%B0%8F%E7%8E%8B%E5%AD%90.jpeg?e=1736856193&token=8i3YOzNXgv1dAKgnWNwPJlgcbfPcJcTEKfgJpwb5:KJdkX_uvUeBmDXCBOu_GejmNnmw='
  },
  {
    id: 4,
    title: '解忧杂货店',
    author: '东野圭吾',
    price: 79.00,
    category: 1,
    cover: 'http://sq2u5rwaj.hn-bkt.clouddn.com/%E8%A7%A3%E5%BF%A7%E6%9D%82%E8%B4%A7%E5%BA%97.jpeg?e=1736856604&token=8i3YOzNXgv1dAKgnWNwPJlgcbfPcJcTEKfgJpwb5:2pGLoKc2T_FeuY_qvXUUM6ZuDJA='
  },
  {
    id: 5,
    title: '百年孤独',
    author: '加西亚·马尔克斯',
    price: 89.00,
    category: 1,
    cover: 'http://sq2u5rwaj.hn-bkt.clouddn.com/%E7%99%BE%E5%B9%B4%E5%AD%A4%E7%8B%AC.jpeg?e=1736856590&token=8i3YOzNXgv1dAKgnWNwPJlgcbfPcJcTEKfgJpwb5:gfv_jEBx9l8F7gQaG6uOzP3wvPw='
  },
  // ... 更多书籍
])

const filteredBooks = computed(() => {
  let filtered = books.value;

  // 根据分类过滤
  if (selectedCategory.value) {
    filtered = filtered.filter(book => book.category === parseInt(selectedCategory.value));
  }

  // 根据排序方式排序
  if (sortBy.value === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy.value === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  }

  // 返回当前页的书籍
  const start = (currentPage.value - 1) * 12;
  return filtered.slice(start, start + 12);
});

</script>

<style lang="scss" scoped>
.book-list {
  padding: 20px;
  
  .filters {
    margin-bottom: 20px;
    display: flex;
    gap: 20px;
  }
  
  .books-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 20px;
    margin-bottom: 40px;
  }
  
  .pagination {
    display: flex;
    justify-content: center;
  }
}
</style> 