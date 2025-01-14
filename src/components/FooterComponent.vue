<template>
  <footer class="footer">
    <div class="footer-content">


      <div class="footer-section">
        <h3>关于我们</h3>
        <ul>
          <li>公司简介</li>
          <li>联系我们</li>
          <li>加入我们</li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h3>帮助中心</h3>
        <ul>
          <li>购物指南</li>
          <li>支付方式</li>
          <li>配送方式</li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h3>售后服务</h3>
        <ul>
          <li>退货政策</li>
          <li>退货流程</li>
          <li>常见问题</li>
        </ul>
      </div>


    </div>

    
    <div class="supergood ">
      <p>© 2024 Jerry的期末大作业. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
// 组件逻辑
</script>

<style lang="scss" scoped>
.footer {
  margin-top: auto;
  background-color: #f5f5f5;
  padding: 40px 0 20px;
  
  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    padding: 0 20px;
    
    .footer-section {
      h3 {
        font-size: 18px;
        margin-bottom: 15px;
        color: #333;
      }
      
      ul {
        list-style: none;
        padding: 0;
        
        li {
          margin-bottom: 8px;
          color: #666;
          cursor: pointer;
          
          &:hover {
            color: #409EFF;
          }
        }
      }
    }
  }
  
  .supergood {
    text-align: center;
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid #ddd;
    
    p {
      color: #999;
      font-size: 14px;
    }
  }
}
</style> 