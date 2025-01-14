<template>
    <br>
    <div class="aaa">
        <h1>欢迎使用"哈哈哈在线书店网站"</h1>
    </div>

    <br>
    <div class="bbb"><strong> 本报告以“在线书店网站”的开发为主题，探讨了现代前端开发技术在实际项目中的应用。
            项目基于Vue 3框架开发，结合Element Plus组件库与SCSS样式预处理器，实现了一个具备首页展示、图书列表、购物车、
            用户注册与登录等功能的综合性Web应用。报告详细分析了开发背景、技术选型、功能设计、实现细节及其意义，并对开发过程中的挑战与解决方案进行了总结。</strong></div>

    <div class="ccc">如果在使用中遇到任何的问题，欢迎反馈……</div>

    <div class="right-align">

        <el-button type="success" style="margin-top: 20px; width: 100px; height:    50px;"
            @click="navigateToLogin">开始使用</el-button>

    </div>
</template>

<script setup>

import { useRouter } from 'vue-router'

const router = useRouter();

function navigateToLogin() {
    router.push('/1');
}
</script>


<style lang="css">
.aaa {
    justify-items: center;
}

.bbb {
    text-indent: 2em;
    /* 添加段落缩进 */
    padding: 20px;
    font-size: 20px;
    /*字体大小*/
    line-height: 2;
    /*行高大小。直接数字就是font-size的多少倍 */
}

.ccc {
    text-align: center;
}


.right-align {
    text-align: center;
}
</style>