<template>
  <div class="cart">
    <h2>购物车</h2>
    
    <div v-if="cartItems.length === 0" class="empty-cart">
      
    
    </div>
    
    <template v-else>
      <div class="cart-items">
        <el-table :data="cartItems" style="width: 100%">
          <el-table-column label="商品">
            <template #default="{ row }">
              <div class="book-info">
                <img :src="row.cover" :alt="row.title">
                <div>
                  <h3>{{ row.title }}</h3>
                  <p>{{ row.author }}</p>
                </div>
              </div>
            </template>
          </el-table-column>
          
          <el-table-column label="单价" prop="price" width="120">
            <template #default="{ row }">
              ¥{{ row.price }}
            </template>
          </el-table-column>
          
          <el-table-column label="数量" width="200">
            <template #default="{ row }">
              <el-input-number 
                v-model="row.quantity" 
                :min="1" 
                :max="3">
              </el-input-number>
            </template>
          </el-table-column>
          
          <el-table-column label="操作" width="120">
            <template #default="{ row }">
              <el-button type="danger" size="small" >删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      
      <div class="cart-footer">
        <div class="total">
          总计: <span class="price">¥{{ total }}</span>
        </div>
        <el-button type="primary" @click="open1">结算</el-button>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ElMessage } from 'element-plus'

const open1 = () => {
  ElMessage({
    showClose: true,
    message: '敬请期待',
  })
}

const cartItems = ref([
  {
    id: 1,
    title: '三体',
    author: '刘慈欣',
    price: 99.00,
    cover: '/public/三体.jpeg',
    quantity: 1
  },
  
])

const total = computed(() => {
  return cartItems.value.reduce((sum, item) => {
    return sum + item.price * item.quantity
  }, 0).toFixed(2)
})

</script>

<style lang="scss" scoped>
.cart {
  padding: 20px;
  
  h2 {
    margin-bottom: 20px;
  }
  
  .empty-cart {
    text-align: center;
    padding: 40px;
  }
  
  .book-info {
    display: flex;
    align-items: center;
    gap: 20px;
    
    img {
      width: 80px;
      height: 100px;
      object-fit: cover;
    }
    
    h3 {
      margin: 0;
      font-size: 16px;
    }
    
    p {
      color: #666;
      margin: 5px 0 0;
    }
  }
  
  .cart-footer {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
    
    .total {
      font-size: 18px;
      
      .price {
        color: #f56c6c;
        font-weight: bold;
      }
    }
  }
}
</style> 