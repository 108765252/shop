<template>
  <div id="app">
    <router-view></router-view>
<van-tabbar>
  <van-tabbar-item icon="wap-home-o" to="/">首页</van-tabbar-item>
  <van-tabbar-item icon="records" to="/Category">分类</van-tabbar-item>
  <van-tabbar-item icon="shopping-cart-o" to="/Cart">购物车</van-tabbar-item>
  <van-tabbar-item icon="contact" to="/Profile">我的</van-tabbar-item>
</van-tabbar>

    <!-- <ul class="footer-bar">
      <li class="footer-bar-item">
        <router-link to="/">首页</router-link>
        </li>
      <li class="footer-bar-item">
         <router-link to="/Category">分类</router-link>
         </li>
      <li class="footer-bar-item">
        <router-link to="/Cart">购物车</router-link>
        </li>
      <li class="footer-bar-item">
        <router-link to="/Profile">我的</router-link>
        </li>
    </ul> -->
  </div>
</template>

<style lang="scss">
.footer-bar {
  display: flex;
  background: #eeeeee;
  position: fixed;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  bottom: 0;
  &-item {
    flex-grow: 1;
    text-align: center;
  }
}
</style>
